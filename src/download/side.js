import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoToTop from "../go_to_top";
import {ReactComponent as Burg} from "../imagens/burg.svg"





function Side(){
const topicos = [["Download", "/download"],
["Info", "/download/info"]
]

const insertTopicos = topicos.map((item, index)=>{
    return <li className={` -ml-px pl-4 border-l border-transparent 
    hover:border-accent `}><Link className={`block` } id="p" 
    to={topicos[index][1]} >{topicos[index][0]}</Link></li>
});
    const botaocss = `sm:relative  left-0 fixed top-0 sm:top-0 sm:translate-x-[0%]
        ease-out duration-300 origin-left  z-[60] w-full h-full sm:z-20 smL:w-auto sm:h-auto
         flex  pr-4 pl-4 pb-32 p-4 pl-8 flex-col sm:basis-3/12
        bg-gradient-to-r from-light to-dark`
    const [BotaoCSS, setBotaoCSS] = useState(botaocss + ` translate-x-[-100%] `)
   
    


    function Botao(){
        if(BotaoCSS == botaocss){
            setBotaoCSS(botaocss + ` translate-x-[-100%]`)
            
        }
        else{
            
            setBotaoCSS(botaocss )
            
        }
    }





    return(
    
        
            <div className={BotaoCSS}  onClick={e => Botao(e.target.value)}>
                    <div className={`relative top-[50%] `} >
                        <div className={`absolute right-[-20%] block sm:hidden animate-bounce origin-left `} >
                            <Burg  onClick={e => Botao(e.target.value)}   onMouseLeave={e => e.preventDefault()}
                                className={`p-4 bg-accent/40 border-1 border-accent-/40 size-20
                                rounded-lg fill-main stroke-main `}
                             ></Burg>
                        </div>
                    </div>
                    <div className={`relative top-[50%] left-40 scale-[1.5]  sm:top-0 sm:left-0 sm:scale-[1.0] `}>
                    <h3 id="h">Tópicos</h3>
                    
                    <ul id="ul" className={`space-y-4 border-l border-main text-start`}>
                        {insertTopicos}
                    </ul>
                    </div>
                  <GoToTop/>   
                  </div>       
                
                
    )
}

export default Side;