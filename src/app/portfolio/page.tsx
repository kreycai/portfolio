import styles from './page.module.scss'
import Image from "next/image"
import Link from "next/link"
import imgTeste from '@/imgs/imgTeste.jpg'
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import imgPizza from '@/imgs/pizzaria/pizzariaGrandeSemFundo.png'
//FaWhatsapp

export const metadata = {
  title: 'Portfólio'
}

export default function Portfolio(){
  return (
  <>
    <div className={styles.container}>
      <h1>Bem-Vindo ao meu Portfólio</h1>
      <div className={styles.perfil}>
        <div className={styles.divImgPerfil}>
          <Image src={imgTeste} alt='Imagem perfil' className={styles.imgPerfil} />
        </div>
        <div className={styles.parentintro}>
          <div className={styles.intro}>
            <h3 className={styles.introText}> - Olá, meu nome é Guilherme Reale</h3>
            <div style={{display: 'flex'}}>
              <p>Desenvolvedor FullStack Node.js;</p>
            </div>
            <p>Fique a vontade para navegar pelos meus projetos.</p>
          </div>
          <div className={styles.divIcons}>
            <div><span><TbBrandNextjs/></span><p>Next.js</p></div>
            <div><span><FaReact/></span><p>React.js</p></div>
            <div><span><AiOutlineHtml5/></span><p>HTML</p></div>
            <div><span><FaSass/></span><p>SASS</p></div>
            <div><span><TbBrandTypescript/></span><p>Typescript</p></div>
            <div><span><SiExpress/></span><p>Express.js</p></div>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <Link href={'/pizzaria/login'} target="_blank" className={styles.card} style={{backgroundColor: '#1D1D2E'}}>
          <Image src={imgPizza} width={200} alt='imagemPizzaria'/>
        </Link>
        <Link href={'/filmflix'} target="_blank" className={styles.card}>
          <h3>Film Flix</h3>
        </Link>
        <div className={styles.card}>
          <h2 style={{color:'black'}}>Em breve...</h2>
        </div>
      </div>
      <footer className={styles.footer}>
        <FaCopyright size={20} style={{marginRight:'0.5rem'}}/>
          Projeto desenvolvido com Next.js 13 
        <TbBrandNextjs size={25} style={{marginLeft:'0.5rem'}}/>
      </footer>
    </div>
  </>
  )
}