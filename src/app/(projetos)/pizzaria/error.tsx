'use client'
import { useRouter } from "next/navigation"
import { signOut } from "@/contexts/pizzaria/AuthContext"

const Error = ({error, reset}: {error: Error, reset: () => void})=>{
    signOut()
    useRouter().push('/pizzaria/login')
}

export default Error