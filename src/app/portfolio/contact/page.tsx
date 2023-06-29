import styles from './styles.module.scss'
import Image from "next/image"
import Link from "next/link"
import imgTeste from '@/imgs/imgTeste.jpg'
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import imgPizza from '@/imgs/pizzariaGrandeSemFundo.png'
//FaWhatsapp

export const metadata = {
  title: 'Contato - Portfólio'
}
// https://wa.me/<number>
export default function Contact(){
  return (
    <>
      <div className={styles.container}>
        <h1>Contato</h1>
        <div className={styles.subContainer}>
          <p>Gostaria de negociar um projeto, tem alguma oportunidade ou quer apenas bater um papo ? </p>
          <Link href={'https://wa.me/5511948511040'} target='_blank' className={styles.contatoButton}>
            <FaWhatsapp size={50} /> <span>Mande uma mensagem</span> 
          </Link>
          <article>Fique a vontade para deixar algum feedback ou critica*</article>
        </div>
      </div>
    </>
  )
}