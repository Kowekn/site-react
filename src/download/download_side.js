import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../go_to_top";

const topicos = [["Download", "/download"],
["Info", "/download/info"]
]

const insertTopicos = topicos.map((item, index)=>{
    return <li className="-ml-px pl-4 border-l border-transparent hover:border-neutral-200"><Link className="block" 
    to={topicos[index][1]}>{topicos[index][0]}</Link></li>
});

function Download_side(){
    return(
        <div className="flex basis-1/4 h-auto bg-neutral-800 pr-4 pl-4 pb-32 pt-16 flex-col ">

                    {/*<div className=""> 
                    <input type="text" placeholder="Pesquisar" className="text-inherit bg-neutral-800 focus:outline-none -mt-4"></input>
                    </div>*/}
                    <h3 id="h">Tópicos</h3>
                    
                    <ul id="ul" className="space-y-4 border-l border-neutral-500 text-start">
                        {insertTopicos}
                    </ul>
                  <GoToTop/>          
                </div>
    )
}

export default Download_side;