import React from "react";
import Cima from "./cima";
import Footer from "./footer";
import Head from "./head";
const numbers = ["ReportX.OCX - Arquivo que contém o componente.",
    "RepXHTM.DLL - DLL necessária para exportação dos relatórios para HTML, XLS e JPG.",
    "ReportX.CHM - Arquivo de ajuda do componente.",
    "vrxFR.EXE - Aplicativo para visualização de arquivos .VRX gerados pelo componente.",
    "ReportX.Dep, vrxFR.Dep - São arquivos de dependência que podem ser usados pelos gerador de instalação do Visual Basic como o Setup Wizard."];

const updatedNums = numbers.map((number)=>{
    return <li id="li">{number}</li>;
});

const topicos = [["topico 1", "href1"],
["topico 2", "href2"],
["topico 3", "href3"]
]

const insertTopicos = topicos.map((item, index)=>{
    return <li className="-ml-px pl-4 border-l border-transparent hover:border-slate-200"><a className="block" 
    href={topicos[index][1]}>{topicos[index][0]}</a></li>
});

function Download() {
    return(
        <div >
        <Head></Head>
        <Cima></Cima>
        <div>
            <div className="flex flex-row mr-32 ml-32"> 
                {/* side bar  */}
                <div className="flex basis-1/4 h-auto bg-gray-800 pr-4 pl-4 pb-32 pt-16 flex-col ">

                    <div className=""> 
                    <input type="text" placeholder="Pesquisar" className="text-inherit bg-gray-800 focus:outline-none -mt-4"></input>
                    </div>
                    
                    <ul id="ul" className="space-y-4 border-l border-slate-500 text-start">
                        {insertTopicos}
                    </ul>

                </div>

                {/* main */}
                <div className="flex flex-col basis-2/3 p-4 pt-4 bg-gray-900 pb-32 pt-16">
                <div className="self-center">

                {/* tabela downloads */}
                <table className="w-[800px] self-center table-fixed  border border-collapse border-spacing-2  border-stone-500 bg-[#0a0d0f73] ">

                    <thead>
                        <tr>
                            <th className="border border-slate-800 bg-[#06090fa1]">
                            Componente - Atualizado em 8-3-2015
                            </th>
                            
                            <th className="border border-slate-800 bg-[#06090fa1] w-[25%]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="border border-slate-800 bg-[#0f1624a1]">
                            Visual ReportX 1.5.101 - com RunTime do VB6 - 1.9MB
                                </td>

                            <td className="border border-slate-800 bg-[#0f1624a1]">
                                <button className="active:text-cyan-200 hover:text-stone-50">
                                    ↵</button>
                                </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-800 bg-[#131c30a1]">
                            Release Notes 1.5.101 (PDF)
                                </td>

                            <td className="border border-slate-800 bg-[#131c30a1]">
                                <button className="active:text-cyan-200 hover:text-stone-50">
                                    ↵</button>
                                </td>
                        </tr>
                    </tbody>


                    <thead>
                        <th className="border border-slate-800 bg-[#06090fa1]">
                            Visualizador de arquivos .vrx
                            </th>

                        <td className="border border-slate-800 bg-[#06090fa1]">
                            </td>
                    </thead>
                    <tbody>

                        <td className="border border-slate-800 bg-[#0f1624a1]">
                            VRX Reader 3.0.1 com RunTime do VB6 - 1.1MB
                            </td>

                        <td className="border border-slate-800 bg-[#0f1624a1]">
                            <button className="active:text-cyan-200 hover:text-stone-50">
                                ↵</button> 
                            </td>
                    </tbody>

                </table>
                </div>

                {/* info */}
                <div className=" text-start "> 
                    <h3 id="h">Instalação</h3>
                    <p id="p">Depois de fazer o download, execute o arquivo e o instalador irá copiar os arquivos necessários para o funcionamento do componente. Se você estiver utilizando o VB5, instale o pacote com o RunTime do VB6-SP6. Opcionamente você pode obter o RunTime do VB6 diretamente da Microsoft pelo arquivo VBRun60sp6.EXE.

                    O pacote irá instalar os seguintes arquivos na sua maquina:</p>

                    <ul id="ul" >
                    {updatedNums}
                    </ul>

                    <p id="p">Além desses arquivos podem ser instalados arquivos fontes de exemplo para uso com o DAO, ADO e RDO. O instaladr já inclui o visualizador de arquivos, portanto você não precisar fazer o download dos dois. O instalador do Visualizador de Arquivos serve para você distribuir aos clientes do seu aplicativo.
                    </p>

                    <br></br>

                    <h3 id="h">Como obter ajuda do componente?</h3>
                    <p id="p">Você poderá obter ajuda a partir do próprio ambiente de programação do VB através da tecla F1 quando estiver com o foco em uma propriedade, método ou evento do compoenente.
                    No arquivo de ajuda também existem tópicos explicando o funcionamento do componente. Você pode acessar o arquivo de ajuda pelo ícone que será instalado no grupo de programas do Visual ReportX.
                    Caso esteja utilizando o Windows Vista ou superior e não conseguir abrir o arquivo de ajuda, instale o suporte a arquivos HLP que está disponível nessa página da Microsoft.
                    </p>

                    <br></br>

                    <h3 id="h">O que é preciso distribuir com o aplicativo que usa o componente?</h3>
                    <p id="p">Quando for distribuir o seu aplicativo, você precisa incluir os arquivos ReportX.OCX e RepXHTM.DLL para que os relatórios rodem na máquina cliente. Se quiser que o cliente visualize os arquivos .VRX, você deve distribuir também o arquivo vrxFR.EXE. Lembre-se que os arquivos OCX e DLL, além de copiados, devem ser registrados no sistema operacional. Se você não tiver um instalador de aplicativos, eu recomendo o Inno Setup que é um ótimo gerador.
                    </p>   
                </div> 

                


                </div>

            </div>
        </div>

        <Footer></Footer>
        </div>
    )
}

export default Download;
