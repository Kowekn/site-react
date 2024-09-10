import * as React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from './imagens/logo_joinbit_visual_reportx.svg'


function Header() {
    return(

      <div className="flex flex-wrap gap-5  justify-between content-center px-7 py-4 w-full text-base leading-4 whitespace-nowrap border-b border-solid bg-neutral-950 border-neutral-800 text-[color:var(--sds-color-text-default-default)] max-md:px-5 max-md:max-w-full">
        {/* logo */}
        <Link to="/" ><div className=""><Logo
        className=" size-20   rounded-full">
        </Logo></div></Link>
        {/* header */}
        <div className="flex gap-4 items-center my-auto max-md:flex-wrap">
         <Link to="/download"><div id="p" className="active:text-neutral-400 hover:text-stone-50 hover:bg-zinc-800 justify-center self-stretch p-2 bg-[color:var(--sds-color-background-neutral-secondary-hover)] border border-solid rounded border-neutral-500 text-[color:var(--sds-color-text-brand-on-brand-secondary)]">
            Download
          </div></Link>
          <Link to="/registro"><div id="p" className="self-stretch my-auto hover:text-stone-50 active:text-neutral-400">Registro</div></Link>
          <Link to="/telas"><div id="p" className="self-stretch my-auto hover:text-stone-50 active:text-neutral-400">Telas</div></Link>
          <Link><div id="p" className="self-stretch my-auto hover:text-stone-50 active:text-neutral-400">FAQ</div></Link>
          <Link><div id="p" className="self-stretch my-auto hover:text-stone-50 active:text-neutral-400">Opiniões</div></Link>
          <Link><div id="p" className="self-stretch my-auto hover:text-stone-50 active:text-neutral-400">Contato</div></Link>
         <Link><div id="p" className="active:text-neutral-400 flex-1 justify-center self-stretch p-2 border border-solid bg-[color:var(--sds-color-background-default-tertiary-hover)] border-neutral-500 rounded max-md:px-7 hover:text-stone-50 hover:bg-zinc-700">
            Login
          </div></Link>
        </div>
      </div>

    
   ) 
  }

export default Header;