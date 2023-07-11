'use client'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation';
import { ModalFinish } from '@/components/pizzaria/ModalFinish';
import { toast } from 'react-toastify'
import { setupApiClient } from '@/services/pizzaria/api';
import styles from './styles.module.scss'
import { ListItem } from '@/components/pizzaria/ListItem';
import { FiTrash2 } from 'react-icons/fi'
import { AuthContext } from '@/contexts/pizzaria/AuthContext';
import { useSearchParams } from 'next/navigation';

export type CategoryProps = {
    id: string;
    name: string;
}

type ProductProps = {
    id: string,
    name: string,
    price: string
}

type ItemsProps = {
    id: string;
    product_id: string;
    name:string;
    amount: string | number;
    price: string;
}

export default function OrderItem(){
    const { socket } = useContext(AuthContext);
    const route = useRouter();
    const api = setupApiClient();
    const searchparams = useSearchParams()
    const order_id: string = searchparams.get('order_id')
    const table: string = searchparams.get('table')

    const [category, setCategory] = useState<CategoryProps[] | []>([]);
    const [categorySelected, setCategorySelected] = useState(-1)
    const [product, setProduct] = useState<ProductProps[] | []>([])
    const [productSelected, setProductSelected] = useState(-1)
    const [modalVisible, setModalVisible] = useState(false)
    const [amount, setAmount] = useState('1')
    const [items, setItems] = useState<ItemsProps[]>([])
    const [totalOrder, setTotalOrder] = useState(0)

    const [loadingAction, setLoadingAction] = useState(false);

    useEffect(()=>{
        async function loadInfo(){
            const response = await api.get('/category')
            setCategory(response.data)
        }
        loadInfo()
    }, [totalOrder])
    useEffect(()=>{

    }, [loadingAction])

    useEffect(()=>{
        async function loadProducts(){
            if(categorySelected != -1){                
                const response = await api.get('/category/product',{
                    params:{
                        category_id:  category[categorySelected]?.id
                    }
                })
                setProduct(response.data)
                setProductSelected(-1)
            }else{setProduct([]), setProductSelected(-1) }
        }
        loadProducts(); 
    },[categorySelected])

    async function handleCloseOrder(){
        try {
            setLoadingAction(true);
            await api.delete('/order', {
                params:{
                    order_id: order_id
                }
            })
            route.push('/pizzaria/order')
            setLoadingAction(false);
        } catch (error) {
            console.log("erro:", error);
            route.push('/pizzaria/order')
            setLoadingAction(false);
        }
    }

    function handleChangeCategory(e){
        // console.log("posição da categoria selecionada", e.target.value);
        // console.log("categoria selecionada", category[e.target.value]);
        setCategorySelected(e.target.value)
    }

    function handleChangeProduct(e){      
        setProductSelected(e.target.value)
    }

    async function handleAdd(){
        try {
            setLoadingAction(true)
            const response = await api.post('/order/add',{
                order_id: order_id,
                product_id: product[productSelected].id,
                amount: Number(amount)
            })
    
            let data = {
                id: response.data.id,
                product_id: product[productSelected].id as string,
                name: product[productSelected].name as string,
                amount: amount as string,
                price: product[productSelected].price as string
            }
            setItems(oldArray => [...oldArray, data])
            setTotalOrder(e => (Number(product[productSelected].price) * Number(amount)) + e)
            setLoadingAction(false)
        } catch (error) {
            console.log("error:", error);
            route.push('/pizzaria/order')
            toast.warn("Por favor, tente novamente")
            setLoadingAction(false)
        }

    }

    async function handleDeleteItem(item_id: string){
        setLoadingAction(true);
        const response = await api.delete('/order/delete',{
            params:{
                item_id: item_id
            }
        })
        //apos remover de api, remover da lista
        let removeItems = items.filter(item => {
            return(item.id !== item_id)
        })
        setItems(removeItems)
        setLoadingAction(false);
    }

    async function handleFinishOrder(id){        
        try {
            setLoadingAction(true)
            await api.put('/order/send', {
                order_id: order_id
            })
            socket?.emit('message')
            route.push("/pizzaria/dashboard")
        } catch (error) {
            console.log("error:", error);
            route.push('/pizzaria/order')
            toast.warn("Por favor, tente novamente")
        }
    }
    function handleModalOrder(){
        setModalVisible(true)
    }

    function handleCloseModal(){
        setModalVisible(false)
    }

    function subProduct(subValue: string){
        setTotalOrder(value => value - Number(subValue))
    }

    return(
        <>
            <main className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Mesa {table}</h2>
                    {items.length === 0 && (
                        <button 
                        onClick={handleCloseOrder}
                        disabled={loadingAction}
                        style={loadingAction ? {cursor: 'wait'} : {cursor: 'pointer'}}
                        >
                            <FiTrash2 size={28} color='#ff3f4b'/>
                        </button>
                    )}
                </div>

                    <select 
                    className={styles.input} 
                    value={categorySelected} 
                    onChange={handleChangeCategory}
                    style={{color: categorySelected != -1 ? '#fff' : '#757575'}}
                    >
                        <option style={{color: '#fff'}} value={-1} >Selecione uma categoria</option>
                            {category?.map((item:ProductProps, index:number)=>{
                                return(
                                    <option key={item.id} value={index} style={{color: '#fff'}}>
                                        {item.name}
                                    </option>
                                )
                            })}
                    </select>

                    <select 
                    className={styles.input} 
                    value={productSelected} 
                    onChange={handleChangeProduct} 
                    disabled={categorySelected == -1}
                    style={{color: productSelected != -1 ? '#fff' : '#757575'}}
                    >
                    <option style={{color: '#fff'}} value={-1} >Selecione um produto</option>
                        {product?.map((item:ProductProps, index:number)=>{
                                return(
                                    <option key={item.id} value={index} style={{color: '#fff'}}>
                                        {item?.name} - R${Number(item?.price).toFixed(2).replace('.', ',')}
                                    </option>
                                )
                            })}
                    </select>


                <div className={styles.qtdContainer}>
                    <p className={styles.qtdText}>Quantidade</p>
                    <input
                    className={styles.input}
                    style={{ width: '60%', textAlign: 'center', border: 'none'}}
                    placeholder='1'
                    type='number'
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                    />
                </div>

                <div className={styles.actions}>
                    <button 
                    className={styles.buttonAdd} 
                    onClick={handleAdd} 
                    disabled={productSelected == -1 || categorySelected == -1 || loadingAction}
                    style={{opacity: productSelected == -1 ? 0.3 : 1, cursor: loadingAction ? 'wait' : 'pointer'}} 
                    >
                        <p className={styles.buttonText}>+</p>
                    </button>
                    <button
                    className={styles.button}
                    style={{opacity: items.length === 0 ? 0.3 : 1, cursor: loadingAction ? 'wait' : 'pointer'}}
                    disabled={items.length === 0 || loadingAction}
                    onClick={handleModalOrder}
                    >
                        <p className={styles.buttonText}>Avançar</p>
                    </button>
                </div>

                <div style={{ marginTop: 24}} className={styles.divItems}>
                    {items.map((item)=>{
                        return(
                            <ListItem key={item.id} data={item} deleteItem={handleDeleteItem} subValue={subProduct} buttonDesability={loadingAction} />
                        )
                    })}
                </div>
                <hr />
                <h2 className={styles.total} >Total do pedido: R${totalOrder.toFixed(2).replace('.', ',')}</h2>
            </main>
        {modalVisible && 
          <ModalFinish
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
          info={{order_id: order_id, table: table}}
          finishOrder={handleFinishOrder}
          />
        }
        </>

    )
}

