import { useState } from 'react';
import React from 'react';
import "../components/scss/_main.scss";

import ReactSwitch from 'react-switch';


const BhgPort = () => {
    
    const [theme, setTheme] = useState('light');
    const [checked, setChecked] = useState(false);

    function switchTheme () {
        setTheme(theme === 'light' ? 'dark': 'light');
        setChecked(checked === false ? true: false);
        console.log('theme: ', theme, 'checked: ', checked);
    }



    return (
        <div className={theme}>
                <p className='text'>{theme}</p>
                <ReactSwitch onChange={switchTheme} checked={checked}/>
        </div>
    )

}



export default BhgPort

/*                 <ReactSwitch onChange={() => setTheme(theme === 'light' ? 'dark': 'light')} checked = {checked}/>
*/