import { Link, useNavigate } from "react-router-dom";
import React from 'react';


const Homeicon = (props) => {


    // add a generalizing function that takes prop 'clicked obj'
    // function takes nav => nav to prop
    const navigate = useNavigate();
    const iconTitle = props.prop;
    const url = props.url;

    function useLink() {
        console.log(url)
        navigate(url)
    }

    return (
        <div className = 'aboutcontact'>
            <p>{iconTitle}</p> 
            <div className='out'><p onClick={useLink}> LINK LINK </p></div>
        </div>    )
}
export default Homeicon;