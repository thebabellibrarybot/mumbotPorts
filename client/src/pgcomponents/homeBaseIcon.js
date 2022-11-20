import React, { useState } from 'react';

import PicDark from '../Vector 1.png';
import PicLight from '../Vector 1 light.png'
import SlideToggle from './slideToggle';
import useTheme from '../hooks/useTheme';
import ManageUserIcon from '../pgcomponents/manageusericon.js';
import AboutContact from '../pgcomponents/aboutcontact.js';


const Svg = () => {

    const { isDarkMode } = useTheme();
    const [visible, setVisible] = useState(false);

    function onoffClick() {
        setVisible(!visible)
    }

    const pic = (isDarkMode ? PicLight : PicDark)
    
    return (
        <div className= {isDarkMode ? 'light' : 'dark'} >
        <div className = 'svg1'>
            
            <img src = {pic} alt = 'one' onClick={onoffClick}/>
            <div className={visible ? 'homeicons' : 'invisible'}>
                <div className='slideicon'>
                    <SlideToggle/>
                </div>
                <div className='slideicon'>
                    <ManageUserIcon/>
                </div>
                <div className='slideicon'>
                    <AboutContact/>
                </div>
            </div>

        </div>
        </div>
    )

}



export default Svg