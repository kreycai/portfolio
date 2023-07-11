"use client";
import { useContext, FormEvent, useState } from "react";
import styles from './styles.module.scss'

import Image from "next/image";

// import logoImg from "../../../../../public/logo.svg";
import logoImg from "@/imgs/pizzaria/pizzariaGrandeSemFundo.png";

import { Input } from "../../../../components/pizzaria/ui/Input";
import { Button } from "../../../../components/pizzaria/ui/Button";

import { AuthContext } from "../../../../contexts/pizzaria/AuthContext";
import { toast } from "react-toastify";

import Link from "next/link";

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loadingAction, setLoadingAction] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    
    if(email === '' || password === ''){
      toast.warning("Preencha todos os campos")  
      return;
    }

    setLoadingAction(true);

    let data = {
      email: email,
      password : password
    }
    
    let response:any = await signIn(data);
    
    if(!response){
      setEmail('')
      setPassword('')
      setLoadingAction(false);
    }
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} width={350} alt="Logo Sujeito Pizzaria" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="Digite seu email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <Button type="submit" loading={loadingAction}>
              Acessar
            </Button>
          </form>
          <Link href="/pizzaria/signup">
            <p className={styles.text}>Não Possui uma conta ? Cadastre-se</p>
          </Link>
        </div>
      </div>
    </>
  );
}