import { ReactNode } from "react"
import { auth } from "../../../../utils/pizzaria/userAuth";
import { setupApiServer } from "@/services/pizzaria/apiServer";
import { GetServerSideProps } from "next";

export const metadata = {
  title: 'Novo produto - Pizzaria'
}

export default async function Layout(props) {
    auth()
    const apiServer = setupApiServer()
    const response = await apiServer.get('/category')
    props.params.data = response.data
  return (
    <>
      {props.children} 
    </>
  )
}