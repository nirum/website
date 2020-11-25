import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <div className="flex-grow">
                <div className="flex justify-around">
                    <div id="body" className="mt-12 xl:mt-20 responsive-width">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}