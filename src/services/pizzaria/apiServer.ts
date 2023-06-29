import axios, { AxiosError } from "axios";
import { AuthTokenError } from "./errors/AuthTokenError";
import { cookies } from "next/headers";


export function setupApiServer(){

    let userCookies = cookies().get('@nextauth.token');
    
    const api = axios.create({
        baseURL: 'https://api-portfolio-v3zq.onrender.com',
        headers: {
            Authorization: `Bearer ${userCookies.value}`
        }
    })

    api.interceptors.response.use(response => {
        return response
    }, (error: AxiosError) => {
        if (error.response?.status === 401){
            //qlqr erro 401 nao autorizado devemos deslogar usuario
            if(typeof window !== undefined){
                return Promise.reject(new AuthTokenError())
            }
        }
        return Promise.reject(error);
    })
    return api
}