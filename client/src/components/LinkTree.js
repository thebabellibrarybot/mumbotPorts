import { useState } from "react";

import useTheme from "../hooks/useTheme"

import HomeBaseIcon from '../pgcomponents/homeBaseIcon';
//import CVOBJ from '../pgcomponents/cvobj';
//import BackgroundSVG from '../pgcomponents/backgroundSVG';

const LinkTree = () => {

    const { isDarkMode } = useTheme();
    const [visible, setVisible] = useState(false);

    function onoffClick() {
        setVisible(!visible)
    }
    
    return (
        <div className={isDarkMode ? 'light' : 'dark'}>

            <div className='titlebar'>
                <h1 onClick={onoffClick}>LinkTree</h1>
                <div className='icon-bar'>
                    <HomeBaseIcon/>
                </div> 
            </div>

            <div className='linktree-base'>

                <div className="linktree-obj">
                    <div className="main-obj">
                        <h1>main obj 1</h1>
                        <div className="svg-obj">
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className="ext-obj">
                        <p>ext obj</p>
                    </div>
                </div>
                <div className="linktree-date">
                    <p>date1</p>
                </div>

                <div className="linktree-obj">
                    <div className="main-obj">
                        <h1>main obj 2</h1>
                        <div className="svg-obj">
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className="ext-obj">
                        <p>ext obj</p>
                    </div>
                </div>

                <div className="linktree-date">
                    <p>date2</p>
                </div>

                <div className="linktree-obj">
                    <div className="main-obj">
                        <h1>main obj 3</h1>
                        <div className="svg-obj">
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className="ext-obj">
                        <p>ext obj</p>
                    </div>
                </div>
                <div className="linktree-date">
                    <p>date</p>
                </div>

                <div className="linktree-obj">
                    <div className="main-obj">
                        <h1>main obj 4</h1>
                        <div className="svg-obj">
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className="ext-obj">
                        <p>ext obj</p>
                    </div>
                </div>
                <div className="linktree-date">
                    <p>date</p>
                </div>

            </div>

        </div>
    )

}
export default LinkTree;