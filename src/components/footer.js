import React from "react"
import { Twitter, GitHub, Pinboard, Scholar } from "./icons"
import { Link } from "gatsby"
import Toggle from "./theme-toggle"

export default () => {

    // CSS
    const heading = "font-sans font-semibold text-foreground uppercase tracking-wide pb-2"
    const pill = "-ml-2 px-2 py-1 pillbox"
    const nolink = "border-0 hover:text-blue-100"

    return (
    <footer className="inset-x-0 bottom-0 flex justify-around py-4 pb-8 border-t border-background min-h-32">
        <div className="grid gap-8 mt-8 mb-8 ml-16 text-foreground-ternary md:gap-4 responsive-width sm:ml-0 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col justify-start">
                <div className={heading}>Sitemap</div>
                <ul>
                    <li className="mt-2"><Link className={pill} to="/">Home</Link></li>
                    <li className="mt-2"><Link className={pill} to="/research">Research</Link></li>
                    <li className="mt-2"><Link className={pill} to="/code">Code</Link></li>
                    {/* <li className="mt-2"><Link className={pill} to="/blog">Blog</Link></li> */}
                </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
                <div className={heading}>Elsewhere</div>
                <div className="flex flex-col items-start justify-start -ml-8">
                    <div className="mt-1">
                        <div className={pill}>
                            <a className={nolink} href="https://twitter.com/niru_m/">
                                <div className="flex flex-row items-center">
                                    <Twitter size="6" />
                                    <span className="px-2">@&#8202;niru_m</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mt-1">
                        <div className={pill}>
                            <a className={nolink} href="https://scholar.google.com/citations?user=bEOT7ScAAAAJ">
                                <div className="flex flex-row items-center">
                                    <Scholar size="6" />
                                    <span className="px-2">Google Scholar</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mt-1">
                        <div className={pill}>
                            <a className={nolink} href="https://www.github.com/nirum/">
                                <div className="flex flex-row items-center">
                                    <GitHub size="6" />
                                    <span className="px-2">github.com/nirum</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mt-1">
                        <div className={pill}>
                            <a className={nolink} href="https://pinboard.in/u:nirum/">
                                <div className="flex flex-row items-center">
                                    <Pinboard size="6" />
                                    <span className="px-2">pinboard.com/u:nirum</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start">
                <div className={heading}>&copy; 2015-2020</div>
                {/* <div className="font-sans leading-6 text-foreground-ternary">Made with <a className={link} href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind&thinsp;CSS</a> &amp; <a className={link} href="https://www.gatsbyjs.org" target="_blnak">Gatsby&thinsp;JS</a>.</div> */}
                <Toggle />
                <div className="w-8 mt-4 text-blue-500">
                    <svg className="inline h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
                        <path d="M15.999945.380471l13.5269913 7.8100456v15.619138L15.999945 31.6197 2.4729538 23.8096546V8.1905166L15.999945.3804711z" /><path d="M15.998635 3.690657c-2.929622 0-5.200221 4.33478-5.607376 10.356886.525514.5577075 1.1428745 1.1125745 1.827463 1.6532384.007575-.628723.044503-1.228093.095634-1.8161004.5510796-.3815895 1.243243-.8474505 1.790535-1.1655995 2.5186795-1.4534485 5.111215-2.411683 7.2975425-2.6957446.428933-.0558654.8323005-.081431 1.19874-.081431 1.228093 0 2.0973214.2954241 2.418311.8502911.288796.502789.1590745 1.301949-.324777 2.2374585.495214.459233.9648625.925094 1.38338 1.3947425 1.065231-1.7640225 1.2830115-3.36613.5804325-4.579073-.836088-1.4458735-2.7856974-2.0528185-5.496592-1.701529-2.4296735.3143615-5.2702895 1.3578145-8.003909 2.937197-.1742244.0994215-.3361396.2102055-.5065765.318149.680801-3.5034264 2.064181-5.814741 3.3471925-5.814741.59937 0 1.220518.510364 1.78296 1.39853.643873-.19979 1.279224-.3740145 1.8975315-.503736-.9800126-1.7564475-2.2526085-2.788538-3.6804915-2.788538zM9.577896 8.0585775c-2.0528185-.036928-3.5403544.577592-4.239146 1.7867475-.761285 1.317099-.444083 3.084909.865441 5.0269434.118359.1808526.2480805.3730676.4109425.58422 1.486589 1.9448752 3.809266 3.8831221 6.5428855 5.4625046.1742244.1003685.355077.1893744.533089.288796-1.0841685.3740144-2.1342496.643873-3.100059.769807-1.8454535.2395586-3.195693-.0482905-3.609476-.769807-.2925835-.502789-.162862-1.301949.3209896-2.2374585-.4952141-.459233-.9648626-.925094-1.3862207-1.390955-1.0623903 1.760235-1.2801709 3.3623425-.5775919 4.5752855.680801 1.1798025 2.101109 1.8009505 4.068709 1.8009505.4478705 0 .9288814-.0331405 1.427883-.0994215.288796-.036928.576645-.0852185.873016-.1439246l.207365-.044503c.014203 0 .0255655-.0037874.0397686-.007575.5037359-.1069965 1.0586029-.2556554 1.6949008-.4554454l.6249356-.192215c.9279345-.318149 1.878594-.7139415 2.8292535-1.176015.207365-.687429.392005-1.4903765.532142-2.4154705-.547292.3077334-1.0983715.58422-1.6456635.843663-.6325105-.296371-1.2688085-.6249355-1.886169-.9838-2.522467-1.457236-4.6491415-3.2212586-5.984231-4.971078-1.132459-1.4837484-1.5576045-2.796113-1.139087-3.5176295.2840615-.495214 1.0387185-.776435 2.078384-.828513.147712-.6694385.318149-1.3057365.517939-1.9051065zm10.910806 4.0573466c-.747082.1742244-1.538667.4298798-2.3482425.7508695.5359295.318149 1.0462935.6590229 1.5424545.99895.058706.6883759.103209 1.3909549.103209 2.1342494 0 5.584651-1.7564476 9.845575-3.447561 10.3597266-.1145715.036928-.2329305.0558654-.339927.0558654-.59937 0-1.220518-.5065765-1.78296-1.4013706-.642926.2026306-1.279224.3768551-1.8975315.5065766.9800126 1.7564475 2.2526085 2.788538 3.6804915 2.788538.1884275 0 .370227-.0189374.547292-.0558654 2.9627625-.5614951 5.13394-5.636729 5.13394-12.2534706 0-.2035775-.01515-.39958-.0189374-.6031575.8663878.7508695 1.627673 1.524464 2.219468 2.293324 1.1286714 1.4837484 1.5538169 2.796113 1.139087 3.5176295-.2916366.4990015-1.0349312.7877975-2.0821716.8398755-.147712.6618635-.3143615 1.301949-.5141515 1.8975315.052078 0 .1145715.0104155.1666495.0104155 1.9676 0 3.387908-.621148 4.068709-1.8009505.836088-1.4458735.38443-3.439986-1.2763835-5.6111635-1.176015-1.538667-2.8813315-3.069759-4.8934345-4.4275734zm-4.490067 1.9903249c-1.0462936 0-1.893744.8474504-1.893744 1.893744s.8474504 1.893744 1.893744 1.893744 1.893744-.8474504 1.893744-1.893744-.8474504-1.893744-1.893744-1.893744z" fill="#fff" fillRule="nonzero" stroke="#fff" strokeWidth="1.0036822"/>
                    </svg>
                </div>
            </div>
        </div>
    </footer>
    )
};
