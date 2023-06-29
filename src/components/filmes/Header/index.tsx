import React from 'react';
import styles from './styles.module.scss'
import Link from 'next/link';

export function Header(){
  return(
    <header className={styles.header}>
      <Link className={styles.logo} href="/filmflix" prefetch={false}>Film Flix</Link>
      <Link className={styles.favoritos} href="/filmflix/favoritos">Meus filmes</Link>
    </header>
  )
}

