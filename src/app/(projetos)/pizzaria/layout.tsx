import '../../../../styles/pizzaria.scss'
import { ReactNode } from "react"
import { AuthProvider } from '../../../contexts/pizzaria/AuthContext'

interface PortLayoutProps{
  children: ReactNode
}

export default function Layout({children}: PortLayoutProps) {
  return (
      <AuthProvider>
        {children}
      </AuthProvider>
  )
}