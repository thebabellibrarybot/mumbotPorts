import { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";

import useTheme from "../hooks/useTheme"

import HomeBaseIcon from '../pgcomponents/homeBaseIcon';
import CVOBJ from '../pgcomponents/cvobj';
import BackgroundSVG from '../pgcomponents/backgroundSVG';

const CV = () => {

    const hist = useLocation();
    const [data, setData] = useState();
    useEffect (() => {
        axios.get(`${hist.pathname}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    }, [hist])
    const { isDarkMode } = useTheme();
    const [visible, setVisible] = useState(false);
    function onoffClick() {
        setVisible(!visible)
    }
    
    if (data === undefined) {
        return <>Still loading...might not ever stop...</>; 
        }

    return (
        <div className={isDarkMode ? 'light' : 'dark'}>
        <div className='homepg'>
            <div className='infobar'>
                <div className='titlebar'>
                    <h1 onClick={onoffClick}>{data[0].title_head}</h1>
                    <div className='iconbar'>
                        <HomeBaseIcon/>
                    </div> 
                </div>
                <div className = 'listobj'>
                    <CVOBJ props = {data}/>
                </div>
            </div>
            <div className="backgroundSVGIMG">
                <BackgroundSVG prop = {data[0].base_image}/>
            </div>
        </div>
    </div>
    )

}
export default CV;

// mk CVOBJ just OBJ and pass props from backend to it
// mk welcome a home tab
// mk styles for CVOBJ


/*
{data && data.body.map((body)=>{
                        return (
                            <p>{data.title_card}</p>
                        )
                    })}
                    */