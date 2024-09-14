import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../go_to_top";
import { BACKGROUND, FROM_BACKGROUND, TO_BACKGROUND, VIA_BACKGROUND, BORDER_BACKGROUND, BACKGROUND_LIGHT, 
    FROM_BACKGROUND_LIGHT, TO_BACKGROUND_LIGHT, VIA_BACKGROUND_LIGHT, BORDER_BACKGROUND_LIGHT, ACCENT_ACCENT, HOVER_BORDER_BACKGROUND, HOVER_BORDER_ACCENT,
    TEXT_ACCENT, BORDER_ACCENT, OUTLINE_ACCENT, BG_ACCENT, TEXT_MAIN, BORDER_MAIN, OUTLINE_MAIN } from "../css_consts";


const topicos = [["Download", "/download"],
["Info", "/download/info"]
]

const insertTopicos = topicos.map((item, index)=>{
    return <li className={` -ml-px pl-4 border-l border-transparent ${HOVER_BORDER_ACCENT} `}><Link className={`block`} id="p" 
    to={topicos[index][1]}>{topicos[index][0]}</Link></li>
});

function Side(){
    return(
        <div className={`basis-3/12 flex h-auto pr-4 pl-4 pb-32 p-4 pl-8 flex-col bg-gradient-to-r ${FROM_BACKGROUND_LIGHT} ${TO_BACKGROUND}`}>

                    {/*<div className=""> 
                    <input type="text" placeholder="Pesquisar" className="text-inherit bg-neutral-800 focus:outline-none -mt-4"></input>
                    </div>*/}
                    <h3 id="h">Tópicos</h3>
                    
                    <ul id="ul" className={`space-y-4 border-l ${BORDER_MAIN} text-start`}>
                        {insertTopicos}
                    </ul>
                  <GoToTop/>          
                </div>
    )
}

export default Side;