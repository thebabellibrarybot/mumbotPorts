import { useNavigate } from "react-router-dom";
import React from 'react';


const Homeicon = (props) => {


    // add a generalizing function that takes prop 'clicked obj'
    // function takes nav => nav to prop
    const navigate = useNavigate();
    const iconTitle = props.prop;
    const url = props.url;
    const img = props.img;

    function useLink() {
        console.log(url)
        navigate(url)
    }
    
// change so return will give diff options based off prop: iconTitle

    return (
        <div className = 'aboutcontact' onClick={useLink}>
            <p>{iconTitle}</p> 
            <img src = {img} alt = {iconTitle}></img>
        </div>    )
}
export default Homeicon;