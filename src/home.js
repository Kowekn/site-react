import * as React from "react";

import { Link } from "react-router-dom";
import GoToTop from "./go_to_top";
import {ReactComponent as IconeDownload} from  './imagens/icone_download_melhor.svg';
import {ReactComponent as BrasilEscuro} from "./imagens/brasil_escuro.svg";
import {ReactComponent as IconeTelas} from "./imagens/icone_telas.svg";
import {ReactComponent as Bulb} from "./imagens/bulb4.svg";

 

const itensCSS = [
  `flex  flex-col w-[33%] max-md:ml-0 max-md:w-full `,

  `flex-wrap grow content-start p-6 w-full border border-solid  bg-transparent
              border-light rounded max-md:px-5 max-md:mt-10 max-md:max-w-full`,

  `flex gap-5 max-md:flex-col max-md:gap-0 `,

  `flex flex-col  max-md:ml-0 max-md:w-full  border-solid border-light border-opacity-60`,

  ` size-48 max-w-full bg-transparent aspect-square max-md:mt-10 relative bottom-3  border-2 border-solid 
                      border-light border-opacity-60 fill-main stroke-main`,

  `flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full  `,

  `flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full  `,

  `active:text-neutral-400 hover:text-stone-50 text-2xl font-semibold tracking-tight 
                     leading-7 text-maintext-start  `,

  `mt-2 text-base leading-6 text-main `,

]

const registros = [
  ["/telas", <IconeTelas className={itensCSS[4]}/>, "Telas" , "Demonstração e tutorial de uso. Relatório, configurações e visualização"],
  ["/download", <IconeDownload className={itensCSS[4]}/>, "Download", "Baixe aqui os componentes, visualizador. Contém informações sobre o itens que serão instalados." ],
  ["/registro", <BrasilEscuro className={itensCSS[4]}/>, "Registro", "Registre seus componentes por região."]

]
const updatedRegistros = registros?.map((item, index) =>{

  return <div className={itensCSS[0]}>
              <div className={itensCSS[1]}>
                <div className={itensCSS[2]}>
                  
                  <div className={itensCSS[3]}>
                   <Link tabindex="-1" to={registros[index][0]}>{registros[index][1]}
                      
                   </Link>
                  </div>

                  <div className={itensCSS[5]}>
                    <div className={itensCSS[6]}>
                     
                     <Link to={registros[index][0]}> <div id="h" className={itensCSS[7]}>
                     {registros[index][2]}
                      </div></Link>

                      <div id="p" className={itensCSS[8]}>
                      {registros[index][3]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
})



function Home() {
  return (
    
    <div className={`flex flex-col text-base `}>
      
      

      {/* titulo */}
      <div className={`flex bg-fixed  w-full min-w-[20%]    
      relative overflow-hidden flex-col justify-center items-center px-16 py-20 text-8xl tracking-tight text-center 
      backdrop-blur-[calc(var(--sds-size-blur-100] leading-[110.88px] min-h-[800px] text-main
      max-md:px-5 max-md:text-4xl bg-gradient-to-r from-light to-light via-dark
       `}
      >
      <div className={` relative z-0 `}>
     <Bulb
     className={`fill-light mix-color-dodge aspect-video w-[100%] stroke-main z-10 place-self-center bg-transparent absolute top-[-275%] left-0`}
     ></Bulb>
      <div id="t" className={`text-main z-20 top-0 left-0 border-dark border-[21px]   justify-center border-solid border-opacity-60 
      bg-transparent   `}>
        <div className={`tracking-wide `}> Visual ReportX</div>
       
        
      </div>
     
      
      </div>
    </div>
      <div className={`flex flex-col p-16 mt-30 w-full  bg-gradient-to-r from-light to-light via-dark   
      max-md:px-5 max-md:mt-10 max-md:max-w-full min-h-[500px] pt-[100px] pb-[300px]`}>
        <div id="h" className={`select-none pl-2 text-2xl font-semibold tracking-tight leading-7 text-main
        max-md:max-w-full text-left`}>
          Home
        </div>
        {/* main body */}
        <div className={`flex-wrap content-between mt-24 gap-x-[var(--sds-size-space-1200)] max-md:mt-10 max-md:max-w-full text-start  `}>
          <div className={`flex gap-5 max-md:flex-col max-md:gap-0 text-pretty`}>
            
            {updatedRegistros}
            
            
          </div>
        </div>
      </div>
      
      {/*footer */}
      
      <GoToTop/>
    </div>
  );
}
export default Home;

