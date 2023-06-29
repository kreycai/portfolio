'use client'
import { useEffect, useState} from 'react';
import api from '@/services/filmes/api';
import Link from 'next/link';
import styles from './styles.module.scss';
import { useParams } from 'next/navigation';


export default function Home(props){
  const [filmes, setFilmes] = useState(props.params.data as any || []);

  useEffect(()=>{

  },[filmes])

  return(
    <div className={styles.container}>
      <div className={styles.listaFilmes}>
        {filmes?.map((filme) => {
          return(
            <div style={{width:'100%'}} key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
              <Link href={`/filmflix/${filme.id}`}>Acessar</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}