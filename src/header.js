import * as React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from './imagens/logo_joinbit_visual_reportx.svg'
import * as consts from "./css_consts";
import { useState } from "react";
import {ReactComponent as Temas} from './imagens/temas.svg'






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



const ButtonTemasCSS = `border-[3px] border-main rounded-lg p-2 pl-4 content-start w-full
`
const RadioTemasCSS = ``


const TemasBotao = options.map((item, index)=>{
  
 return <div className={ButtonTemasCSS}>
 <input type="radio" id={"tema"+index} name="tema" onFocus={e => updateTema(options[index][0])} className={RadioTemasCSS} 
 ></input>
 <label for={"tema"+index}  onClick={e => updateTema(options[index][0]) }><Temas className={options[index][0]+ ` inline ` }></Temas></label></div>
})


const telatemascss = `relative bottom-0 left-20  w-full  z-50 
           hover:visible active:visible invisible`

const [TelaTemasCSS, setTelaTemasCSS] = useState(telatemascss)

function TrocaTema() {
  setTelaTemasCSS(telatemascss)
  if(TelaTemasCSS == telatemascss ){
    setTelaTemasCSS(telatemascss.replace(`invisible`, ``))
  }
  else{
    setTelaTemasCSS(telatemascss)
  }
          
}

    return(

      <div id="navbar" className={Navbar}> 
        {/* logo */}
        <Link to="/" ><div className=""><Logo
        className=" size-16 fill-main stroke-main bg-light rounded-full ">
        </Logo></div></Link>
        {/* header */}
        <div className={`flex gap-4 items-center my-auto max-md:flex-wrap`}>
        <div>
        <button  onClick={e => TrocaTema()} onMouseLeave={e => setTelaTemasCSS(telatemascss)} on>Temas</button>
        <div className={TelaTemasCSS}><div className={`absolute right-0   border-[6px] border-accent rounded-lg
        grid  w-max h-max bg-light p-4  grid-row-2 grid-cols-2 gap-4 hover:visible active:visible
           `}
          >
              {TemasBotao}
              </div>
          </div>
          </div>
         <Link to="/download"><div id="p" className={`active:text-active hover:text-hover hover:bg-light active:bg-dark justify-center self-stretch 
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