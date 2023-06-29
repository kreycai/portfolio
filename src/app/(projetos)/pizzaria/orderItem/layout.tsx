import { ReactNode } from "react"
import { auth } from "../../../../utils/pizzaria/userAuth";

interface PortLayoutProps{
  children: ReactNode
}

export const metadata = {
  title: 'Novo pedido - Pizzaria'
}

export default async function Layout({children}: PortLayoutProps) {
    auth()
  return (
    <>
      {children} 
    </>
  )
}