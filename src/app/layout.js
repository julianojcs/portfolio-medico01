import { Poppins } from 'next/font/google'
import "./globals.css";
import Header from '@/components/Header';

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Dra. Luciana Costa",
  author: "Join Digital Solutions",
  description: "Developed By Join Digital Solutions",
  keywords: "Médico, Dra. Luciana Costa, Join Digital Solutions, Juliano Costa Silva, Medicina, Radiologia, Consulta, Agendamento",
  charSet: "UTF-8",
  robots: "index, follow",
};
export const viewport = "width=device-width, initial-scale=1.0";
export const favicon = "/favicon.ico";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet='utf-8' />

        {/* Open Graph para redes sociais */}
        <meta property='og:title' content='Dra Luciana Costa Silva' />
        <meta property='og:description' content='Site oficial da Dra. Luciana Costa Silva, Radiologista.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${process.env.NEXT_PUBLIC_DOMAIN}`} />
        <meta property='og:image' content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/join-blue-logo-1200x630.png`} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        {/* Twitter Cards */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Dra Luciana Costa Silva' />
        <meta name='twitter:description' content='Site oficial da Dra. Luciana Costa Silva, Radiologista.' />
        <meta name='twitter:image' content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/join-blue-logo-1200x630.png`} />

        {/* Link canônico */}
        <link rel='canonical' href={process.env.NEXT_PUBLIC_DOMAIN}></link>
      </head>
      <body className={poppins.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
