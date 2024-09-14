import React from "react";
import ReleaseNotes from "../apps/releasenotes.pdf";
import ReportXMain from "../apps/repx5101_rt.exe";
import Virtualizador from "../apps/repxr301_rt.exe";
import Virtualizador14 from "../apps/repx492_rt.exe";
import Virtualizador13 from "../apps/repx375.exe";
import Virtualizador12 from "../apps/repx261.exe";
import { BACKGROUND, FROM_BACKGROUND, TO_BACKGROUND, VIA_BACKGROUND, BORDER_BACKGROUND, BACKGROUND_LIGHT, 
    FROM_BACKGROUND_LIGHT, TO_BACKGROUND_LIGHT, VIA_BACKGROUND_LIGHT, BORDER_BACKGROUND_LIGHT, ACCENT_ACCENT, 
    TEXT_ACCENT, BORDER_ACCENT, OUTLINE_ACCENT, BG_ACCENT, TEXT_MAIN, BORDER_MAIN, OUTLINE_MAIN } from "../css_consts";


const numbers = ["ReportX.OCX - Arquivo que contém o componente.",
    "RepXHTM.DLL - DLL necessária para exportação dos relatórios para HTML, XLS e JPG.",
    "ReportX.CHM - Arquivo de ajuda do componente.",
    "vrxFR.EXE - Aplicativo para visualização de arquivos .VRX gerados pelo componente.",
    "ReportX.Dep, vrxFR.Dep - São arquivos de dependência que podem ser usados pelos gerador de instalação do Visual Basic como o Setup Wizard."];

const updatedNums = numbers.map((number)=>{
    return <li id="li" class="p">{number}</li>;
});


const ItensTabelaAtualizada1 = [["Componente - Atualizado em 8-3-2015",""],
["Visual ReportX 1.5.101 - com RunTime do VB6 - 1.9MB","↵", ReportXMain, "Visual ReportX 1.5.101.exe"],
["Release Notes 1.5.101 (PDF)","↵", ReleaseNotes, ""]];

const ItensTabelaAtualizada2 = [["Visualizador de arquivos .vrx",""],
["VRX Reader 3.0.1 com RunTime do VB6 - 1.1MB","↵", Virtualizador, "VRX Reader 3.0.1.exe"]
];
 
const ItensTabelaAnteriores = [["Versões anteriores","" ],
["Inteface 1.4 - Visual ReportX 1.4.92 - 1.8MB","↵",Virtualizador14, "Inteface 1.4 - Visual ReportX 1.4.92.exe"],
["Inteface 1.3 - Visual ReportX 1.3.75 - 1.2MB","↵",Virtualizador13,"Inteface 1.3 - Visual ReportX 1.3.75.exe"],
["Inteface 1.2 - Visual ReportX 1.2.61 - 1.0MB","↵",Virtualizador12,"Inteface 1.2 - Visual ReportX 1.2.61.exe"]]




const TableCSS =    `w-[600px] self-center  mb-4 bg-gradient-to-t ${FROM_BACKGROUND_LIGHT} ${TO_BACKGROUND} ${VIA_BACKGROUND_LIGHT}
                    border border-collapse border-spacing-2   ${BACKGROUND_LIGHT} `; 

const TheadCSS = `border ${BORDER_BACKGROUND} ${BACKGROUND}  `;

const TbodyCSS = `border-2 border-transparent  pl-2 bg-inherit `;
const TanchorCSS = `active:text-cyan-200 hover:text-stone-50`;

const download = (classe, enter, href, titulo) => {
    return <a id="a" className={classe} href={href} download={titulo}>{enter}</a> 
}

const pdf = (classe, enter, href) => {
    return <a id="a" className={classe} href={href} target="_blank" >{enter}</a>
}

const tabela = (itens) =>{ return itens.map((item, index) =>{
    if(itens[index][1]!="↵"){
        
        return <thead>
            <tr>
                <th className={TheadCSS}><p id="p">{itens[index][0]}</p></th>
                <th className={TheadCSS}></th>
            </tr>
        </thead>
        }
        
    
    else{
        if(itens[index][3]!=""){
        return <tbody>
            <tr>
                <td className={TbodyCSS}><p id="p">{itens[index][0]}</p></td>
                <td className={TbodyCSS}>{download(TanchorCSS,itens[index][1], itens[index][2], itens[index][3])}</td>
            </tr>
        </tbody>
    }else {
        return <tbody>
        <tr>
            <td className={TbodyCSS}><p id="p">{itens[index][0]}</p></td>
            <td className={TbodyCSS}>{pdf(TanchorCSS,itens[index][1], itens[index][2])}</td>
        </tr>
    </tbody>
    }
}
})}

const TextoCSS = ``


function Main() {
    return(
        <div className={`basis-full bg-gradient-to-r ${FROM_BACKGROUND} ${TO_BACKGROUND_LIGHT} ${VIA_BACKGROUND} `} >       
        
        <div>
            <div className={``}> 
                {/* side bar  */}
                
                

                {/* main */}
                <div className={`flex flex-col  p-4 pl-8  pb-16 `}>
                <div className={`self-center `}>

                {/* tabela downloads */}
                <table className={TableCSS}>

                    {tabela(ItensTabelaAtualizada1)}
                </table>
                <table className={TableCSS}>
                    {tabela(ItensTabelaAtualizada2)}
                </table>
                </div>

                {/* info */}
                <div className={`pt-4 text-start `}> 
                    <h3 id="h">Instalação</h3>
                    <p className={TextoCSS} id="p">Depois de fazer o download, execute o arquivo e o instalador irá copiar os arquivos necessários para o funcionamento do componente. 
                    Se você estiver utilizando o VB5, instale o pacote com o RunTime do VB6-SP6. 
                    Opcionamente você pode obter o RunTime do VB6 diretamente da Microsoft pelo arquivo <a id="a" href="http://www.microsoft.com/downloads/details.aspx?FamilyId=7B9BA261-7A9C-43E7-9117-F673077FFB3C">VBRun60sp6.EXE</a>.
                    </p>
                    <br></br>
                    <p className={TextoCSS} id="p">O pacote irá instalar os seguintes arquivos na sua maquina:</p>

                    <ul id="ul" >
                    {updatedNums}
                    </ul>

                    <p className={TextoCSS} id="p">Além desses arquivos podem ser instalados arquivos fontes de exemplo para uso com o DAO, ADO e RDO. 
                    O instaladr já inclui o visualizador de arquivos, portanto você não precisar fazer o download dos dois. 
                    O instalador do Visualizador de Arquivos serve para você distribuir aos clientes do seu aplicativo.
                    </p>

                    

                </div>
                    <div className={`self-center pt-4`}>  
                    {/* tabela anteriores */}
                    <table className={TableCSS}>

                       {tabela(ItensTabelaAnteriores)}

                    </table>
                    </div> 

                </div>
                
                
            </div>
        </div>

        
        </div>
    )
}

export default Main;
