import '../../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Bem-vindo'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
