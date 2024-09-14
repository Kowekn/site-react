import * as React from "react";

import { Link } from "react-router-dom";
import GoToTop from "./go_to_top";
import {ReactComponent as IconeDownload} from  './imagens/icone_download_melhor.svg';
import {ReactComponent as BrasilEscuro} from "./imagens/brasil_escuro.svg";
import {ReactComponent as IconeTelas} from "./imagens/icone_telas.svg";
import { BACKGROUND, FROM_BACKGROUND, TO_BACKGROUND, VIA_BACKGROUND, BORDER_BACKGROUND, BACKGROUND_LIGHT, 
  FROM_BACKGROUND_LIGHT, TO_BACKGROUND_LIGHT, VIA_BACKGROUND_LIGHT, BORDER_BACKGROUND_LIGHT, ACCENT_ACCENT, 
  TEXT_ACCENT, BORDER_ACCENT, OUTLINE_ACCENT, TEXT_MAIN, BORDER_MAIN, OUTLINE_MAIN } from "./css_consts";

function Home() {
  return (
    
    <div className={`flex flex-col ${BACKGROUND} text-base `}>

      

      {/* titulo */}
      <div className={`flex bg-fixed bg-cover w-full min-w-[20%] saturate-[1.25] contrast-[1.2] hue-rotate-[202deg]  bg-[url('./imagens/bulb.jpg')]  
      relative overflow-hidden flex-col justify-center items-center px-16 py-20 text-8xl tracking-tight text-center 
      backdrop-blur-[calc(var(--sds-size-blur-100] leading-[110.88px] min-h-[800px] ${TEXT_MAIN}
      max-md:px-5 max-md:text-4xl
       `}
      >
     {/*<img
        alt="ops"
        loading="lazy"
        src={require('./imagens/bulb.jpg')} // require pra img
        className="object-cover absolute inset-0 size-full bg-scroll"
        
      />*/}
      <div id="t" className={`select-none saturate-100 relative justify-center place-content-center border-solid backdrop-blur-[3.46875px] 
      border-[21px] border-black border-opacity-60 max-md:mt-10 max-md:max-w-full max-md:text-4xl`}>
        Visual ReportX
      </div>
    </div>
      <div className={`flex flex-col p-16 mt-30 w-full bg-gradient-to-b ${FROM_BACKGROUND} ${TO_BACKGROUND}   
      max-md:px-5 max-md:mt-10 max-md:max-w-full min-h-[500px] pt-[100px] pb-[300px]`}>
        <div id="h" className={`select-none pl-2 text-2xl font-semibold tracking-tight leading-7 ${TEXT_MAIN}
        max-md:max-w-full text-left`}>
          Home
        </div>
        {/* main body */}
        <div className={`flex-wrap content-between mt-24 gap-x-[var(--sds-size-space-1200)] max-md:mt-10 max-md:max-w-full text-start  `}>
          <div className={`flex gap-5 max-md:flex-col max-md:gap-0 text-pretty`}>
            <div className={`flex  flex-col w-[33%] max-md:ml-0 max-md:w-full `}>
              <div className={`flex-wrap grow content-start p-6 w-full border border-solid ${BACKGROUND} 
              ${BORDER_BACKGROUND_LIGHT} rounded max-md:px-5 max-md:mt-10 max-md:max-w-full`}>
                <div className={`flex gap-5 max-md:flex-col max-md:gap-0 `}>
                  
                  <div className={`flex flex-col  max-md:ml-0 max-md:w-full  border-solid ${BORDER_BACKGROUND_LIGHT} border-opacity-60`}>
                   <Link tabindex="-1" to="/telas"><IconeTelas
                      className={` size-48 max-w-full bg-transparent aspect-square max-md:mt-10 relative bottom-3  border-2 border-solid 
                      ${BORDER_BACKGROUND_LIGHT} border-opacity-60`}
                   ></IconeTelas></Link>
                  </div>

                  <div className={`flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full  `}>
                    <div className={`flex flex-col self-stretch max-md:mt-10 `}>
                     
                     <Link to="/telas"> <div id="h" className={`active:text-neutral-400 hover:text-stone-50 text-2xl font-semibold tracking-tight 
                     leading-7 ${TEXT_MAIN}text-start  `}>
                        Telas
                      </div></Link>

                      <div id="p" className={`mt-2 text-base leading-6 ${TEXT_MAIN}`}>
                        Demonstração e tutorial de uso.
                        
                        Relatório, configurações e visualização
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full`}>
              <div className={`flex-wrap grow content-start p-6 w-full border border-solid ${BACKGROUND} 
              ${BORDER_BACKGROUND_LIGHT} rounded max-md:px-5 max-md:mt-10 max-md:max-w-full`}>
                <div className={`flex gap-5 max-md:flex-col max-md:gap-0`}>
                 
                  <div className={`flex flex-col w-[40%] max-md:ml-0 max-md:w-full`}>
                    <Link tabindex="-1" to="/download"><IconeDownload  
                      className={`size-48 max-w-full bg-transparent aspect-square max-md:mt-10 relative bottom-3  border-2 border-solid 
                      ${BORDER_BACKGROUND_LIGHT} border-opacity-60`}
                    ></IconeDownload></Link>
                  </div>

                  <div className={`flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full`}>
                    <div className={`flex flex-col self-stretch max-md:mt-10`}>

                     <Link to="/download"> <div id="h" className={`active:text-neutral-400 hover:text-stone-50 text-2xl font-semibold tracking-tight 
                     leading-7 ${TEXT_MAIN} text-start `}>
                        Download
                      </div></Link>

                      <div id="p" className={`mt-2 text-base leading-6 ${TEXT_MAIN}`}>
                        Baixe aqui os componentes, visualizador. Contém
                        informações sobre o itens que serão instalados.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full`}>
              <div className={`flex-wrap grow content-start p-6 w-full border border-solid ${BACKGROUND} 
              ${BORDER_BACKGROUND_LIGHT} rounded max-md:px-5 max-md:mt-10 max-md:max-w-full`}>
                <div className={`flex gap-5 max-md:flex-col max-md:gap-0`}>
                  
                  <div className={`flex flex-col w-[37%] max-md:ml-0 max-md:w-full bg-neutral-850`}>
                    <Link tabindex="-1" to="/registro"><BrasilEscuro

                      className={`size-48 max-w-full border-2 border-solid aspect-square ${BORDER_BACKGROUND_LIGHT} border-opacity-60 max-md:mt-10`}
                    ></BrasilEscuro></Link>
                  </div>

                  <div className={`flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full`}>
                    <div className={`flex flex-col self-stretch max-md:mt-10`}>
                      
                      <Link to="/registro"><div id="h" className={`active:text-neutral-400 hover:text-stone-50 text-2xl font-semibold tracking-tight 
                      leading-7 ${TEXT_MAIN} text-start `}>
                        Registro
                      </div></Link>

                      <div id="p" className={`mt-2 text-base leading-6 ${TEXT_MAIN}`}>
                        Registre seus componentes por região.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/*footer */}
      
      <GoToTop/>
    </div>
  );
}
export default Home;

