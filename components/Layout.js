import OfflineBanner from './OfflineBanner';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ` : ''}My App</title>
      </Head>
      <OfflineBanner />
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
