import React from "react";
import {ReactComponent as BrasilEscuro} from "../imagens/brasil_join.svg";
import Side_div from "../side_div";



const Contato = () => {



    return(
        <div className={`flex flex-row h-full  `}>
            <Side_div></Side_div>
            <div className={`basis-full flex flex-col  p-4  pl-8  pb-16  text-start bg-gradient-to-r from-light to-light via-dark`}>
                <div>
                    <h1 id="h">Contato</h1>
                </div>
                <div>
                   <BrasilEscuro className=""></BrasilEscuro>
                </div>

            </div>
            <Side_div></Side_div>
        </div>
    )
}
export default Contato;