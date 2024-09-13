import React from "react";
import GoToTop from "../go_to_top";
import Side_div from "../side_div";
import Imagem1 from "../imagens/Imagem_telas_1.png";
import Imagem2 from "../imagens/Imagem_telas_2.png";
import Imagem3 from "../imagens/Imagem_telas_3.png";

function Telas() {

const DivCSS = `flex flex-col`

const TextoCSS = `pl-4 pb-4`

const ImagemCSS = `place-self-center shadow-lg brightness-[.95]  `

const seila =  
    [[`Formulário de configuração`,

        `Um formulário comum do Visual Basic é utilizado para configurar o relatório.
         O formulário tem um controle ReportMain, as seções que são controles ReportSection e os campos que são controles ReportField.
         Pode ser colocado dentro das seções controles do Visual Basic como Labels, Lines, Images e Shapes.
         Dentro das seções são mostradas as linhas de grade e a de limite de folha de acordo com as configurações que são feitas no controle ReportMain.`,
                    
         Imagem1, "design"],

    [`Janela de código`,

        `Após desenhar pode-se escrever o código para executar o relatório dentro do próprio formulário onde o relatório foi desenhado.
         Todos as funções do Visual Basic pode ser utilizadas para criar fórmulas baseadas no banco de dados ou em outros objetos da aplicação.`,
                    
        Imagem2, "codigo"],

    [`Janela do visualizador durante a execução`,
    
        `Durante a execução do relatório, se o usuário configura a visualização, uma janela é apresentada ao usuário da aplicação com o relatório em tela, permitindo que o mesmo seja impresso ou salvo em disco.
         Mesmo enquanto o relatório está sendo processado, o usuário pode navegar pelas páginas que já foram geradas.`,
    
        Imagem3, "visualizador"]];


const printa = seila.map((item, index) =>{
    return <div className={DivCSS}>
            <div className={TextoCSS}>
            <h1 id="h" >{seila[index][0]}</h1>
                <p id="p">{seila[index][1]}</p></div>
                
                <img className={ImagemCSS} src={seila[index][2]} alt={seila[index][3]}></img>
                
            </div>
    })










    return(
        <div>
            
            <div className="flex flex-row bg-neutral-900">
            <Side_div></Side_div>
            <div className="basis-full flex flex-col gap-y-4 p-4 pb-8">
            {printa}
            </div>
            <Side_div></Side_div>
            </div>
            
            <GoToTop/>
        </div>
    )
}

export default Telas;