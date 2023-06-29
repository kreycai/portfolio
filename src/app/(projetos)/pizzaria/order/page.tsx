'use client'
import React, { useState } from "react"
import styles from './styles.module.scss';
import { Header } from "@/components/pizzaria/Header";
import { useRouter } from "next/navigation";
import { setupApiClient } from "@/services/pizzaria/api";

export default function Order(){
    const route = useRouter();
    const api = setupApiClient();

    const [number, setNumber] = useState('')
    const [loading, setLoading] = useState(false)

    async function openOrder(){
        if(number === ''){
            return;
        }
        setLoading(true)
        const response = await api.post('/order',{
            table: Number(number)
        })
        route.push(`/pizzaria/orderItem?order_id=${response.data.id}&table=${number}`)
        setNumber('')
    }

    return(
        <>
            <Header/>
            <main className={styles.container}>
                <h2 className={styles.title} >Novo pedido</h2>
                <input
                className={styles.input}
                placeholder="Numero da mesa"
                type="number"
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                />
                <button className={styles.button} onClick={openOrder} disabled={loading} style={loading ? {cursor: 'wait'} : { cursor: 'pointer'}}>
                    <p className={styles.buttonText}>Abrir mesa</p>
                </button>
            </main>
        </>

    )
}
  