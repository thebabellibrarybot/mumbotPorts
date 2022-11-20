
import React from 'react';
import Pic from '../standing bird.svg';
import DarkPic from '../standing bird dark.png';

import useTheme from '../hooks/useTheme';


const Svg = () => {

    const { isDarkMode } = useTheme();

    if (isDarkMode === true) {
        return (
            <div className = 'svg'>
                
                <img src = {Pic} alt = 'one'/>
                
            </div>
        )
    }
    if (isDarkMode === false) {
        return (
            <div className = 'svg'>
                
                <img src = {DarkPic} alt = 'one'/>
                
            </div>
        )
    }

}



export default Svg;