import { useState } from "react";

import useTheme from "../hooks/useTheme"

import HomeBaseIcon from '../pgcomponents/homeBaseIcon';
//import Svg from "../pgcomponents/svg2";
//import CVOBJ from '../pgcomponents/cvobj';
import BackgroundSVG from '../pgcomponents/backgroundSVG';

const LinkTree = () => {

    const arr = ['https://mumbotportbuk.s3.amazonaws.com/jumpingBird.svg', 'https://mumbotportbuk.s3.amazonaws.com/jumping+bird+dark.svg']

    const { isDarkMode } = useTheme();
    const [BHG, setBHG] = useState(false);
    const [TAC, setTAC] = useState(false);
    const [LionUni, setLionUni] = useState(false);
    const [Ind, setInd] = useState(false)
 
    function onoffClick(props) {
        if (props === 'BHG') {
            setBHG(!BHG)
            setTAC(false)
            setLionUni(false)
            setInd(false)
        }
        if (props === 'TAC') {
            setBHG(false)
            setTAC(!TAC)
            setLionUni(false)
            setInd(false)
        }
        if (props === 'LionUni') {
            setBHG(false)
            setTAC(false)
            setLionUni(!LionUni)
            setInd(false)
        } 
        if (props === 'Ind') {
            setInd(!Ind)
            setBHG(false)
            setLionUni(false)
            setTAC(false)
        }
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
                    <div className="main-obj" onClick={()=>onoffClick('BHG')}>
                        <h1>BHG</h1>
                        <div className={BHG ? "invisible" : "svg-obj"}>
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>

                    <div className={BHG ? "ext-obj" : "invisible"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="linktree-date">
                    <p>2017</p>
                </div>

            </div>

            <div className='linktree-base'>

                <div className="linktree-obj">
                    <div className="main-obj" onClick={()=>onoffClick('TAC')}>
                        <h1>TAC</h1>
                        <div className={TAC ? "invisible" : "svg-obj"}>
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className={TAC ? "ext-obj" : "invisible"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldext objus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="linktree-date">
                    <p>2019</p>
                </div>

            </div>

            <div className='linktree-base'>

                <div className="linktree-obj">
                    <div className="main-obj" onClick={()=>onoffClick('LionUni')}>
                        <h1>Lion and Unicorn</h1>
                        <div className={LionUni ? "invisible" : "svg-obj"}>
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className={LionUni ? "ext-obj" : "invisible"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="linktree-date">
                    <p>2020</p>
                </div>

            </div>

            <div className='linktree-base'>

                <div className="linktree-obj">
                    <div className="main-obj" onClick={()=>onoffClick('Ind')}>
                        <h1>Indpendant Contracts</h1>
                        <div className={Ind ? "invisible" : "svg-obj"}>
                            <img src = 'img' alt = 'img'></img>
                        </div>
                    </div>
                    <div className={Ind ? "ext-obj" : "invisible"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="linktree-date">
                    <p>2020-current</p>
                </div>

            </div>
            <div className="backgroundSVGIMG">
                <BackgroundSVG prop = {arr}/>
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

/*

TODO:

- add links to website
- add clickables with things I designed for each place which 
  link to the portfolio part of the website
- add an about the company type of thing
- mk and upload icons for each portal
- mk Ind.Cont expandable
- mk expandable from '/pgcomponents/expandable-linktree.js'

*/