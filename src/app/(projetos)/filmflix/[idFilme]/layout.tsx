import { ReactNode } from "react"
interface PortLayoutProps{
  children: ReactNode
}

export const metadata = {
  title: 'Novo pedido - Pizzaria'
}

export default async function Layout({children}: PortLayoutProps) {
  return (
    <>
      {children} 
    </>
  )
}