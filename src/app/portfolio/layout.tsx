import { ReactNode } from "react"
import Link from "next/link"
import styles from './styles.module.scss'

interface PortLayoutProps{
  children: ReactNode
}

export default function PortLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div>
        <h1 className={styles.titulo}>Teste Layout</h1>
        <Link href='/'>op</Link>
        {children}
      </div>
    </>
  )
}
