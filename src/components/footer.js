import React from "react"
import { Link } from "gatsby"

export default () => (
    <footer className="bg-warm-grey-900 min-h-32 mt-32 py-4 inset-x-0 bottom-0 flex justify-around">
        <div className="responsive-width">
            <div className="py-8 px-16 flex flex-col md:px-0 md:flex-row justify-between items-start font-sans font-light text-sm text-warm-grey-400">
                <div className="flex flex-col justify-start">
                    <p className="text-warm-grey-100 font-semibold font-sans">Sitemap</p>
                    <ul className="md:mt-2 leading-6">
                        {/* <li><Link className="footer-link">Return to Top</Link></li> */}
                        <li><Link className="footer-link" to="/">Home</Link></li>
                        <li><Link className="footer-link" to="/research">Research</Link></li>
                        {/* <li><Link className="footer-link" to="/blog">Blog</Link></li> */}
                    </ul>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="mt-8 md:mt-0 text-warm-grey-100 font-semibold font-sans">Elsewhere</p>
                    <ul className="md:mt-2 leading-6">
                        <li>
                            <a className="footer-link" href="https://twitter.com/niru_m/">
                                <svg className="fill-current h-3 inline -ml-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
                                @&#8202;niru_m
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href="https://scholar.google.com/citations?user=bEOT7ScAAAAJ">
                                <svg className="fill-current h-3 inline -ml-5 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431.256-1.32-.791a604.12 604.12 0 01-3.286-1.979l-2.005-1.21c-.024-.008-.032.883-.027 1.983"/></svg>
                                Google Scholar
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href="https://www.github.com/nirum/">
                                <svg className="fill-current h-3 inline -ml-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                github.com/nirum
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href="https://pinboard.in/u:nirum/">
                                <svg className="fill-current h-3 inline -ml-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.352 14.585l-4.509 4.614.72-4.062L3.428 7.57 0 7.753 7.58 0v2.953l7.214 6.646 4.513-1.105-4.689 4.982L24 24z"/></svg>
                                pinboard.com/u:nirum
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="mt-8 md:mt-0 text-warm-grey-100 font-semibold font-sans">&copy; 2015-2020</p>
                    <p className="md:mt-2 leading-6 text-warm-grey-400 font-sans">Made with <a className="footer-link" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind&thinsp;CSS</a> &amp; <a className="footer-link" href="https://www.gatsbyjs.org" target="_blnak">Gatsby&thinsp;JS</a>.</p>
                </div>
                <div className="mt-2 md:mt-0 w-8 text-brand-light">
                    <svg className="h-8 inline fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
                        <path d="M15.999945.380471l13.5269913 7.8100456v15.619138L15.999945 31.6197 2.4729538 23.8096546V8.1905166L15.999945.3804711z" /><path d="M15.998635 3.690657c-2.929622 0-5.200221 4.33478-5.607376 10.356886.525514.5577075 1.1428745 1.1125745 1.827463 1.6532384.007575-.628723.044503-1.228093.095634-1.8161004.5510796-.3815895 1.243243-.8474505 1.790535-1.1655995 2.5186795-1.4534485 5.111215-2.411683 7.2975425-2.6957446.428933-.0558654.8323005-.081431 1.19874-.081431 1.228093 0 2.0973214.2954241 2.418311.8502911.288796.502789.1590745 1.301949-.324777 2.2374585.495214.459233.9648625.925094 1.38338 1.3947425 1.065231-1.7640225 1.2830115-3.36613.5804325-4.579073-.836088-1.4458735-2.7856974-2.0528185-5.496592-1.701529-2.4296735.3143615-5.2702895 1.3578145-8.003909 2.937197-.1742244.0994215-.3361396.2102055-.5065765.318149.680801-3.5034264 2.064181-5.814741 3.3471925-5.814741.59937 0 1.220518.510364 1.78296 1.39853.643873-.19979 1.279224-.3740145 1.8975315-.503736-.9800126-1.7564475-2.2526085-2.788538-3.6804915-2.788538zM9.577896 8.0585775c-2.0528185-.036928-3.5403544.577592-4.239146 1.7867475-.761285 1.317099-.444083 3.084909.865441 5.0269434.118359.1808526.2480805.3730676.4109425.58422 1.486589 1.9448752 3.809266 3.8831221 6.5428855 5.4625046.1742244.1003685.355077.1893744.533089.288796-1.0841685.3740144-2.1342496.643873-3.100059.769807-1.8454535.2395586-3.195693-.0482905-3.609476-.769807-.2925835-.502789-.162862-1.301949.3209896-2.2374585-.4952141-.459233-.9648626-.925094-1.3862207-1.390955-1.0623903 1.760235-1.2801709 3.3623425-.5775919 4.5752855.680801 1.1798025 2.101109 1.8009505 4.068709 1.8009505.4478705 0 .9288814-.0331405 1.427883-.0994215.288796-.036928.576645-.0852185.873016-.1439246l.207365-.044503c.014203 0 .0255655-.0037874.0397686-.007575.5037359-.1069965 1.0586029-.2556554 1.6949008-.4554454l.6249356-.192215c.9279345-.318149 1.878594-.7139415 2.8292535-1.176015.207365-.687429.392005-1.4903765.532142-2.4154705-.547292.3077334-1.0983715.58422-1.6456635.843663-.6325105-.296371-1.2688085-.6249355-1.886169-.9838-2.522467-1.457236-4.6491415-3.2212586-5.984231-4.971078-1.132459-1.4837484-1.5576045-2.796113-1.139087-3.5176295.2840615-.495214 1.0387185-.776435 2.078384-.828513.147712-.6694385.318149-1.3057365.517939-1.9051065zm10.910806 4.0573466c-.747082.1742244-1.538667.4298798-2.3482425.7508695.5359295.318149 1.0462935.6590229 1.5424545.99895.058706.6883759.103209 1.3909549.103209 2.1342494 0 5.584651-1.7564476 9.845575-3.447561 10.3597266-.1145715.036928-.2329305.0558654-.339927.0558654-.59937 0-1.220518-.5065765-1.78296-1.4013706-.642926.2026306-1.279224.3768551-1.8975315.5065766.9800126 1.7564475 2.2526085 2.788538 3.6804915 2.788538.1884275 0 .370227-.0189374.547292-.0558654 2.9627625-.5614951 5.13394-5.636729 5.13394-12.2534706 0-.2035775-.01515-.39958-.0189374-.6031575.8663878.7508695 1.627673 1.524464 2.219468 2.293324 1.1286714 1.4837484 1.5538169 2.796113 1.139087 3.5176295-.2916366.4990015-1.0349312.7877975-2.0821716.8398755-.147712.6618635-.3143615 1.301949-.5141515 1.8975315.052078 0 .1145715.0104155.1666495.0104155 1.9676 0 3.387908-.621148 4.068709-1.8009505.836088-1.4458735.38443-3.439986-1.2763835-5.6111635-1.176015-1.538667-2.8813315-3.069759-4.8934345-4.4275734zm-4.490067 1.9903249c-1.0462936 0-1.893744.8474504-1.893744 1.893744s.8474504 1.893744 1.893744 1.893744 1.893744-.8474504 1.893744-1.893744-.8474504-1.893744-1.893744-1.893744z" fill="#fff" fillRule="nonzero" stroke="#fff" strokeWidth="1.0036822"/>
                    </svg>
                </div>
            </div>
        </div>
    </footer>
)