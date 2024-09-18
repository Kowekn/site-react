import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../go_to_top";



const topicos = [["Download", "/download"],
["Info", "/download/info"]
]

const insertTopicos = topicos.map((item, index)=>{
    return <li className={` -ml-px pl-4 border-l border-transparent hover:border-dark `}><Link className={`block`} id="p" 
    to={topicos[index][1]}>{topicos[index][0]}</Link></li>
});

function Side(){
    return(
        <div className={`basis-3/12 flex h-auto pr-4 pl-4 pb-32 p-4 pl-8 flex-col bg-gradient-to-r from-light to-dark`}>

                    {/*<div className=""> 
                    <input type="text" placeholder="Pesquisar" className="text-inherit bg-neutral-800 focus:outline-none -mt-4"></input>
                    </div>*/}
                    <h3 id="h">Tópicos</h3>
                    
                    <ul id="ul" className={`space-y-4 border-l border-main text-start`}>
                        {insertTopicos}
                    </ul>
                  <GoToTop/>          
                </div>
    )
}

export default Side;