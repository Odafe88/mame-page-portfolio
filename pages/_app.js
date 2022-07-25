import '../styles/globals.css';
import { Layout } from "../components"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Progress } from "../components/progress";
import { useProgressStore } from "../store"

import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {

  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }

    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);


    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }

  }, [router])

  return (
    <Layout>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}>

        <Progress isAnimating={isAnimating} />
        <Component {...pageProps} />

      </motion.div>
    </Layout>
  )
}

export default MyApp
