import React from "react";
import {ReactComponent as Logob} from "./imagens/logob.svg"
import {ReactComponent as LinkdeinIcone} from "./imagens/linkedin.svg"
import {ReactComponent as EmailIcone} from "./imagens/email.svg"
function Footer(){
    return(
    <footer className={`bg-dark`}>
      <div className={`flex flex-col justify-center py-px    max-md:mr-0.5 max-md:max-w-full`}>
        <div className={`flex flex-col justify-center items-start border border-solid border-light max-md:pr-5 max-md:max-w-full`}>
          <div className={`flex flex-col flex-wrap  items-start pt-5 pb-2 pr-8 pl-3.5 max-w-full  w-[1208px] max-md:pr-5`}>
            <div className={`flex gap-2 ml-5 text-base leading-6 whitespace-nowrap text-zinc-800 max-md:ml-2.5`}>
              
              <a href="mailto:vagner@algo.com"><EmailIcone
                className="size-8 aspect-square stroke-main fill-dark"
              /></a>
              <a  className={`relative top-[3px] size-8`} id="a" href="mailto:vagner@algo.com" >
                vagner@algo.com
              </a>

            </div>
            <div className={`flex gap-4 mt-8 ml-5 max-md:ml-2.5`}>

            
                  
              <a href="https://www.linkedin.com/in/pagotti/" target="_blank"><LinkdeinIcone
                className={`size-8 aspect-square stroke-main fill-main `}
              /></a>

            </div>
            
            <a href="http://www.vbmania.com.br/"><Logob
            
              
              className={`mt-9 max-w-full size-full stroke-main fill-main`}
            ></Logob></a>

          </div>
        </div>
      </div>
      </footer>

  
    )
}

export default Footer;