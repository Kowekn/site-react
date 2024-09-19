import * as React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from './imagens/logo_joinbit_visual_reportx.svg'
import * as consts from "./css_consts";
import { useState } from "react";







function Header() {



const updateTema = (item) => {
  
  document.body.classList = " "
  document.body.classList = item
  
}

const [Navbar, setNavbar] = useState(`flex flex-wrap gap-5  justify-between content-center px-7 py-4 w-full text-base leading-4 whitespace-nowrap  border-light
      border-solid bg-dark    text-main max-md:px-5 max-md:max-w-full sticky absolute top-0 ease-out duration-300 z-30`)

var prevScrollpos = window.scrollY;


window.onscroll = function() {
  
   var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos && currentScrollPos > 150) {
    setNavbar(`flex flex-wrap gap-5  justify-between content-center px-7 py-4 w-full text-base leading-4 whitespace-nowrap  border-light
      border-solid bg-dark    text-main max-md:px-5 max-md:max-w-full sticky absolute top-[-96px] ease-out duration-300 origin-top translate-y-[100%]  z-30`)

  }else if (prevScrollpos < currentScrollPos && currentScrollPos > 150){
    setNavbar(`flex flex-wrap gap-5  justify-between content-center px-7 py-4 w-full text-base leading-4 whitespace-nowrap  border-light
      border-solid bg-dark  text-main max-md:px-5 max-md:max-w-full sticky absolute top-0 ease-out duration-300 origin-top translate-y-[-100%] z-30`)
  }
  else{
    setNavbar(`flex flex-wrap gap-5  justify-between content-center px-7 py-4 w-full text-base leading-4 whitespace-nowrap  border-light
      border-solid bg-dark    text-main max-md:px-5 max-md:max-w-full sticky absolute top-0 ease-out duration-300  z-30`)
  }
  prevScrollpos = currentScrollPos; 
  
}

const options = [
  [`dark`, `Dark`],
  [`light`, `Light`],
  [`orange`, `Orange`],
  [`red`, `Red`],
  [``, ``]
]

const optionsCSS = `font-semibold`

const updatedOptions = options?.map((item, index) => {
  return (
    <option value={options[index][0]} className={optionsCSS}>{options[index][1]}</option>
  )
})

const selectCSS = `apearance-none p-2 border-2 border-light rounded-lg bg-light text-main font-semibold outline-accent focus:border-main`

    return(

      <div id="navbar" className={Navbar}> 
        {/* logo */}
        <Link to="/" ><div className=""><Logo
        className=" size-16 fill-main stroke-main bg-light rounded-full ">
        </Logo></div></Link>
        {/* header */}
        <div className={`flex gap-4 items-center my-auto max-md:flex-wrap`}>
        <p id="p" className="font-semibold"><select onChange={e => updateTema(e.target.value)}  className={selectCSS}>
        {updatedOptions}
        
        </select></p>
         <Link to="/download"><div id="p" className={`active:text-active hover:text-active hover:bg-light active:bg-hover justify-center self-stretch 
         p-2 bg-dark border border-solid rounded border-main 
         text-main`}>
            Download
          </div></Link>
          <Link to="/registro"><div id="p" className={`self-stretch my-auto hover:text-hover active:text-active`}>Registro</div></Link>
          <Link to="/telas"><div id="p" className={`self-stretch my-auto hover:text-hover active:text-active`}>Telas</div></Link>
          <Link to="/FAQ"><div id="p" className={`self-stretch my-auto hover:text-hover active:text-active`}>FAQ</div></Link>
          <Link to="/links"><div id="p" className={`self-stretch my-auto hover:text-hover active:text-active`}>Links</div></Link>
          <Link to="/opiniao" ><div id="p" className={`self-stretch my-auto hover:text-hover active:text-active`}>Opinião</div></Link>
          
          <Link to="/contato"><div id="p" className={`self-stretch my-auto hover:text-hover active:text-active`}>Contato</div></Link>
          
        </div>
      </div>

    
   ) 
  }

export default Header;