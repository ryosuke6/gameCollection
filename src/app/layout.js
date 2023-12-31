import { Inter } from 'next/font/google';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import './globals.css';
import styles from './layout.module.css';  // Import the styles
import AdmaxAd from '../components/AdmaxAd';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextGameCollection',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

      </Head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4179804001346610"
        crossorigin="anonymous"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7LY4HN3ZPV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7LY4HN3ZPV');
        `}
      </Script>
      <body>
        <div className={styles.layout}>
          <header className={styles.header}>
            <nav>
              <ul className={styles.headerLinks}>
                <li><Link href="/">ゲーム</Link></li>
                <li><Link href="/about">このサイトについて</Link></li>
                <li><Link href="/contact">お問い合わせ</Link></li>
              </ul>
            </nav>
          </header>
          <div className={styles.mainContainer}>
            <AdmaxAd adId="dc63a12b8d4a5a0bf6bcc26c0448280c" />
            {children}
            <AdmaxAd adId="76caeea01591be9538a35f218fed49cc" />
          </div>
          <div className={styles.adContainer}>
            <AdmaxAd adId="e1738a5d583be1d3a0b3c5c6e38cffec" />
          </div>
          <footer className={styles.footer}>
            <a href="https://twitter.com/R_engineer69" target="_blank" rel="noopener noreferrer">
              <h2>© 2023 RYOSUKE@エンジニア</h2>
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
