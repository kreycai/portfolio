import styles from './styles.module.scss'
import Link from 'next/link'
import { ImNewTab } from 'react-icons/im'
import Image from 'next/image'
import imgDashboard from '../../../imgs/filmflix/dashboardfilmflix.png'
import imgFavorite from '../../../imgs/filmflix/favoritosfilmflix.png'

export const metadata = {
  title: 'Informações - Film Flix'
}

export default function PortPizzaria(){
  return (
    <>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Projeto Film Flix</h1>
          <p>
            Esse Projeto mostra os filmes em cartaz nos cinemas e te da algumas informações sobre ele, alem da opção de salvar os filmes para rever depois.
          </p>
          <p>
            Site simples, apenas para fazer uso de uma API externa ja existente, contém duas paginas.
          </p>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Link href={'/filmflix'} target='_blank' className={styles.contatoButton}>
            <ImNewTab size={30} /> 
            <span>Abrir Projeto</span> 
          </Link>
        </div>
        <div className={styles.instructions}>
            <div className={styles.card}>
              <h3>Dashboard</h3>
              <p>Veja os filmes em cartaz.</p>
            </div>
            <div className={styles.card}>
              <h3>Favoritos</h3>
              <p>Adicione os filmes em favoritos</p>
            </div>
          </div>
        <div className={styles.technique}>
          <h2>
            Explicação tecnica
          </h2>
          <div className={styles.eachPage}>
            <div className={styles.divImg}>
              <Image  className={styles.img} src={imgDashboard} alt="imgFail"/>
            </div>
            <div className={styles.divText}>
              <span>1 - Dashboard:</span>
              <p>
                Uma lista de filmes que busca na api da The Movie DB os filmes em cartaz no cinema, você pode acessar esses filmes e ver algumas informações sobre eles. Pode tambem favoritar filmes, o que salva eles no localstorage.
              </p>
              <hr />
            </div>
          </div>

          <div className={styles.eachPage}>
            <div className={styles.divImg}>
              <Image className={styles.img} src={imgFavorite} alt="imgFail"/>
            </div>
            <div className={styles.divText}>
              <span>2 - Favoritos:</span>
              <p>
                Aqui você pode ver seus filmes adicionados em favoritos, que são trazidos do localstorage, pode rever os detalhes deles e exclui-los da lista, o que os apaga no localstorage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}