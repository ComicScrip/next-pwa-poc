import OfflineBanner from './OfflineBanner';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} - ` : ''}My App</title>
      </Head>
      <OfflineBanner />
      <Header />
      <main>
        <motion.div
          initial={{
            opacity: 0,
            transform: 'scale(0.99)',
            filter: 'blur(5px)',
          }}
          animate={{ opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' }}
          exit={{ opacity: 0, transform: 'scale(0.99)', filter: 'blur(10px)' }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
