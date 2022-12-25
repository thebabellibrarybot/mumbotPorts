import React from 'react';
import HomeBaseIcon from '../pgcomponents/homeBaseIcon';
import { useState } from 'react';
import useTheme from "../hooks/useTheme"


const Portfolio = () => {

    const { isDarkMode } = useTheme();
    const [visible, setVisible] = useState(false);

    function onoffClick() {
        setVisible(!visible)
    }
    
    return (
        <div className={isDarkMode ? 'light' : 'dark'}>

        <div className='titlebar'>
            <h1 onClick={onoffClick}>Portfolio</h1>
            <div className='iconbar'>
                <HomeBaseIcon/>
            </div> 
        </div>

        <div className='linktree-base'>
            <p>base</p>
        </div>

        </div>
    )

}



export default Portfolio