import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation';

//funcao para paginas que só podem ser acessadas por visitantes
function guest(){
    const userCookies = cookies().get('@nextauth.token')
    if(userCookies){
        redirect('/pizzaria/dashboard');
    }
}

function auth(){
    const userCookies = cookies().get('@nextauth.token')
    if(!userCookies){
        redirect('/pizzaria/login');
    } 
}



export { guest, auth }