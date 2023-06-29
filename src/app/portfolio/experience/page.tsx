import styles from './styles.module.scss'

export const metadata = {
  title: 'Experiência - Portfólio'
}

export default function Experience(){
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Carreira & Expêriencia</h2>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>Desenvolvedor Web</h2>
            <span>Orange Custom Systems - 01/2022 (Atual)</span>
            <p>
              Empresa de 3 funcionarios anteriormente focada em app
              desktop para controle de caixa(COBOL). Consegui
              abrir novas portas com desenvolvimento web e mobile(Next.js, React Native e
              Express.js), onde sozinho desenvolvo o back-end e o front-end.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Office Boy</h2>
            <span>Shock Metais Não Ferrosos - 03/2021 a 11/2021</span>
            <p>Realizava depósitos e saques em bancos, idas em cartório, etc. No tempo vago ajudava outras areas da empresa.</p>          
          </div>
          <div className={styles.card}>
            <h2>Mecanico de automoveis</h2>
            <span>Diversas empresas - 01/2017 a 02/2021</span>
            <p>Trabalhei com manutenção de carros em geral, realizando reparo em suspensões, motores, freios,
              filtros, cambios, balanceamento e alinhamento, troca de óleo, etc.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}