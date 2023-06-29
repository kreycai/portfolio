import { ReactNode } from "react"
import { guest } from "../../../../utils/pizzaria/userAuth";


interface PortLayoutProps{
  children: ReactNode
}

export const metadata = {
  title: 'Faça seu cadastro agora!'
}


export default function Layout({children}: PortLayoutProps) {
  guest()
  return (
    <>
      {children}
    </>
  )
}