import React from "react"
import { Link } from "gatsby"

export default () => (
    <header class="bg-gray-100 border-blue-800 border-t-8 shadow-md sm:flex sm:justify-between sm:items-center sm:py-3 sm:px-10">
        <Link to='/'>
            <div class="py-3 px-10 sm:p-0 flex justify-between items-center">
                <div class="flex items-center text-blue-800">
                    <svg class="h-4 inline fill-current" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" >
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <span class="pl-2 text-xl">Niru Maheswaranathan</span>
                </div>
            </div>
        </Link>
        <div class="px-8 pb-4 sm:p-0 sm:block sm:flex" >
            <Link activeClassName="bg-gray-400 border-b-4 pb-0 border-blue-800" className="ml-2 block text-blue-800 font-semibold hover:bg-gray-400 rounded px-2 py-2 sm:mt-0" to="/">Home</Link>
            <Link activeClassName="bg-gray-400 border-b-4 pb-0 border-blue-800" className="ml-2 block text-blue-800 font-semibold hover:bg-gray-400 rounded px-2 py-2 sm:mt-0" to="/about">About</Link>
            <Link activeClassName="bg-gray-400 border-b-4 pb-0 border-blue-800" className="ml-2 block text-blue-800 font-semibold hover:bg-gray-400 rounded px-2 py-2 sm:mt-0" to="/blog">Blog</Link>
        </div>
    </header>
)
