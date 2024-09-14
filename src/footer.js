import React from "react";
import {ReactComponent as Logob} from "./imagens/logob.svg"
import { BACKGROUND, FROM_BACKGROUND, TO_BACKGROUND, VIA_BACKGROUND, BORDER_BACKGROUND, BACKGROUND_LIGHT, 
  FROM_BACKGROUND_LIGHT, TO_BACKGROUND_LIGHT, VIA_BACKGROUND_LIGHT, BORDER_BACKGROUND_LIGHT, ACCENT_ACCENT, 
  TEXT_ACCENT, BORDER_ACCENT, OUTLINE_ACCENT, TEXT_MAIN, BORDER_MAIN, OUTLINE_MAIN } from "./css_consts";

function Footer(){
    return(
    <footer className={`${BACKGROUND}`}>
      <div className={`flex flex-col justify-center py-px    max-md:mr-0.5 max-md:max-w-full`}>
        <div className={`flex flex-col justify-center items-start border border-solid ${BORDER_BACKGROUND_LIGHT} max-md:pr-5 max-md:max-w-full`}>
          <div className={`flex flex-col flex-wrap  items-start pt-5 pb-2 pr-8 pl-3.5 max-w-full  w-[1208px] max-md:pr-5`}>
            <div className={`flex gap-2 ml-5 text-base leading-6 whitespace-nowrap text-zinc-800 max-md:ml-2.5`}>
              
              <a href="mailto:vagner@joinbit.com"><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7430baf223004c1becae9137d61516af639179983e91d7a53acefba18e159cd3?"
                className="shrink-0 w-8 aspect-square "
              /></a>
              <a  className={`relative top-[3px] `} id="a" href="mailto:vagner@joinbit.com" >
                vagner@joinbit.com
              </a>

            </div>
            <div className={`flex gap-4 mt-8 ml-5 max-md:ml-2.5`}>

             <button> <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bcfd9f06994233782f9ce2366326f1141effc54d28cb79c6965859c31593cae?"
                className={`shrink-0 w-6 aspect-square`}
              /></button>
                  
              <a><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7d783f5c47ea82f1e096a530d70be79a1a9b5cb81b7f5f5b6833b798ea0e9ed?"
                className={`shrink-0 w-6 aspect-square"`}
              /></a>

            </div>
            
            <a href="http://www.vbmania.com.br/"><Logob
              
              className={`mt-9 max-w-full size-full `}
            ></Logob></a>

          </div>
        </div>
      </div>
      </footer>

  
    )
}

export default Footer;