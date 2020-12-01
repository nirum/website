import Link from "next/link"
import ActiveLink from "../components/active-link"

export default function Layout({ children }) {
    const active = "text-blue-600 border-b-2 border-blue-600 pb-2"
    const inactive = "text-gray-400"
    return (
        <div className="flex flex-row justify-around flex-grow w-full mx-auto">
            <div className="flex flex-col justify-between w-full h-screen">
                <header>
                    <div className="w-full py-1 bg-gradient-to-r from-blue-600 via-purple-700 to-purple-500 "></div>
                    <ul className="flex flex-row justify-around space-x-2 border-4 border-red-500 w-96">
                        <li><ActiveLink href="/" activeClassName={active}><a className={inactive}>Home</a></ActiveLink></li>
                        <li><ActiveLink href="/about" activeClassName={active}><a className={inactive}>About</a></ActiveLink></li>
                        <li><ActiveLink href="/blog" activeClassName={active}><a className={inactive}>Blog</a></ActiveLink></li>
                        <li><ActiveLink href="/research" activeClassName={active}><a className={inactive}>Research</a></ActiveLink></li>
                        <li><ActiveLink href="/code" activeClassName={active}><a className={inactive}>Code</a></ActiveLink></li>
                    </ul>
                </header>
                <main className="">
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