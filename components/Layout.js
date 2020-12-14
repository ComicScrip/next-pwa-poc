import OfflineBanner from './OfflineBanner';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NextNprogress from 'nextjs-progressbar';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} - ` : ''}My App</title>
      </Head>
      <NextNprogress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height='3'
      />
      <OfflineBanner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
