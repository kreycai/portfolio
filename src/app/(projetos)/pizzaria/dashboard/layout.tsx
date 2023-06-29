import { ReactNode } from "react"
import { auth } from "../../../../utils/pizzaria/userAuth";
import { setupApiServer } from "@/services/pizzaria/apiServer";

interface PortLayoutProps{
  children: ReactNode,
  params: any;
}

export const metadata = {
  title: 'Pedidos - Pizzaria'
}

export default async function Layout(props: PortLayoutProps) {
    auth()
    const apiServer = setupApiServer()
    const response = await apiServer.get('/orders')
    props.params.data = response.data
  return (
    <>
      {props.children} 
    </>
  )
}