import Link from "next/link"
import ActiveLink from "../components/active-link"

export default function Layout({ children }) {
    return (
        <div className="flex flex-row justify-around flex-grow w-3/4 mx-auto border-2 border-blue-600">
            <div className="flex flex-col justify-between w-full h-screen">
                <header>
                    <div className="w-full py-1 bg-gradient-to-r from-blue-600 via-purple-700 to-purple-500 "></div>
                    <ul className="mt-2 border-2 border-blue-600">
                        <li><ActiveLink href="/" activeClassName="text-red-400"><a>Home</a></ActiveLink></li>
                        <li><ActiveLink href="/blog" activeClassName="text-red-400"><a>Blog</a></ActiveLink></li>
                        <li><ActiveLink href="/research" activeClassName="text-red-400"><a>Research</a></ActiveLink></li>
                        <li><ActiveLink href="/code" activeClassName="text-red-400"><a>Code</a></ActiveLink></li>
                    </ul>
                </header>
                <main className="mt-12 mb-auto xl:mt-20 responsive-width">
                    {children}
                </main>
                <footer className="border-2 border-red-500">
                    <div className="flex flex-row justify-around flex-grow w-3/4 mx-auto border-2 border-blue-500">
                        <div>
                            <div>Sitemap</div>
                            <ul>
                                <li>Home</li>
                                <li>Blog</li>
                                <li>Research</li>
                                <li>Code</li>
                            </ul>
                        </div>
                        <div>
                            <div>Elsewhere</div>
                            <ul>
                                <li>Twitter</li>
                                <li>Google Scholar</li>
                                <li>GitHub</li>
                                <li>Pinboard</li>
                            </ul>
                        </div>
                        <div>
                            <div>&copy; 2015-2020</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}