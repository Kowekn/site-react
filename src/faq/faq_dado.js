import React, { useState } from "react";
import * as consts from "../css_consts"
import Side_div from "../side_div";
import {ReactComponent as Bulb} from "../imagens/bulb4.svg"
import { Link } from "react-router-dom";
import Virtualizador13 from "../apps/repx375.exe";
import Virtualizador12 from "../apps/repx261.exe";


const perguntas = 
[   
 /*1 */   
 [`Qual a diferença entre a versão sem registro e a versão registrada?`,
    <p id="p">A diferença está no uso de algumas características. 
    Na versão sem registro o usuário não poderá usar as seções de grupo, a seção de Título, Total e Sumário. 
    Também não poderá usar a propriedade NumeroColunas para fazer relatórios colunados como etiquetas, por exemplo. 
    O restante das funcionalidades são idênticas, tanto na parte do visualizador, como para gravação de arquivos VRX ou HTML. </p>],
 /*2 */   
 [`É necessário adquirir uma licença para cada usuário que for usar o componente?`,
    <p id="p">A licença de uso do Visual ReportX é do tipo "Runtime Royalty Free", ou seja, todos os arquivos binários do componente 
    (Arquivos OCX e DLL) podem ser distribuídos para quantos usuários forem necessários sem nenhum custo. O registro, 
    quando realizado, precisa ser feito apenas nas máquinas de desenvolvimento. </p>],
 /*3 */   
 [`O Visual ReportX pode ser usado com o VB5?`,
    <p id="p">Sim. Basta instalar os arquivos de RunTime do VB6-SP6 que podem ser baixados no site da Microsoft. 
    Consulte o artigo <a id="a" href="http://support.microsoft.com/kb/290887/pt-br" target="_blank">KB290887</a> e veja 
    como baixar os arquivos de runtime.  </p>],
 /*4 */   
 [`O Visual ReportX pode ser usado com o VB.NET?`,
    <p id="p">Não. O VB.NET é uma nova plataforma de desenvolvimento. 
    Infelizmente ela é incompatível com alguns componentes desenvolvidos para as versões anteriores do VB 
    porque a tecnologia ActiveX não foi continuada. Existe a idéia de uma versão do componente para a plataforma .NET 
    porém não há como garantir que os relatório desenhados para a versão atual do componente possam ser utilizados 
    na nova versão .NET sem sofrer ajustes.  </p>],
 /*5 */   
 [`Como fazer para adquirir a versão registrada?`,
    <p id="p">Visite a página de <Link id="a" to="/registro">registro</Link> para saber mais sobre a versão registrada. </p>],
 /*6 */   
 [`Como exportar o relatório para o formato PDF?`,
    <p id="p">O componente não faz a exportação diretamente, mas você pode instalar um driver virtual de impressora que faça isso. 
    Existem drivers gratuitos e pagos. Você pode visitar a página do <a target="_blank" id="a" href="http://www.pdf995.com"  >PDF995</a> que 
    disponibiliza um driver gratuito. Após instalar o driver selecione-o como se fosse uma impressora comum 
    e será aberta uma janela pedindo o nome do arquivo a ser gerado. </p>],
 /*7 */   
 [`Quando o relatório é chamado apresenta o erro "Erro 401 - Application defined or object defined error" 
    quando tenta abrir o relatório.`,
    <p id="p">Esse erro provavelmente se deve ao fato do usuário estar tentando apresentar um relatório a partir de um 
    formulário aberto como "Modal". Atualmente o relatório não pode ser chamado a partir de um formulário modal, 
    porque o formulário de visualização e de impressão é apresentado na forma "não modal", por isso ocorre o erro. 
    Tente abrir o relatório a partir de um formulário "não modal". Se precisar abrir a partir de um form Modal, 
    você pode usar o código abaixo, escondendo temporariamente o form Modal, chamando o relatório e quando terminar, 
    voltar o form Modal para a tela do aplicativo.<br></br> Me.Hide<br></br> frmRelatorio.Config<br></br> Me.Show vbModal<br></br>  </p>],
 /*8 */   
 [`Não é possível colocar objetos em posições além da largura do formulário do VB.`,
    <p id="p">O componente usa os recursos da IDE do Visual Basic para o desenho do relatório, mas o formulário em modo de design 
    não possuí as barras de rolagem. Para poder ter acesso a qualquer lugar na seção, coloque a propriedade "Align" das 
    seções no valor "0-None" e será possível dimensionar a largura e altura da seção para qualquer tamanho. 
    Dessa forma também será possível arrastar a seção dentro do formulário e colocar os objetos. 
    Para facilitar o posicionamento dos objetos deixe a propriedade "Regua" do ReportMain ativada para que as 
    linhas de grade sejam mostradas nas seções. </p>],
 /*9 */   
 [`Quando o "Zoom" é ativado para 75% ou 50% os textos estão sendo cortados. Isso é normal?`,
    <p id="p">Para que o "Zoom" funcione corretamente na hora da vizualização deve-se sempre utilizar fontes "True Type" 
    durante o design do relatório. O VB usa a fonte "MS Sans Serif" como padrão nos formulários e essa fonte não é uma fonte 
    "True Type". Tente fontes como "Arial" ou "Times New Roman".  </p>],
 /*10 */  
  [`Como fazer para colocar o número de página no relatório?`,
    <p id="p">Para colocar o número de página no relatório, coloque um objeto "ReportField" com a propriedade 
    "Formula=True" e "Campo=Pagina". No evento "FormulaCampo" coloque uma instrução que retorne a propriedade 
    "PaginaAtual" do controle "ReportMain" para a fórmula. Outra forma é definir a propriedade Campo para "=[Pagina]" e a 
    propriedade Formula = True. Para retornar o número total de páginas coloque a propriedade Campo em "=[Paginas]". 
    Para mesclar com um texto, pode definir a propriedade Campo para "=Página [Pagina] de [Paginas]". 
    Para maiores informações consulte a ajuda do componente ou o projeto de exemplo que acompanha o pacote. </p>],
 /*11 */  
  [`Existe algum tutorial ou manual do Visual ReportX?`,
    <p id="p">A documentação oficial do componente é o Arquivo de Ajuda (ReportX.HLP) que é instalado com o componente. 
    Ele pode ser acessado diretamente do ambiente do VB através da tecla "F1" quando um controle do componente 
    está em foco ou pelo atalho criado no grupo de programas do Visual ReportX. O projeto de exemplo que acompanha o 
    pacote também contém muita informação através dos relatórios de exemplo.  </p>],
 /*12 */  
  [`O Visual ReportX trabalha com sub-relatórios?`,
   <p id="p">O Visual ReportX não tem uma seção para sub-relatórios mas tem as 
    seções de grupo que podem servir para o mesmo fim, porém para o caso de necessitar iniciar um relatório 
    após o termino de outro, a única solução seria a utilização do modo "Unbound" para colher dados de mais de uma fonte 
    e obter dois tipos de relatórios. No exemplo que acompanha o pacote existe um relatório do tipo "dois em um".  </p>],
 /*13 */  
  [`O relatório está sendo cancelado abruptamente com um erro "Disk Full". O que está acontecendo?`,
    <p id="p">A partir da versão 1.1.43 o componente passou a criar arquivos temporários no diretório temporário do Windows. 
    Dessa forma se existir pouco espaço no HD do usuário e não for suficiente para acomodar todo o relatório que é gerado 
    durante a visualização, o ReportX irá cancelar a impressão automaticamente retornando esse erro através do evento "Erro". 
    Deve-se então liberar espaço no diretório temporário do usuário.  </p>],
 /*14 */  
  [`Em alguns relatórios um campo que está na seção de cabeçalho ou rodapé não está aparecendo na última página. 
    Qual é o problema?`,
    <p id="p">Apenas os campos que estiverem na seção de "Detalhe" ou "Cabeçalho de Grupo" podem ser impressos diretamente do recordset 
    associado ao relatório. Nas outra seções pode ocorrer que o recordset já tenha chegado no último registro e então não será 
    possível imprimir o valor do campo. Quando quiser que algum campo do recordset apareça nessas seções, obtenha o valor 
    dele no início do relatório ou no início da seção de grupo (evento "IniciarGrupo"), por exemplo, guarde em uma variável 
    interna do formulário e depois utilize um campo do tipo "Fórmula" para retornar o valor dessa variável interna no evento 
    "FormulaCampo". </p>],
 /*15 */  
  [`Como fazer para visualizar o arquivos .VRX gerados pelo Visual ReportX?`,
    <p id="p">Se você já instalou o pacote do Visual ReportX, basta um click duplo sobre o arquivo no Windows Explorer para abrí-lo. 
    Se você quer que o cliente do seu sistema possa visualizar os arquivos, forneça juntamente com o pacote de instalação do 
    seu sistema o instalador do programa "Visual ReportX Reader". Vá até a área de <Link id="a" to="/download">download</Link> para baixar esse instalador. 
    O visualizador é composto pelo executável vrxFR.exe (que fica no diretório \Windows) e o arquivo RepXF.dll (que fica no diretório \Windows\System). 
    Se você quiser, basta incluir esses dois arquivos no pacote de instalação do seu programa. Se você utilizar o gerador 
    de instalação do Visual Basic e incluir o arquivo vrxFR.exe, ele saberá através do arquivo vrxFR.DEP quais as dependências para o 
    funcionamento correto do visualizador. </p>],
 /*16 */  
  [`Quando um novo relatório está sendo criado exibe a mensagem "Erro 438 - Object doesn't support this property or method" 
    quando é colocado o objeto ReportMain.`,
    <p id="p">Esse erro estava sendo apresentado pela versão 1.2.56 devido a um problema na rotina de inicialização do objeto. 
    O problema foi corrigido na versão 1.2.57, basta desinstalar o componente, fazer o download e instalar a versão mais atual.  </p>],
 /*17 */  
  [`Na hora de gerar o Setup com o Setup Wizard está sendo aparecendo a mensagem "Visual ReportX version information is out of date". O que fazer?`,
    <p id="p">A partir da versão 1.1.46 o pacote de instalação distribuiu o arquivo ReportX.DEP que contém as informações de dependência e de versão e 
    provavelmente está desatualizado. Se você prefere usar o Setup Wizard, entre em contato com o autor para adquirir o arquivo ReportX.DEP correto 
    de acordo com a versão do componente. </p>],
 /*18 */  
  [`Quando é colocada uma imagem no relatório, ao imprimir ela sai em tamanho menor do que quando estava na tela. O que fazer? `,
    <p id="p">Para imprimir imagens use um objeto "Image" e coloque a propriedade Stretch=True. Se quiser usar um objeto "PictureBox" coloque a propriedade 
    Tag=STRETCH para que ele tenha o mesmo comportamento do objeto Image. </p>],
 /*19 */  
  [`Ao enviar o relatório para XLS ou HTML está apresentando um erro.`,
    <p id="p">Verifique se ao instalar o componente está enviando e registrando, junto com o arquivo ReportX.OCX o arquivo RepXHTM.DLL. 
    Os dois precisam estar registrados na máquina onde roda o relatório para as funcionalidades de exportação funcionarem adequadamente. </p>],
 /*20 */  
  [`Utilizo uma versão anterior do Visual ReportX e após atualizar, os projetos não abrem no ambiente do Visual Basic. Existe incompatibilidade?`,
    <p id="p">Os componentes ActiveX como o VRX, gravam nos arquivos VBP e FRM, informações sobre os componentes utilizados nos projetos e a versão de interface 
    de cada um. Quando a versão de interface muda e na maquina tem todas as versões anteriores instaladas, o VB automaticamente reconhece a alteração e 
    ajusta os projetos. Porém em alguns casos, principalmente em maquinas de desenvolvimento o Registry do Windows fica com informações duplicadas ou 
    incorretas e o VB não consegue reconhecer as interfaces antigas. O que pode ser feito, é alterar manualmente as referências de versão no arquivo .VBP e 
    nos arquivos .FRM para a versão mais atual do componente e depois abrir o projeto normalmente. Caso precise das versões anteriores do componente para 
    ter a informação no registry, pode baixar os pacotes nos links a seguir:
   </p>,  
    <div>
    <br></br>
    <a id="a" className={`active:text-cyan-200 hover:text-stone-50`} href={Virtualizador12} download={"Inteface 1.2 - Visual ReportX 1.2.61.exe"}>Versão 1.2 (repx261.exe)</a>
    <br></br> 
    <a id="a" className={`active:text-cyan-200 hover:text-stone-50`} href={Virtualizador13} download={"Inteface 1.3 - Visual ReportX 1.3.75.exe"}>Versão 1.3 (repx375.exe)</a></div>],
                                                                                                                                                                                                         
]


const FAQdetailsCSS = ` open:leading-7  open:text-justify open:bg-light open:ring-1 open:ring-dark open:ring-light/10 open:shadow-lg open:shadow-dark p-6 rounded-lg `

const FAQhCSS = `pl-4 text-2xl pb-2`

const FAQpCSS = `    `


const updatedPerguntas = perguntas?.map((item,index) => {
   return(
      <div class="">
      <details class={FAQdetailsCSS} >
        <summary  className={FAQhCSS}>
          {perguntas[index][0]}
        </summary>
        
          <p id="p" className={FAQpCSS} 
          
          
          >{perguntas[index][1]}</p>
        
      </details>
    </div>
    
)})



const FAQDado = () => {









    return(
        
            <div className={`flex flex-col  p-4  pl-8  pb-16  text-start `}>
                <div>
                    <h1 id="h">Central de perguntas frequentes</h1>
                </div>
                
                  <div className={`flex flex-col gap-4 `}>
                  
                    {updatedPerguntas}
                </div>
                <div>
                    
                </div>
            </div>
            
        
    )
}
export default FAQDado;