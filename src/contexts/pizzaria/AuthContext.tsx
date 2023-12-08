'use client'
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/pizzaria/apiClient";
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Socket } from 'socket.io-client';
import io from 'socket.io-client';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>
    signOut: () => void
    signUp: (credentials: SignUpProps) => Promise<void> 
    socket: Socket
    isConnected: boolean
}

type UserProps = {
    id:string;
    name: string;
    email:string;
}

type SignInProps = {
    email:string;
    password: string;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    try {
        destroyCookie(null, '@nextauth.token', {
            path: '/',
          })
    } catch {
        console.log('Erro ao deslogar');
    }
}

export function AuthProvider({children}: AuthProviderProps){
    const [isConnected, setIsConnected] = useState(false);
    const [ socket, setSocket ] = useState(null)
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;
    const router = useRouter()
    useEffect(()=>{
        //tentar pegar algo no cookie
        const { '@nextauth.token': token} = parseCookies();
        if(token){
            api.get('/me').then(response=>{
                const {id, name, email} = response.data
                setUser({id, name, email})
                const socket = io('https://api-portfolio-v3zq.onrender.com/');
                setSocket(socket)
                if(socket){
                    setIsConnected(true)
                }
            })
            .catch(()=>{
                signOut()
            })
        }
    }, [])



    async function signIn({email, password}: SignInProps){
        try {
            const response = await api.post('/session',{
                email,
                password
            })

            const {id, name, token} = response.data

            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, // expirar em 1 mes
                path: "/" //path = quais caminhos tem acesso ao cookie, '/' para todos caminhos ter acesso a ESTE cookie.
            })

            setUser({id, name, email})

            //passar para proximas requisições o token
            api.defaults.headers['Authorization'] = `Bearer ${token}`
            const socket = io('https://api-portfolio-v3zq.onrender.com');
            setSocket(socket)
            if(socket){
                setIsConnected(true)
            }
            toast.success("Logado com sucesso!")

            //redirecionar o user para /dashboard
            console.log('fez login');
            
            router.push('/pizzaria/dashboard')
            return name;

        } catch (err) {
            toast.error("Erro ao acessar")
            console.log("Erro ao acessar", err);
        }
    }

    async function signUp({name, email, password}: SignUpProps) {
        try {
            const response = await api.post('/users', {
                name, 
                email, 
                password
            })

            toast.success("Conta criada com sucesso!");
            
            router.push('/pizzaria/login')
        } catch (err) {
            toast.error("Erro ao cadastrar")
            console.log("Erro ao cadastrar", err);
            
        }
 
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut, signUp, socket, isConnected}}>
            {children}
            <ToastContainer autoClose={3000} />
        </AuthContext.Provider>
    )
}