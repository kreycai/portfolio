import React from 'react'
import styles from './styles.module.scss'
import { FiTrash2 } from 'react-icons/fi'
import { useState } from 'react'

interface ItemProps{
    data:{
        id: string;
        product_id: string;
        name:string;
        amount: string | number;
        price: string
    }
    deleteItem: (item_id: string) => void;
    subValue: (price: string) => void;
    buttonDesability: boolean;
}

export function ListItem({data, deleteItem, subValue, buttonDesability}: ItemProps){
    const [loadingAction, setLoadingAction] = useState(false);
    async function handleDeleteItem(){
        setLoadingAction(true)
        await deleteItem(data.id)
        subValue(data.price)
        setLoadingAction(false)
    }

    return(
        <div className={styles.container}>
            <p className={styles.item}>{data.amount} - {data.name} - R${Number(data.price) * Number(data.amount)}</p>

            <button onClick={handleDeleteItem} 
            disabled={buttonDesability || loadingAction} 
            style={loadingAction || buttonDesability ? {cursor:'wait'} : {cursor:'pointer'}}>
                <FiTrash2 color='#ff3f4b' size={25} />
            </button>
        </div>
    )
}

