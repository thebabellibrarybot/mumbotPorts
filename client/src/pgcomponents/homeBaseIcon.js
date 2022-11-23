import React, { useState } from 'react';

import PicDark from '../Vector 1.png';
import PicLight from '../Vector 1 light.png'
import SlideToggle from './slideToggle';
import useTheme from '../hooks/useTheme';
import ManageUserIcon from '../pgcomponents/manageusericon.js';
import AboutContact from '../pgcomponents/aboutcontact.js';
import HomeIcon from '../pgcomponents/homeicon';

const Svg = () => {

    // TODO make axios request for JSON array 
    // to use as props sent down into standardized

    const data = 'ome/homebaseicon'

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
                    <ManageUserIcon/>
                    <HomeIcon prop = {data}/>
                    <AboutContact/>
                </div>
            </div>

        </div>
        </div>
    )

}



export default Svg