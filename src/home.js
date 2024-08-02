import * as React from "react";
import Cima from "./cima";
import Footer from "./footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    
    <div className="flex flex-col bg-[color:var(--sds-color-background-default-default)] text-base">

      <Cima></Cima>

      {/* titulo */}
      <div className="flex bg-fixed bg-cover saturate-0 bg-[url('./imagens/bulb.jpg')] relative overflow-hidden flex-col justify-center items-center px-16 py-20 text-8xl tracking-tight text-center backdrop-blur-[calc(var(--sds-size-blur-100] leading-[110.88px] min-h-[800px] text-[color:var(--sds-color-text-brand-on-brand-tertiary)] max-md:px-5 max-md:text-4xl
       "
      >
     {/*<img
        alt="ops"
        loading="lazy"
        src={require('./imagens/bulb.jpg')} // require pra img
        className="object-cover absolute inset-0 size-full bg-scroll"
        
      />*/}
      <div className="select-none saturate-100 relative justify-center place-content-center border-solid backdrop-blur-[3.46875px] border-[21px] border-black border-opacity-60 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Visual ReportX
      </div>
    </div>
      <div className="flex flex-col p-16 mt-30 w-full bg-[color:var(--sds-color-background-default-default)] max-md:px-5 max-md:mt-10 max-md:max-w-full min-h-[500px] pt-[100px] pb-[300px]">
        <div className="select-none text-2xl font-semibold tracking-tight leading-7 text-[color:var(--sds-color-text-default-default)] max-md:max-w-full text-left">
          Home
        </div>
        {/* main body */}
        <div className="flex-wrap content-between mt-24 gap-x-[var(--sds-size-space-1200)] max-md:mt-10 max-md:max-w-full text-start  ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 text-pretty">
            <div className="flex  flex-col w-[33%] max-md:ml-0 max-md:w-full ">
              <div className="flex-wrap grow content-start p-6 w-full border border-solid bg-[color:var(--sds-color-background-default-default)] border-neutral-700 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                  
                  <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full border-2 border-solid border-stone-900 border-opacity-60">
                   <button><img
                      loading="lazy"
                      src={require('./imagens/sobre.jpg')}
                      className="shrink-0 w-40 max-w-full  aspect-square  max-md:mt-10"
                    /></button>
                  </div>

                  <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full ">
                    <div className="flex flex-col self-stretch max-md:mt-10 ">
                     
                     <Link to="Link"> <div className="active:text-cyan-200 hover:text-stone-50 text-2xl font-semibold tracking-tight leading-7 text-[color:var(--sds-color-text-default-default)] text-start  ">
                        Sobre
                      </div></Link>

                      <div className="mt-2 text-base leading-6 text-[color:var(--sds-color-text-default-secondary)]">
                        Demonstração e tutorial de uso.
                        <br />
                        Relatório, configurações e visualização
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex-wrap grow content-start p-6 w-full border border-solid bg-[color:var(--sds-color-background-default-default)] border-neutral-700 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                 
                  <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                    <button><img
                      loading="lazy"
                      src={require('./imagens/icone_download_melhor.png')}
                      className="shrink-0 w-48 max-w-full aspect-square max-md:mt-10 "
                    /></button>
                  </div>

                  <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch max-md:mt-10">

                     <Link to="/download"> <div className="active:text-cyan-200 hover:text-stone-50 text-2xl font-semibold tracking-tight leading-7 text-[color:var(--sds-color-text-default-default)] text-start ">
                        Download
                      </div></Link>

                      <div className="mt-2 text-base leading-6 text-[color:var(--sds-color-text-default-secondary)] ">
                        Baixe aqui os componentes, visualizador. Contém
                        informações sobre o itens que serão instalados.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex-wrap grow content-start p-6 w-full border border-solid bg-[color:var(--sds-color-background-default-default)] border-neutral-700 rounded max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  
                  <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                    <button><img
                      loading="lazy"
                      src={require('./imagens/brasil_join.png')}
                      className="shrink-0 w-40 max-w-full border-2 border-solid aspect-square border-stone-900 border-opacity-60 max-md:mt-10"
                    /></button>
                  </div>

                  <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch max-md:mt-10">
                      
                      <button><div className="active:text-cyan-200 hover:text-stone-50 text-2xl font-semibold tracking-tight leading-7 text-[color:var(--sds-color-text-default-default)] text-start ">
                        Registro
                      </div></button>

                      <div className="mt-2 text-base leading-6 text-[color:var(--sds-color-text-default-secondary)]">
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
      <Footer></Footer>

    </div>
  );
}
export default Home;

