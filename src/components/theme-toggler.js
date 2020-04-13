import React, { useState, useEffect } from "react"
import useDarkMode from 'use-dark-mode';

export default () => {
    const darkMode = useDarkMode(false);
    // const { mode, toggleMode } = useDarkmodeContext();

    // const setDark = () => setTheme('dark');
    // const setLight = () => {console.log('light'); setTheme('light')};

    // useEffect(() => {
    //     console.log('query changed')
    //     const getColorScheme = (e) => e.matches ? 'dark' : 'light'
    //     const setColorScheme = (e) => setTheme(getColorScheme(e))
    //     setColorScheme(query)
    //     query.addListener(setColorScheme)
    // }, [query])
    return (
        <div className="block">
            <button onClick={darkMode.toggle} className="px-2 py-1 font-bold tracking-wider text-gray-800 uppercase bg-transparent border border-gray-500 rounded shadow dark-mode:text-gray-200">
                {darkMode.value ? "Dark" : "Light"}
            </button>
        </div>
    )
}

// function setColorScheme(scheme) {
//     switch(scheme){
//       case 'dark':
//         // Dark
//         break;
//       case 'light':
//         // Light
//         break;
//       default:
//         // Default
//         break;
//     }
//   }
  
//   function getPreferedColorScheme() {
//     if (window.matchMedia) {
//       if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//         return 'dark';
//       } else {
//         return 'light';
//       }
//     }
//     return 'light';
//   }
  
//   if(window.matchMedia){
//     var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     colorSchemeQuery .addEventListener('change', setColorScheme(getPreferedColorScheme()));
//   }