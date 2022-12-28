import { useState } from "react";

import useTheme from "../hooks/useTheme"

import HomeBaseIcon from '../pgcomponents/homeBaseIcon';
//import Svg from "../pgcomponents/svg2";
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
                <h1>LinkTree</h1>
                <div className='iconbar'>
                    <HomeBaseIcon/>
                </div> 
            </div>

            <div className='linktree-base'>

                <div className="linktree-obj">
                    <div className="main-obj" onClick={onoffClick}>
                        <h1>BHG</h1>
                        <div className="svg-obj">
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>

                    <div className={visible ? "ext-obj" : "invisible"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="linktree-date">
                    <p>2017</p>
                </div>

            </div>

            <div className='linktree-base'>

                <div className="linktree-obj">
                    <div className="main-obj" onClick={onoffClick}>
                        <h1>main obj 1</h1>
                        <div className="svg-obj">
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className={visible ? "ext-obj" : "invisible"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldext objus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="linktree-date">
                    <p>date1</p>
                </div>

            </div>

            <div className='linktree-base'>

                <div className="linktree-obj">
                    <div className="main-obj" onClick={onoffClick}>
                        <h1>main obj 1</h1>
                        <div className="svg-obj">
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className={visible ? "ext-obj" : "invisible"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="linktree-date">
                    <p>date1</p>
                </div>

            </div>

            <div className='linktree-base'>

                <div className="linktree-obj">
                    <div className="main-obj" onClick={onoffClick}>
                        <h1>main obj 1</h1>
                        <div className="svg-obj">
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className={visible ? "ext-obj" : "invisible"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="linktree-date">
                    <p>date1</p>
                </div>

            </div>

        </div>
    )

}
export default LinkTree;


/* 
BIB:

toggle one (el):
https://forum.freecodecamp.org/t/react-how-to-toggle-a-single-instance-of-a-react-element/189827

*/ 