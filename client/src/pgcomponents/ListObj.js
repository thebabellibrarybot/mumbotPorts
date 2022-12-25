import React from "react";
import { Link } from "react-router-dom";

const ListObj = () => {


    return (
        <div className="homelist">
            <div className='slots'>
                <div className='out' id = 'o2'><a style={{textDecoration: 'none'}} href="https:/babellib.herokuapp.com/" target="_blank" rel="noreferrer"><p>The Babel Library</p></a></div> 
                <div className='out' id = 'o5'><Link style={{textDecoration: 'none'}} to = "home/cv"><p>cv</p></Link></div> 
                <div className="out" id = 'o6'><Link style={{textDecoration: 'none'}} to = "mumbots/linkTree"><p>LinkTree</p></Link></div>
                <div className="out" id = 'o7'><Link style={{textDecoration: 'none'}} to = "mumbots/portfolio"><p>Portfolio</p></Link></div>
                <div className='out' id = 'o6'><a style={{textDecoration: 'none'}} href="https://github.com/thebabellibrarybot/" target="_blank" rel="noreferrer"><p>gitHubPort</p></a></div> 
            </div>
        </div>
    )
}

export default ListObj;

// add all basic links to interactive link tree desing

// DEL:

/*
    <div className='out' id = 'o3'><a style={{textDecoration: 'none'}} href="https://www.hangmannyc.com/" target="_blank" rel="noreferrer"><p>HMFAS</p></a></div> 
    <div className='out' id = 'o4'><a style={{textDecoration: 'none'}} href="https://textileartscenter.com/" target="_blank" rel="noreferrer"><p>TAC Port</p></a></div> 
    <div className='out' id = 'o5'><a style={{textDecoration: 'none'}} href="http://billhodgesgallery.com/" target="_blank" rel="noreferrer"><p>BHG Port</p></a></div> 
    
*/