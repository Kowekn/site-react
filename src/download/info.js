import React from "react";

import { Link } from "react-router-dom";
import { BACKGROUND, FROM_BACKGROUND, TO_BACKGROUND, VIA_BACKGROUND, BORDER_BACKGROUND, BACKGROUND_LIGHT, 
    FROM_BACKGROUND_LIGHT, TO_BACKGROUND_LIGHT, VIA_BACKGROUND_LIGHT, BORDER_BACKGROUND_LIGHT, ACCENT_ACCENT, 
    TEXT_ACCENT, BORDER_ACCENT, OUTLINE_ACCENT, BG_ACCENT, TEXT_MAIN, BORDER_MAIN, OUTLINE_MAIN } from "../css_consts";



const TextoCSS = ``



function Info(){
    return(
        <div className={`basis-full bg-gradient-to-r ${FROM_BACKGROUND} ${TO_BACKGROUND_LIGHT} ${VIA_BACKGROUND}`} >       
        
        <div>
            <div className={``}> 
                {/* side bar  */}
                
                

                {/* main */}
                <div className={`flex flex-col   p-4  pl-8  pb-16  text-start`}>
                


                    <h3 id="h">Como obter ajuda do componente?</h3>
                    <p className={TextoCSS} id="p">Você poderá obter ajuda a partir do próprio ambiente de programação do VB através da tecla F1 quando estiver com o foco em uma propriedade, método ou evento do compoenente.
                    No arquivo de ajuda também existem tópicos explicando o funcionamento do componente. Você pode acessar o arquivo de ajuda pelo ícone que será instalado no grupo de programas do Visual ReportX.
                    Caso esteja utilizando o Windows Vista ou superior e não conseguir abrir o arquivo de ajuda, instale o suporte a arquivos HLP que está disponível <a id="a" href="http://support.microsoft.com/kb/917607/pt-br">nessa página da Microsoft</a>.
                    </p>

                    <br></br>

                    <h3 id="h">O que é preciso distribuir com o aplicativo que usa o componente?</h3>
                    <p className={TextoCSS} id="p">Quando for distribuir o seu aplicativo, você precisa incluir os arquivos ReportX.OCX e RepXHTM.DLL para que os relatórios rodem na máquina cliente. 
                    Se quiser que o cliente visualize os arquivos .VRX, você deve distribuir também o arquivo vrxFR.EXE. 
                    Lembre-se que os arquivos OCX e DLL, além de copiados, devem ser registrados no sistema operacional. 
                    Se você não tiver um instalador de aplicativos, eu recomendo o <a id="a" href="http://www.innosetup.org/">Inno Setup</a> que é um ótimo gerador.
                    </p>
                    <br></br>
                    <h3 id="h" >links relacionados</h3>
                       <a id="a" href="http://support.microsoft.com/kb/290887/pt-br"> Artigo da Microsoft sobre os arquivos de runtime do VB6</a>
                       <a id="a" href="http://www.innosetup.org/"> Inno Setup - Gerador de Instalações</a>
                       <a id="a" href="http://www.istool.org/"> ISTool para Inno Setup - Gerador de Scripts para o Inno Setup</a>


                </div>
                
            </div>
        </div>

        
        
        </div>
    )
}
export default Info;