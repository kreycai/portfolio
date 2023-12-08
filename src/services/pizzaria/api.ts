import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";
import { signOut } from "../../contexts/pizzaria/AuthContext";

export function setupApiClient(ctx = undefined){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        // baseURL: 'http://localhost:3333',
        baseURL: 'https://api-portfolio-v3zq.onrender.com',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response
    }, (error: AxiosError) => {
        if (error.response.status === 401){
            //qlqr erro 401 nao autorizado devemos deslogar usuario
            if(typeof window !== undefined){
                // chamar função para deslogar usuario
                signOut()
                window.location.replace('/pizzaria/login')
            }else{
                return Promise.reject(new AuthTokenError())
            }
        }
        return Promise.reject(error);
    })
    return api
}