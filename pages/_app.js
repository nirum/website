import "../styles/index.css";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Head from "next/head";

const GradientBar = () => (
  <div className="w-full py-1 bg-gradient-to-r from-cyan-600 via-indigo-700 to-blue-800 dark:from-blue-600 dark:via-cyan-500 dark:via-teal-600"></div>
);

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-coolgray-100 dark:bg-gray-900 min-h-screen">
      <Head>
        <title>Niru Maheswaranathan</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <GradientBar />
      <div className="flex flex-col min-h-screen w-5/6 max-w-3xl mx-auto -mt-2">
        <Header />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
