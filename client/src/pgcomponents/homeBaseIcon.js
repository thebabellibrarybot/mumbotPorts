import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PicDark from '../Vector 1.png';
import PicLight from '../Vector 1 light.png'
import SlideToggle from './slideToggle';
import useTheme from '../hooks/useTheme';
import HomeIcon from '../pgcomponents/homeicon';

const Svg = () => {

    // TODO make axios request for JSON array 
    // to use as props sent down into standardized

    const [data, setData] = useState(null)
    
    useEffect (() => {
        axios.get('home/icon/info')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    }, [])


    const { isDarkMode } = useTheme();
    const [visible, setVisible] = useState(false);

    function onoffClick() {
        setVisible(!visible)
    }

    const pic = (isDarkMode ? PicLight : PicDark)
    
    if (data === undefined) {
        return <>Still loading...might not ever stop...</>; 
        }

    return (
        <div className= {isDarkMode ? 'light' : 'dark'} >
        <div className = 'svg1'>
            <img src = {pic} alt = 'one' onClick={onoffClick}/>
            <div className={visible ? 'homeicons' : 'invisible'}>
                <div className='slideicon'>
                    <SlideToggle/>
                    {data && data.map((d, i) => {
                        return (
                            <HomeIcon key = {i} prop = {d.icon_title} url = {d.icon_url}/>
                            )
                    }) }
                    
                </div>
            </div>

        </div>
        </div>
    )

}



export default Svg