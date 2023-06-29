'use client';
import { useEffect, useState, useContext } from "react";
import styles from "./styles.module.scss"
import { Header } from '../../../../components/pizzaria/Header'
import { FiRefreshCcw } from 'react-icons/fi'
import { setupApiClient } from "../../../../services/pizzaria/api";
import { ModalOrder } from '../../../../components/pizzaria/ModalOrder'
import { AuthContext } from "../../../../contexts/pizzaria/AuthContext";



type OrderProps = {
  id: string;
  table: string | number;
  status: boolean;
  draft: boolean;
  name: string | null
  items: OrderItemProps[]
}
interface HomeProps{
  orders: OrderProps[];
}

export type OrderItemProps = {
  id:string;
  amount: number;
  order_id: string;
  product_id: string;
  product:{
    id:string;
    name:string;
    description:string;
    price:string;
    banner:string;
  }
  order:{
    id:string;
    table: string | number;
    name: string | null
  }
}

export default function Dashboard(props) {
  const {socket, isConnected} = useContext(AuthContext);
  const [orderList, setOrderList] = useState(props.params.data || []);
  const [modalItem, setModalItem] = useState<OrderItemProps[]>()
  const [modalVisible, setModalVisible] = useState(false)
  const apiClient = setupApiClient();
  
useEffect(()=>{
    //essa funçao cuida de atualizar o client que cria um pedido e que acaba de ser
    //redirecionado para /dashboard. Pois o socket.io e o SSR(que esta no layout) nao o fazem
    async function refreshAfterSocket(){
      const response = await apiClient.get('/orders')
      setOrderList(response.data)
    }
    refreshAfterSocket()
}, [])
  
  useEffect(()=>{
    socket?.on('refresh', () => {
      async function refresh(){
        const response = await apiClient.get('/orders')
        setOrderList(response.data)
      }
      refresh()
    });
  }, [isConnected])

  function handleCloseModal(){
    setModalVisible(false);
  }

  async function handleOpenModalView(id:string){
    const apiClient = setupApiClient();
    const response = await apiClient.get('/order/detail',{
      params:{
        order_id: id
      }
    })
    setModalItem(response.data)
    setModalVisible(true);
  }

  async function handleFinishItem(id: string){
    const apiClient = setupApiClient();
    await apiClient.put('/order/finish', {
      order_id: id,
    })

    const response = await apiClient.get('/orders')
    socket?.emit("message")
    setOrderList(response.data)
    setModalVisible(false)
  }

  async function handleRefreshOrders(){
    const apiClient = setupApiClient();
    const response = await apiClient.get('/orders')
    setOrderList(response.data)
  }
  
  return (
    <>
      <div>
        <Header/>
        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Ultimos pedidos</h1>
            <button onClick={handleRefreshOrders}>
              <FiRefreshCcw size={25} color="#3fffa3" />
            </button>
          </div>
          <article className={styles.listOrders}>

            {orderList.length === 0 && (
              <span className={styles.emptyList}>
                Nenhum pedido aberto foi encontrado...
              </span>
            )}

            {orderList.map(item => (
              <section key={item.id} className={styles.orderItem}>
                <button onClick={() => handleOpenModalView(item.id)}>
                  <div className={styles.tag}></div>
                  <span>Mesa {item.table}</span>
                </button>
              </section>
            ))}
          </article>
        </main>
        {modalVisible && 
          <ModalOrder
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
          order={modalItem}
          handleFinishOrder={handleFinishItem}
          />
        }
      </div>
    </>
  );
}