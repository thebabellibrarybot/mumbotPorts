import React from "react";
import { useNavigate } from "react-router-dom";

const ListObj = () => {

    const navigate = useNavigate();

    return (
        <div className="homelist">
            <div className='slots'>
                <div className='out' id = 'o1'><span><p onClick={() => navigate("/lionport")}>lionPort</p></span></div>
                <div className='out' id = 'o2'><span><p onClick={() => navigate("/babport")}>babPort</p></span></div> 
                <div className='out' id = 'o3'><span><p onClick={() => navigate("/hmfasport")}>hmfasPort</p></span></div> 
                <div className='out' id = 'o4'><span><p onClick={() => navigate("/tacport")}>tacPort</p></span></div> 
                <div className='out' id = 'o5'><span><p onClick={() => navigate("/bhgport")}>bhgPort</p></span></div> 
                <div className='out' id = 'o5'><span><p onClick={() => navigate("/cv")}>cv</p></span></div> 
                <div className='out' id = 'o6'><span><p><a href="https://github.com/thebabellibrarybot/" target="_blank" rel="noreferrer">gitHubPort</a></p></span></div> 
            </div>
        </div>
    )
}

export default ListObj;