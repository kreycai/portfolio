import { ReactNode } from "react"
import { guest } from "../../../../utils/pizzaria/userAuth";


interface PortLayoutProps{
  children: ReactNode
}

export const metadata = {
  title: 'Login - Pizzaria'
}

export default function Layout({children}: PortLayoutProps) {
  guest()
  return (
    <>
      {children}
    </>
  )
}