import React, { ReactNode } from "react"
import Link from "next/link"
import styles from './layout.module.scss'
import { FaLaptopCode } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface PortLayoutProps{
  children: ReactNode
}

export default function PortLayout({children}: PortLayoutProps) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.menus}>
        <div className={styles.topMenu}>
          <div className={styles.button}>
            <Link href='https://www.linkedin.com/in/guilherme-reale-374615206/' target="_blank" className={styles.link1}>
              <FaLinkedin className={styles.icon} size={35}/>
            </Link>
            <Link href='https://www.linkedin.com/in/guilherme-reale-374615206/' target="_blank"  className={styles.link2}>
              <p>Linkedin</p>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href='https://github.com/kreycai/portfolio' target="_blank" className={styles.link1}>
              <FaGithub className={styles.icon} size={35}/>
            </Link>
            <Link href='https://github.com/kreycai/portfolio' target="_blank" className={styles.link2}>
              <p>Github</p>
            </Link>
          </div>
        </div>


        <div className={styles.menu}>
          <input type="checkbox" id='check' className={styles.check}/>
          <div className={styles.button}>
            <Link href='/portfolio' className={styles.link1}>
              <FaHome className={styles.icon} size={35}/>
            </Link>
            <Link href='/portfolio' className={styles.link2}>
              <p>Perfil</p>
            </Link>
          </div>

          <div className={styles.button}>
            <Link href='/portfolio/experience' className={styles.link1}>
              <FaHammer className={styles.icon} size={35}/>
            </Link>
            <Link href='/portfolio/experience' className={styles.link2}>
                <p>Experiência</p>
            </Link>
          </div>

          <div className={styles.button}>
            <label  htmlFor='check' className={styles.link1}>
              <FaLaptopCode className={styles.icon} size={35}/>
            </label>
            <label  htmlFor='check' className={styles.link2}>
              <p >Projetos</p>
              <FaAngleDown className={styles.iconProjects} style={{width:'10%'}} size={20}/>
            </label>
          </div>

          <div className={styles.projetos}>
            <Link style={{margin: '0px'}} href='/portfolio/pizzaria' className={styles.button}>
              <FaPizzaSlice className={styles.iconProjects} size={23} /><p>Pizzaria</p>
            </Link>
            <Link style={{margin: '0px'}} href='/portfolio/filmflix' className={styles.button}>
              <FaFilm className={styles.iconProjects} size={23} />
              <p>Filmes</p>
            </Link>

          </div>
          <div className={styles.button}>
            <Link href='/portfolio/contact' className={styles.link1}>
              <FaPhoneSquareAlt className={styles.icon} size={35}/>
            </Link>
            <Link href='/portfolio/contact' className={styles.link2}>
              <p>Contato</p>
            </Link>
          </div>
        </div>



        </div>
        <div className={styles.page}>
            {children}
        </div>
      </div>
    </div>
  )
}
