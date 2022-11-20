import { useEffect, useState } from "react";
import axios from 'axios';

import useTheme from "../hooks/useTheme"

import HomeBaseIcon from '../pgcomponents/homeBaseIcon';
import CVOBJ from '../pgcomponents/cvobj';

const CV = () => {

    const path = window.location.pathname;
    const [data, setData] = useState();
    useEffect (() => {
        axios.get(`${path}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    }, [path])
    console.log(data, 'data from axios req in cv')

    const { isDarkMode } = useTheme();

    const [visible, setVisible] = useState(false);
    function onoffClick() {
        setVisible(!visible)
    }




    return (
        <div className={isDarkMode ? 'light' : 'dark'}>
        <div className='homepage'>
            <div className='welcomebar'>
                <div className='mainbar'>
                    <h1 onClick={onoffClick}>Welcome</h1>
                    <div className='prof'>
                        <HomeBaseIcon/>
                    </div>
                </div>
                <div class = {visible ? 'listobj' : 'invisible'}>
                    <CVOBJ/>
                </div>
            </div>
        </div>
    </div>
    )

}



export default CV;

// mk CVOBJ just OBJ and pass props from backend to it
// mk welcome a home tab
// mk styles for CVOBJ