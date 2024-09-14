import * as React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from './imagens/logo_joinbit_visual_reportx.svg'
import { BACKGROUND, FROM_BACKGROUND, TO_BACKGROUND, VIA_BACKGROUND, BORDER_BACKGROUND, BACKGROUND_LIGHT, 
  FROM_BACKGROUND_LIGHT, TO_BACKGROUND_LIGHT, VIA_BACKGROUND_LIGHT, BORDER_BACKGROUND_LIGHT, ACCENT_ACCENT, 
  TEXT_ACCENT, BORDER_ACCENT, OUTLINE_ACCENT, TEXT_MAIN, BORDER_MAIN, OUTLINE_MAIN } from "./css_consts";

function Header() {
    return(

      <div className={`flex flex-wrap gap-5  justify-between content-center px-7 py-4 w-full text-base leading-4 whitespace-nowrap border-b ${BORDER_BACKGROUND_LIGHT}
      border-solid ${BACKGROUND}  ${TEXT_MAIN} max-md:px-5 max-md:max-w-full`}>
        {/* logo */}
        <Link to="/" ><div className=""><Logo
        className=" size-16   rounded-full ">
        </Logo></div></Link>
        {/* header */}
        <div className={`flex gap-4 items-center my-auto max-md:flex-wrap`}>
         <Link to="/download"><div id="p" className={`active:text-neutral-400 hover:text-stone-50 hover:${BACKGROUND_LIGHT} justify-center self-stretch 
         p-2 ${BACKGROUND} border border-solid rounded ${BORDER_MAIN} 
         text-[color:var(--sds-color-text-brand-on-brand-secondary)]`}>
            Download
          </div></Link>
          <Link to="/registro"><div id="p" className={`self-stretch my-auto hover:text-stone-50 active:text-neutral-400`}>Registro</div></Link>
          <Link to="/telas"><div id="p" className={`self-stretch my-auto hover:text-stone-50 active:text-neutral-400`}>Telas</div></Link>
          <Link><div id="p" className={`self-stretch my-auto hover:text-stone-50 active:text-neutral-400`}>FAQ</div></Link>
          <Link to="/opinioes" ><div id="p" className={`self-stretch my-auto hover:text-stone-50 active:text-neutral-400`}>Opiniões</div></Link>
          <Link><div id="p" className={`self-stretch my-auto hover:text-stone-50 active:text-neutral-400`}>Contato</div></Link>
         <Link><div id="p" className={`active:text-neutral-400 flex-1 justify-center self-stretch p-2 border border-solid 
         ${BACKGROUND} ${BORDER_MAIN} rounded max-md:px-7 hover:text-stone-50 hover:${BACKGROUND_LIGHT}`}>
            Login
          </div></Link>
        </div>
      </div>

    
   ) 
  }

export default Header;