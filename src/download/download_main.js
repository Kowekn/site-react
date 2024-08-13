import React from "react";
import Header from "../header";
import Footer from "../footer";
import ReleaseNotes from "../apps/releasenotes.pdf";
import ReportXMain from "../apps/repx5101_rt.exe";
import Virtualizador from "../apps/repxr301_rt.exe";

import Download_side from "./download_side";
import Virtualizador14 from "../apps/repx492_rt.exe";
import Virtualizador13 from "../apps/repx375.exe";
import Virtualizador12 from "../apps/repx261.exe";


const numbers = ["ReportX.OCX - Arquivo que contém o componente.",
    "RepXHTM.DLL - DLL necessária para exportação dos relatórios para HTML, XLS e JPG.",
    "ReportX.CHM - Arquivo de ajuda do componente.",
    "vrxFR.EXE - Aplicativo para visualização de arquivos .VRX gerados pelo componente.",
    "ReportX.Dep, vrxFR.Dep - São arquivos de dependência que podem ser usados pelos gerador de instalação do Visual Basic como o Setup Wizard."];

const updatedNums = numbers.map((number)=>{
    return <li id="li">{number}</li>;
});









function Download_main() {
    return(
        <div >       
        <Header></Header>
        <div>
            <div className="flex flex-row mr-32 ml-32"> 
                {/* side bar  */}
                <Download_side></Download_side>

                {/* main */}
                <div className="flex flex-col basis-2/3 p-4 pt-4 bg-neutral-900 pb-32 pt-16">
                <div className="self-center">

                {/* tabela downloads */}
                <table className="w-[800px] self-center table-fixed border border-collapse border-spacing-2  border-stone-500 bg-[#0a0d0f73] ">

                    <thead>
                        <tr>
                            <th className="border border-gray-800 bg-gray-900">
                            Componente - Atualizado em 8-3-2015
                            </th>
                            
                            <th className="border border-gray-800 bg-gray-900 w-[25%]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="border border-gray-800 bg-gray-800">
                            Visual ReportX 1.5.101 - com RunTime do VB6 - 1.9MB
                                </td>

                            <td className="border border-gray-800 bg-gray-800">
                                <a  href={ReportXMain} className="active:text-cyan-200 hover:text-stone-50" download="Visual ReportX 1.5.101.exe">
                                    ↵</a>     
                                </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-800 bg-gray-700">
                            Release Notes 1.5.101 (PDF)
                                </td>

                            <td className="border border-gray-800 bg-gray-700 ">
                                <a href={ReleaseNotes} target="_blank" 
                                 className="active:text-cyan-200 hover:text-stone-50">
                                    ↵</a>
                                </td>
                        </tr>
                    </tbody>


                    <thead>
                        <th className="border border-gray-800 bg-gray-900">
                            Visualizador de arquivos .vrx
                            </th>

                        <td className="border border-gray-800 bg-gray-900">
                            </td>
                    </thead>
                    <tbody>

                        <td className="border border-gray-800 bg-gray-800">
                            VRX Reader 3.0.1 com RunTime do VB6 - 1.1MB
                            </td>

                        <td className="border border-gray-800 bg-gray-800">
                            <a  href={Virtualizador} className="active:text-cyan-200 hover:text-stone-50" download="VRX Reader 3.0.1.exe">
                                ↵</a> 
                            </td>
                    </tbody>

                </table>
                </div>

                {/* info */}
                <div className="pt-4 text-start "> 
                    <h3 id="h">Instalação</h3>
                    <p id="p">Depois de fazer o download, execute o arquivo e o instalador irá copiar os arquivos necessários para o funcionamento do componente. 
                    Se você estiver utilizando o VB5, instale o pacote com o RunTime do VB6-SP6. 
                    Opcionamente você pode obter o RunTime do VB6 diretamente da Microsoft pelo arquivo <a id="a" href="http://www.microsoft.com/downloads/details.aspx?FamilyId=7B9BA261-7A9C-43E7-9117-F673077FFB3C">VBRun60sp6.EXE</a>.
                    </p>
                    <br></br>
                    <p>O pacote irá instalar os seguintes arquivos na sua maquina:</p>

                    <ul id="ul" >
                    {updatedNums}
                    </ul>

                    <p id="p">Além desses arquivos podem ser instalados arquivos fontes de exemplo para uso com o DAO, ADO e RDO. 
                    O instaladr já inclui o visualizador de arquivos, portanto você não precisar fazer o download dos dois. 
                    O instalador do Visualizador de Arquivos serve para você distribuir aos clientes do seu aplicativo.
                    </p>

                    

                </div>
                    <div className="self-center">  
                    {/* tabela anteriores */}
                    <table className="w-[800px] mt-4 self-center text-center table-fixed border border-collapse border-spacing-2  border-stone-500 bg-[#0a0d0f73] ">

                        <thead>
                            <tr>
                                <th className="border border-gray-800 bg-gray-900">
                                Versões anteriores
                                </th>
                                
                                <th className="border border-gray-800 bg-gray-900 w-[25%]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="border border-gray-800 bg-gray-800">
                                Inteface 1.4 - Visual ReportX 1.4.92 - 1.8MB
                                    </td>

                                <td className="border border-gray-800 bg-gray-800">
                                    <a  href={Virtualizador14} className="active:text-cyan-200 hover:text-stone-50" download="Inteface 1.4 - Visual ReportX 1.4.92.exe">
                                        ↵</a>     
                                    </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-800 bg-gray-700">
                                Inteface 1.3 - Visual ReportX 1.3.75 - 1.2MB
                                    </td>

                                <td className="border border-gray-800 bg-gray-700 ">
                                    <a href={Virtualizador13} download="Inteface 1.3 - Visual ReportX 1.3.75.exe" 
                                    className="active:text-cyan-200 hover:text-stone-50">
                                        ↵</a>
                                    </td>
                            
                            </tr>
                            <tr>
                                <td className="border border-gray-800 bg-gray-800">
                                    Inteface 1.2 - Visual ReportX 1.2.61 - 1.0MB
                                    </td>

                                <td className="border border-gray-800 bg-gray-800">
                                    <a  href={Virtualizador12} className="active:text-cyan-200 hover:text-stone-50" download="Inteface 1.2 - Visual ReportX 1.2.61.exe">
                                        ↵</a> 
                                    </td>
                             </tr>
                        </tbody>

                    </table>
                    </div> 

                </div>

            </div>
        </div>

        <Footer></Footer>
        </div>
    )
}

export default Download_main;
