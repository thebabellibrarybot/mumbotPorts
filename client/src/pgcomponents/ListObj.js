import React from "react";
import { useNavigate } from "react-router-dom";

const ListObj = () => {

    const navigate = useNavigate();

    return (
        <div className="homelist">
            <div className='slots'>
                <div className='out' id = 'o1'><p onClick={() => navigate("/home/lionport")}>lionPort</p></div>
                <div className='out' id = 'o2'><p><a href="https://babellib.herokuapp.com/" target="_blank" rel="noreferrer">The Babel Library</a></p></div> 
                <div className='out' id = 'o3'><p onClick={() => navigate("/home/hmfasport")}>hmfasPort</p></div> 
                <div className='out' id = 'o4'><p onClick={() => navigate("/home/tacport")}>tacPort</p></div> 
                <div className='out' id = 'o5'><p onClick={() => navigate("/home/bhgport")}>bhgPort</p></div> 
                <div className='out' id = 'o5'><p onClick={() => navigate("/home/cv")}>cv</p></div> 
                <div className='out' id = 'o6'><p><a href="https://github.com/thebabellibrarybot/" target="_blank" rel="noreferrer">gitHubPort</a></p></div> 
            </div>
        </div>
    )
}

export default ListObj;