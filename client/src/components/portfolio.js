import React from 'react';
import HomeBaseIcon from '../pgcomponents/homeBaseIcon';
//import { useState } from 'react';
import useTheme from "../hooks/useTheme"


const Portfolio = () => {

    const { isDarkMode } = useTheme();


     
    return (
        <div className={isDarkMode ? 'light' : 'dark'}>

        <div className='titlebar'>
            <h1>Portfolio</h1>
            <div className='iconbar'>
                <HomeBaseIcon/>
            </div> 
        </div>

        <div className='port-component'>
            
            <div className='portfolio-base'>

                <div className='port-head'>
                    <div className='portfolio-header'>
                        <h1>Templates: CRM</h1>
                        <p>contact cards, inventory trackers, item info</p>
                    </div>
                    <div className='portfolio-icon'>
                        <p>img</p>
                    </div>
                </div>

                <div className='portfolio-subheader'>
                    <p>subheaders</p>
                </div>

            </div>

            <div className='portfolio-base'>

                <div className='port-head'>
                    <div className='portfolio-header'>
                        <h1>Templates: Public</h1>
                        <p>catalogs, blogs, about services</p>
                    </div>
                    <div className='portfolio-icon'>
                        <p>img</p>
                    </div>
                </div>

                <div className='portfolio-subheader'>
                    <p>subheaders</p>
                </div>

            </div>

            <div className='portfolio-base'>

                <div className='port-head'>
                    <div className='portfolio-header'>
                        <h1>Templates: Content Creation</h1>
                        <p>product wheele, product descriptions, content sharring</p>
                    </div>
                    <div className='portfolio-icon'>
                        <p>img</p>
                    </div>
                </div>

                <div className='portfolio-subheader'>
                    <p>subheaders</p>
                </div>

            </div>

            <div className='portfolio-base'>

                <div className='port-head'>
                    <div className='portfolio-header'>
                        <h1>Templates: Icons, Themes, and Color Wheels</h1>
                        <p>interactive playground for fooling around with themes and shit</p>
                    </div>
                    <div className='portfolio-icon'>
                        <p>img</p>
                    </div>
                </div>

                <div className='portfolio-subheader'>
                    <p>subheaders</p>
                </div>

            </div>

        </div>
        <div className='cutsy'>
            <p>cute gif here</p>
        </div>

        </div>
    )

}
export default Portfolio

/*
TODO:

- add axios req so I don't need 4 divs of portfolio-base
- add pg_component for subheaders that includes:
    * each <h1><p> with additional info and an icon or single example
    * expands port instance to take up the whole ass screen
- mk repeating scrool on port-component


BIB:

looping scroll: 
https://codesandbox.io/s/async-resonance-hfw7h?file=/src/App.tsx
*/