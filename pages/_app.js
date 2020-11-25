import '../styles/index.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div>
          <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp
