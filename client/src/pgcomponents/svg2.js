import React from 'react';

import useTheme from '../hooks/useTheme';

const Svg = () => {

    const lightPic = 'https://mumbotportbuk.s3.amazonaws.com/standing+bird.svg'
    const darkPic = 'https://mumbotportbuk.s3.amazonaws.com/standing+bird+dark.png';
    const { isDarkMode } = useTheme();

    if (isDarkMode === true) {
        return (
            <div className = 'svg'>
                
                <img src = {lightPic} alt = 'one'/>
                
            </div>
        )
    }
    if (isDarkMode === false) {
        return (
            <div className = 'svg'>
                
                <img src = {darkPic} alt = 'one'/>
                
            </div>
        )
    }

}
export default Svg;