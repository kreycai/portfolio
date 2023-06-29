import { ReactNode } from "react"
import { Header } from "@/components/filmes/Header"
import '../../../../styles/filmflix.scss'
import api from "@/services/filmes/api"

interface PortLayoutProps{
  children: ReactNode,
  params: any;
}

export const metadata = {
  title: 'Filmes - Film Flix'
}

// URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR
export default async function Layout(props: PortLayoutProps) {
  async function apiSetup(){
    const response = await api.get("movie/now_playing", {
      params:{
       api_key: "28fc232cc001c31e8a031f419d0a14ca",
       language: "pt-BR",
       page: 1,
      }
    })
    props.params.data = response.data.results
  }
  await apiSetup()
  return (
    <>
      <Header/>
      {props.children}
    </>
  )
}