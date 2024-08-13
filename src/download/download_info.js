import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Link } from "react-router-dom";
import Download_side from "./download_side";





function Donwload_info(){
    return(
        <div >       
        <Header></Header>
        <div>
            <div className="flex flex-row mr-32 ml-32"> 
                {/* side bar  */}
                <Download_side></Download_side>

                {/* main */}
                <div className="flex flex-col basis-2/3 p-4 pt-4 bg-neutral-900 pb-32 pt-16 text-start">
                


                    <h3 id="h">Como obter ajuda do componente?</h3>
                    <p id="p">Você poderá obter ajuda a partir do próprio ambiente de programação do VB através da tecla F1 quando estiver com o foco em uma propriedade, método ou evento do compoenente.
                    No arquivo de ajuda também existem tópicos explicando o funcionamento do componente. Você pode acessar o arquivo de ajuda pelo ícone que será instalado no grupo de programas do Visual ReportX.
                    Caso esteja utilizando o Windows Vista ou superior e não conseguir abrir o arquivo de ajuda, instale o suporte a arquivos HLP que está disponível <a id="a" href="http://support.microsoft.com/kb/917607/pt-br">nessa página da Microsoft</a>.
                    </p>

                    <br></br>

                    <h3 id="h">O que é preciso distribuir com o aplicativo que usa o componente?</h3>
                    <p id="p">Quando for distribuir o seu aplicativo, você precisa incluir os arquivos ReportX.OCX e RepXHTM.DLL para que os relatórios rodem na máquina cliente. 
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

        <Footer></Footer>
        
        </div>
    )
}
export default Donwload_info;