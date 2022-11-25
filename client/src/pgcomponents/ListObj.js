import React from "react";
import { Link } from "react-router-dom";

const ListObj = () => {


    return (
        <div className="homelist">
            <div className='slots'>
                <div className='out' id = 'o1'><Link style={{textDecoration: 'none'}} to = "home/lionport"><p>lionPort</p></Link></div>
                <div className='out' id = 'o2'><a style={{textDecoration: 'none'}} href="https://babellib.herokuapp.com/" target="_blank" rel="noreferrer"><p>The Babel Library</p></a></div> 
                <div className='out' id = 'o3'><Link style={{textDecoration: 'none'}} to = "home/hmfasport"><p>hmfasPort</p></Link></div> 
                <div className='out' id = 'o4'><Link style={{textDecoration: 'none'}} to = "home/tacport"><p>tacPort</p></Link></div> 
                <div className='out' id = 'o5'><Link style={{textDecoration: 'none'}} to = "home/bhgport"><p>bhgPort</p></Link></div> 
                <div className='out' id = 'o5'><Link style={{textDecoration: 'none'}} to = "home/cv"><p>cv</p></Link></div> 
                <div className='out' id = 'o6'><a style={{textDecoration: 'none'}} href="https://github.com/thebabellibrarybot/" target="_blank" rel="noreferrer"><p>gitHubPort</p></a></div> 
            </div>
        </div>
    )
}

export default ListObj;