import { Poppins } from 'next/font/google'
import "./globals.css";
import { Header, Footer } from '@/components';
import Head from 'next/head';

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Dra. Julia Schulsman",
  author: "Join Digital Solutions",
  description: "Developed By Join Digital Solutions",
  keywords: "Médico, Dra. Julia Schulsman, Join Digital Solutions, Juliano Costa Silva, Medicina, Radiologia, Consulta, Agendamento",
  charSet: "UTF-8",
  robots: "index, follow",
};
export const viewport = "width=device-width, initial-scale=1.0";
export const favicon = "/favicon.ico";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta charSet='utf-8' />

        {/* Open Graph para redes sociais */}
        <meta property='og:title' content='Dra Julia Schulsman' />
        <meta property='og:description' content='Site oficial da Dra. Julia Schulsman, Radiologista.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${process.env.NEXT_PUBLIC_DOMAIN}`} />
        <meta property='og:image' content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/og-image.png`} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        {/* Twitter Cards */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Dra Julia Schulsman' />
        <meta name='twitter:description' content='Site oficial da Dra. Julia Schulsman, Radiologista.' />
        <meta name='twitter:image' content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/join-blue-logo-1200x630.png`} />

        {/* Link canônico */}
        <link rel='canonical' href={process.env.NEXT_PUBLIC_DOMAIN}></link>
      </Head>
      <body className={`${poppins.className}`}>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
