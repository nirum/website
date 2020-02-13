import React from "react"
import { Link } from "gatsby"

import splash_image from "./splash.jpg"

export default () => (
    <div className="flex justify-around">
        <div className="h-64 -mt-32 lg:w-192 md:w-9/12 flex justify-between bg-white rounded-lg border-0 border-black shadow-xl">
            <div className="pl-12 pr-2 py-16 w-128 rounded-l-lg" style={{background: 'linear-gradient(90deg, #f6f6f6, #ffffff)'}}>
                <h1 className="text-2xl tracking-tight font-bold text-gray-900">Hello! I'm Niru.</h1>
                <p className="mt-2 leading-wide text-gray-700">I'm a researcher at Google Brain. I work on topics ranging from understanding deep learning to neuroscience to optimization.</p>
            </div>
            <div className="block w-1/2 relative">
                <img className="h-64 absolute left-0 rounded-r-lg object-cover object-left" src={splash_image} alt="Splash" />
                <svg className="absolute h-64 -ml-2" viewBox="0 0 128 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><g transform="scale(.15463 1)"><path fill="none" d="M0 0h828v512H0z"/><clipPath id="a"><path d="M0 0h828v512H0z"/></clipPath><g clipPath="url(#a)"><path d="M71.1275546 532.4770897c236.854541-68.8023769 611.7938396-135.613712 544.7921588-220.6143521C535.5829986 209.943196-189.1467787 78.1815553 396.3331878-17.0949896m0 0C-94.710696-102.422517-893.0911194-117.9286209-1556.9042062-130.0024066c-562.2234301-10.2263764-1574.810357-29.1994682-2112.070485 1.6492957-263.1387312 15.1098766-476.3360168 54.545627-650.2776936 89.0471104-592.915528 117.6249971-686.2681856 191.7826322-643.376424 347.4231528 16.6224128 60.4865585-21.8169168 172.894977 200.4336472 226.0117095 204.3666288 48.8424317 650.5003152 53.8906138 966.2519512 60.8097313 919.427208 20.1444385 1821.4602483-1.4388 2737.741071-14.009108 271.4573584-3.7245356 543.1224968-7.1246603 814.4611236-11.0955997 152.0876564-2.2263016 395.2646508-2.335264 314.8685704-37.3567957" fill="#ffffff"/></g></g>
                </svg>
            </div>
        </div>
    </div>
)