import '../styles/index.css'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
