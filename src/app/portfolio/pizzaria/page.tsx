import styles from './styles.module.scss'
import Link from 'next/link'
import { ImNewTab } from 'react-icons/im'
import Image from 'next/image'
import imgLogin from '../../../imgs/pizzaria/login.png'
import imgCategory from '../../../imgs/pizzaria/category.png'
import imgDashboard from '../../../imgs/pizzaria/dashboard.png'
import ImgNewProduct from '../../../imgs/pizzaria/newProduct.png'
import ImgNewOrder from '../../../imgs/pizzaria/newOrder.png'
import imgRegister from '../../../imgs/pizzaria/register.png'

import imgLoginMobile from '../../../imgs/pizzaria/login-mobile.png'
import imgOpenTableMobile from '../../../imgs/pizzaria/open-table.png'
import imgAddItemsMobile from '../../../imgs/pizzaria/add-items.png'
import imgFinishOrderMobile from '../../../imgs/pizzaria/finish-order.png'

//https://api-portfolio-v3zq.onrender.com/files/Pizzaria.apk

export const metadata = {
  title: 'Informações - Pizzaria'
}

export default function PortPizzaria(){
  return (
    <>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Projeto Pizzaria</h1>
          <p>
            Esse Projeto web e mobile tem como finalidade dar suporte ao caixa, cozinha e tambem aos garçons de uma pizzaria em tempo real(socket.io)
            e tem o front-end e o back-end feitos por mim.
          </p>
          <p>
            Front-end: 
            Criado com Next 13(web) e React Native(mobile), o front-end utiliza de algumas outras bibliotecas como react toastify para exibir
            alertas personalizados após realizar algumas ações, nookies para trabalhar com os cookies, jwt para descriptografia
            e axios para chamadas ao back-end, além do ja citado socket.io para comunicação em tempo real com servidor.
          </p>
          <p>
            Back-end: O back-end em Node.js foi criado utilizando Express.js e Typescript, além de algumas bibliotecas como jwt 
            e bcrypt para criptografia. O banco de dados optei por postgreSQL e a ORM Prisma.
          </p>
          <p>Existe uma explicação simples sobre cada pagina nos cards abaixo, e uma explicação mais técnica após os cards.</p>
          <p style={{fontWeight:'bold'}}>No fim da pagina você confere o app mobile</p>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Link href={'/pizzaria/login'} target='_blank' className={styles.projectButton}>
            <ImNewTab size={30} /> 
            <span>Abrir Projeto</span> 
          </Link>
          <Link className={styles.linkMobile} href={'https://api-portfolio-v3zq.onrender.com/files/Pizzaria.apk'}> Donwload app mobile aqui ! </Link>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

        </div>
        <div className={styles.instructions}>
            <div className={styles.card}>
              <h3>Login</h3>
              <p>Entre com seu login ou crie uma conta no próprio site.</p>
            </div>
            <div className={styles.card}>
              <h3>Novo pedido</h3>
              <p>Crie um novo pedido, já existem categorias e produtos cadastrados.</p>
            </div>
            <div className={styles.card}>
              <h3>Caterogias / Produtos</h3>
              <p>Sinta-se a vontade para criar novos produtos ou categorias.</p>
            </div>
            <div className={styles.card}>
              <h3>Dashboard</h3>
              <p>
                Veja os pedidos aparecer em tela, leia a descrição e conclua-os.
              </p>
            </div>
          </div>
        <div className={styles.technique}>
          <h2>
            Explicação tecnica
          </h2>
          <div className={styles.eachPage}>
            <div className={styles.divImg}>
              <Image  className={styles.img} src={imgLogin} alt="imgFail"/>
            </div>
            <div className={styles.divText}>
              <span>1 - Login:</span>
              <p>
              Faz requisição ao back-end que checa as informações e deixa
              ou não efetuar o login e devolve um alerta personalizado com a informação que, se positiva, 
              devolve um token.
              Possui tambem um sistema server-side que, antes da pagina ser renderizada, verifica se existe um token e se ele é valido, se positivo 
              a pagina não é renderizada e o cliente é redirecionado para a pagina dashboard, mas, caso o cliente tenha forjado um token 
              o back-end devolve um erro e o cliente redireciona o usuario de volta para a tela de login.
              </p>
              <hr />
            </div>
          </div>

          <div className={styles.eachPage}>
            <div className={styles.divImg}>
              <Image className={styles.img} src={imgRegister} alt="imgFail"/>
            </div>
            <div className={styles.divText}>
              <span>2 - Cadastro:</span>
              <p>
                Tem basicamente o mesmo sistema server-side da pagina de login.
              </p>
              <hr />
            </div>
          </div>

          <div className={styles.eachPage}>
            <div className={styles.divImg}>
              <Image className={styles.img} src={imgDashboard} alt="imgFail"/>
            </div>
            <div className={styles.divText}>
              <span>3 - Dashboard:</span>
              <p>
                Essa é a tela principal do projeto, onde se encontra os pedidos, nela temos a atualização em tempo real,
                assim que um pedido é lançado na pagina 7(ou app mobile), ela tem os componentes atualizados(e nao a pagina em sí) e é adicionado o pedido em tela, nao necessitando refresh manual. 
                Destinada aos usuarios da cozinha, aqui vc pode concluir o pedido que foi levado a mesa, o que vai atualizar todos os outros computadores retirando o pedido da pagina em tempo real.
              </p>
              <hr />
            </div>
          </div>

          <div className={styles.eachPage}>
            <div className={styles.divImg}>
              <Image className={styles.img} src={imgCategory} alt="imgFail"/>
            </div>
            <div className={styles.divText}>
              <span> 4 - Criar categoria de produto:</span>
              <p>
                Uma pagina de cadastro comum.
              </p>
              <hr />
            </div>
          </div>

          <div className={styles.eachPage}>
            <div className={styles.divImg}>
              <Image className={styles.img} src={ImgNewProduct} alt="imgFail"/>
            </div>
            <div className={styles.divText}>
              <span> 5 - Criar produto:</span>
              <p>
                Checa no banco as categorias e as trazem na tela para seleciona-las e cadastrar os produtos em suas
                respectivas categorias, alem de ser possivel e obrigatório cadastrar uma imagem .png ou .jpg para o produto, que é
                salvo no banco de dados.
              </p>
              <hr />
            </div>

          </div>
          
          <div className={styles.eachPage}>
            <div className={styles.divImg}>
              <Image className={styles.img} src={ImgNewOrder} alt="imgFail"/>
            </div>
            <div className={styles.divText}>
              <span> 6 - Preencher e finalizar mesa:</span>
              <p>
                Aqui temos os seletores onde o garçom/atendente seleciona o produto e envia o pedido para a cozinha futuramente. 
                Essa pagina tem seletores para categoria e produto e botoes de adicionar produto, remover produto, finalizar mesa ou excluir mesa,
                cada seletor e botao se mantem desativado até que o passo a passo correto é feito pelo garçom, o que torna o app muito indicativo
              </p>
            </div>
          </div>

          <h2>
            Projeto Mobile
          </h2>

          <div className={styles.eachPageMobile}>
            <div className={styles.divImgMobile}>
              <Image className={styles.img} src={imgLoginMobile} alt="imgFail"/>
            </div>
            <div className={styles.divTextMobile}>
              <span> 1 - Login:</span>
              <p>
                Mesmo funcionamento da tela de login da web. Lembrando que aqui não temos opção de se cadastrar, para isso, se cadastre no aplicativo web ou entre com email e senha (email: Teste@teste.com, senha: 123)
              </p>
            </div>
          </div>

          <div className={styles.eachPageMobile}>
            <div className={styles.divImgMobile}>
              <Image className={styles.img} src={imgOpenTableMobile} alt="imgFail"/>
            </div>
            <div className={styles.divTextMobile}>
              <span> 2 - Novo Pedido </span>
              <p>
                Nessa tela você pode abrir o pedido, que ainda é um rascunho, que só sera enviado para cozinha quando confirmado. Dê aqui o numero da mesa a ser atendida.
              </p>
            </div>
          </div>

          <div className={styles.eachPageMobile}>
            <div className={styles.divImgMobile}>
              <Image className={styles.img} src={imgAddItemsMobile} alt="imgFail"/>
            </div>
            <div className={styles.divTextMobile}>
              <span> 3 - Preencher e finalizar mesa:</span>
              <p>
                Aqui temos os seletores onde o garçom/atendente anota o pedido e o envia para a cozinha futuramente. 
                Essa pagina tem seletores para categoria e produto e botoes de adicionar produto, remover produto, finalizar mesa ou excluir mesa,
                cada seletor e botao se mantem desativado até que o passo a passo correto é feito pelo garçom, o que torna o app muito indicativo
              </p>
            </div>
          </div>

          <div className={styles.eachPageMobile}>
            <div className={styles.divImgMobile}>
              <Image className={styles.img} src={imgFinishOrderMobile} alt="imgFail"/>
            </div>
            <div className={styles.divTextMobile}>
              <span> 4 - finalizar mesa:</span>
              <p>
                Finalizando o pedido ele aparecera em tempo real na pagina dasboard do app web. Teste e veja !
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}