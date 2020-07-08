import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import useDarkMode from "use-dark-mode"

export default ({ children }) => {
  const darkMode = useDarkMode(false);
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Niru Maheswaranathan</title>
        <link rel="canonical" href="https://niru.dev/" />
        <meta name="description" content="Personal website of Niru Maheswaranathan" />
        <meta name="keywords" content="research, machine learning, neuroscience, developer" />
        <meta name="twitter:widgets:theme" content={darkMode.value ? "dark" : "light"} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <Header />
      <div className="flex-grow">
        <div className="flex justify-around">
          <div id="body" className="mt-12 lg:mt-20 responsive-width">
              {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
