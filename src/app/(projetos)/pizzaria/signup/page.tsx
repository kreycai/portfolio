'use client'
import { useState, FormEvent, useContext } from "react";

import Image from "next/image";
import styles from "../login/styles.module.scss";
// import logoImg from "../../../../../public/logo.svg";
import logoImg from '../../../../imgs/pizzaria/pizzariaGrandeSemFundo.png'
import { Input } from "@/components/pizzaria/ui/Input";
import { Button } from "@/components/pizzaria/ui/Button";
import { AuthContext } from "@/contexts/pizzaria/AuthContext";
import { toast } from 'react-toastify'

import Link from "next/link";

export default function Signup() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent){
    event.preventDefault();
    if(name === '' || email === '' || password == ''){
      toast.warning("Preencha todos os campos")  
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password
    }
    await signUp(data)
    setLoading(false)
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image width={350} src={logoImg} alt="Logo Sujeito Pizzaria" />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>
            <Input placeholder="Digite seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input placeholder="Digite seu email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button type="submit" loading={loading}>
              Cadastrar
            </Button>
          </form>
          <Link href="/pizzaria/login">
            <p className={styles.text}>Já Possui uma conta? Faça login</p>
          </Link>
        </div>
      </div>
    </>
  );
}