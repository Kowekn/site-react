import * as React from "react";
import { Link } from "react-router-dom";
import Home from "./home";
import Download from "./download";

function Cima() {
    return(

      <div className="flex flex-wrap gap-5  justify-between content-center px-7 py-4 w-full text-base leading-4 whitespace-nowrap border-b border-solid bg-[color:var(--sds-color-background-neutral-tertiary)] border-neutral-800 text-[color:var(--sds-color-text-default-default)] max-md:px-5 max-md:max-w-full">
        {/* logo */}
        <Link to="/"><img
          loading="lazy"
          srcSet={require('./imagens/logo_joinbit_visual_reportx.png')}
          className="shrink-0 aspect-[1.04] w-[70px] rounded-full"
        /></Link>
        {/* header */}
        <div className="flex gap-4 items-center my-auto max-md:flex-wrap">
         <Link to="/download"><div className="active:text-cyan-200 hover:text-stone-50 hover:bg-zinc-700 justify-center self-stretch p-2 bg-[color:var(--sds-color-background-neutral-secondary-hover)] border border-solid rounded border-neutral-500 text-[color:var(--sds-color-text-brand-on-brand-secondary)]">
            Download
          </div></Link>
          <Link><div className="self-stretch my-auto hover:text-stone-50 active:text-cyan-200">Sobre</div></Link>
          <Link><div className="self-stretch my-auto hover:text-stone-50 active:text-cyan-200">FAQ</div></Link>
          <Link><div className="self-stretch my-auto hover:text-stone-50 active:text-cyan-200">Opiniões</div></Link>
          <Link><div className="self-stretch my-auto hover:text-stone-50 active:text-cyan-200">Contato</div></Link>
         <Link><div className="active:text-cyan-200 flex-1 justify-center self-stretch p-2 border border-solid bg-[color:var(--sds-color-background-default-tertiary-hover)] border-neutral-500 rounded max-md:px-7 hover:text-stone-50 hover:bg-zinc-700">
            Login
          </div></Link>
        </div>
      </div>

    
   ) 
  }

export default Cima;