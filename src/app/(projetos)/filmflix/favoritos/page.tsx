'use client'
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';
import Link from 'next/link';
import { toast } from 'react-toastify'
import { ToastContainer} from 'react-toastify';


export default function Favoritos(){
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || [])

  }, [])


  function excluirFilme(id:string){
    let filtroFilmes = filmes.filter( (item) => {
      return (item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes) )
    toast.success("Filme removido com sucesso")
  }

  return(
    <>
      <div className={styles.meusFilmes}>
      <h1>Meus filmes</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}
      <ul>
        {filmes.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link href={`/filmflix/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id) }>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
    <ToastContainer autoClose={3000} />
    </>
  )
}