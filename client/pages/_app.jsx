import '../styles/globals.css';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';



function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
     
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
