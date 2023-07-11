'use client'
import { useState, FormEvent } from "react";
import { Header } from "@/components/pizzaria/Header";
import styles from './styles.module.scss'
import { toast } from 'react-toastify'
import { api } from "@/services/pizzaria/apiClient";

export default function Category() {
    const [name, setName] = useState('')
    const [loadingAction, setLoadingAction] = useState(false);

    async function handleRegister(event: FormEvent) {
        event.preventDefault();
        setLoadingAction(true)
        if(name === ''){
            setLoadingAction(false)
            return;
        }

        await api.post('/category',{
            name: name
        })

        toast.success("Categoria cadastrada com sucesso!")
        setName('')
        setLoadingAction(false)
    }

  return (
    <>
      <div>
        <Header />
        <main className={styles.container}>
            <h1>Cadastrar categorias</h1>
            <form className={styles.form} onSubmit={handleRegister}>
                <input 
                type="text"
                placeholder="Digite o nome da categoria"
                className={styles.input} 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" disabled={loadingAction} style={loadingAction ? {cursor: 'wait'} : {cursor: 'pointer'}}>
                    Cadastrar
                </button>
            </form>
        </main>
      </div>

    </>
  );
}