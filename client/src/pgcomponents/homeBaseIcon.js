import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SlideToggle from './slideToggle';
import useTheme from '../hooks/useTheme';
import HomeIcon from '../pgcomponents/homeicon';

const Svg = () => {

    // TODO make axios request for JSON array 
    // to use as props sent down into standardized
    const lightPic = 'https://mumbotportbuk.s3.amazonaws.com/Group+1.svg';
    const darkPic = 'https://mumbotportbuk.s3.amazonaws.com/Group+1+dark.svg';
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

    const pic = (isDarkMode ? lightPic : darkPic)
    
    if (data === undefined) {
        return <>Still loading...might not ever stop...</>; 
        }
    console.log(data, 'data from homebaseicon axios req')

    return (
        <div className= {isDarkMode ? 'light' : 'dark'} >
        <div className = 'svg1'>
            <img src = {pic} alt = 'one' onClick={onoffClick}/>
            <div className={visible ? 'homeicons' : 'invisible'}>
                <div className='slideicon'>
                    <SlideToggle/>
                    {data && data.map((d, i) => {
                        return (
                            <HomeIcon key = {i} prop = {d.icon_title} url = {d.icon_url} img = {d.icon_message}/>
                            )
                    }) }
                    
                </div>
            </div>

        </div>
        </div>
    )

}



export default Svg