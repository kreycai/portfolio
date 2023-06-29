import { useContext } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../../contexts/pizzaria/AuthContext'
import { useRouter } from 'next/navigation'
import logoImg from "@/imgs/pizzaria/pizarriaPequenoSemFundo.png";

export function Header(){
    const { signOut } = useContext(AuthContext)
    const router = useRouter()

    function HandleSignOut(){
        signOut()
        router.push('/pizzaria/login')
    }
    return(
        <header className={styles.headerContainer} >
            <div className={styles.headerContent} >
                <Link href="/pizzaria/dashboard"
                className={styles.teste}
                style={{cursor: 'pointer'}}
                >
                    <Image src={logoImg} width={200} alt="imgFail"/>
                </Link>
                <nav className={styles.menuNav}>
                    <Link 
                    href="/pizzaria/order" 
                    legacyBehavior 
                    >
                        <a style={{cursor: 'pointer'}}>Criar novo pedido</a>
                    </Link>
                    <Link
                    href="/pizzaria/category" 
                    legacyBehavior 
                    >
                        <a style={{cursor: 'pointer'}}>Categoria</a>
                    </Link>
                    <Link
                    href="/pizzaria/product" 
                    legacyBehavior 
                    >
                        <a>Cardapio</a>
                    </Link>
                    <button onClick={HandleSignOut}>
                        <FiLogOut color='#fff' size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    )
} 