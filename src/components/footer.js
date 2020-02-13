import React from "react"
import { Link } from "gatsby"

import envelope from './envelope.svg'
import twitter from './twitter.svg'
import github from './github.svg'

export default () => (
    <footer className="text-gray-600 bg-gray-800 min-h-32 mt-32 py-4 inset-x-0 bottom-0 flex justify-around" style={{
        'background': 'linear-gradient(0deg, #21232b, #26272b)'
    }}>
        <div className="lg:w-192 md:w-9/12 md:px-0 sm:w-full sm:px-12">
            <div className="py-8 flex justify-between items-start">
                <div class="flex flex-col items-center">
                    <p className="font-logo">&copy; Niru Maheswaranathan 2020</p>
                    <ul className="flex mt-2 text-gray-400 text-xs tracking-wider">
                        <li className="ml-0 mr-2"><Link className="hover:text-blue-400" to='/'>HOME</Link></li>&bull;
                        <li className="ml-2 mr-2"><Link className="hover:text-blue-400" to='/about'>ABOUT</Link></li>&bull;
                        <li className="ml-2"><Link className="hover:text-blue-400" to='/blog'>BLOG</Link></li>
                    </ul>
                </div>
                <div class="flex flex-col items-center text-xs tracking-tight">
                    <ul>
                        <li className="hover:text-blue-400 text-gray-400">
                            <svg className="fill-current h-5 inline mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 3 8 L 3 26 L 29 26 L 29 8 Z M 7.3125 10 L 24.6875 10 L 16 15.78125 Z M 5 10.875 L 15.4375 17.84375 L 16 18.1875 L 16.5625 17.84375 L 27 10.875 L 27 24 L 5 24 Z"/></svg>
                            <a className="text-gray-600" href="mailto:niru.maheswaranathan@gmail.com">niru.maheswaranathan@gmail.com</a>
                        </li>
                        <li className="mt-2 hover:text-blue-400 text-gray-400">
                            <svg className="fill-current h-5 inline mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875 7.757813 27.335938 6.609375 C 26.386719 7.171875 25.332031 7.582031 24.210938 7.804688 C 23.3125 6.847656 22.03125 6.246094 20.617188 6.246094 C 17.898438 6.246094 15.691406 8.453125 15.691406 11.171875 C 15.691406 11.558594 15.734375 11.933594 15.820313 12.292969 C 11.726563 12.089844 8.097656 10.128906 5.671875 7.148438 C 5.246094 7.875 5.003906 8.722656 5.003906 9.625 C 5.003906 11.332031 5.871094 12.839844 7.195313 13.722656 C 6.386719 13.695313 5.628906 13.476563 4.964844 13.105469 C 4.964844 13.128906 4.964844 13.148438 4.964844 13.167969 C 4.964844 15.554688 6.660156 17.546875 8.914063 17.996094 C 8.5 18.109375 8.066406 18.171875 7.617188 18.171875 C 7.300781 18.171875 6.988281 18.140625 6.691406 18.082031 C 7.316406 20.039063 9.136719 21.460938 11.289063 21.503906 C 9.605469 22.824219 7.480469 23.609375 5.175781 23.609375 C 4.777344 23.609375 4.386719 23.585938 4 23.539063 C 6.179688 24.9375 8.765625 25.753906 11.546875 25.753906 C 20.605469 25.753906 25.558594 18.25 25.558594 11.742188 C 25.558594 11.53125 25.550781 11.316406 25.542969 11.105469 C 26.503906 10.410156 27.339844 9.542969 28 8.558594 Z"/></svg>
                            <a className="text-gray-600" href="https://twitter.com/niru_m/">@niru_m</a>
                        </li>
                        <li className="mt-2 hover:text-blue-400 text-gray-400">
                            <svg className="fill-current h-5 inline mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"/></svg>
                            <a className="text-gray-600" href="https://github.com/nirum/">github.com/nirum</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)