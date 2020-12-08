import OfflineBanner from './OfflineBanner';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Container({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ` : ''}My App</title>
      </Head>
      <OfflineBanner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
