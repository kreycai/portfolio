'use client'
import Link from "next/link"
import styles from './styles.module.scss'

const error = ({error, reset}: {error: Error, reset: () => void})=>{
    return(
        <div className={styles.notFound}>
          <h1>404</h1>
          <h2>Pagina não encontrada!</h2>
          <Link href="/filmflix">Veja todos filmes!</Link>
        </div>
      )
}

export default error