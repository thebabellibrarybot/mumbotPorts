
import React from 'react';



const babPort = () => {
    
    return (
        <div className = 'content'>
            <div className='babLoad'>
            </div>
            <div className='babHome'>
                <p>babhome</p>
                <button onClick={()=> {console.log('clicked')}}>
                clickme
                </button>
            </div>
            
        </div>
    )

}



export default babPort