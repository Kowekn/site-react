import React from "react";
import Side_div from "../side_div";
import Opinioes_form from "./opinioes_form";






function Opinioes(){
    return(
        <div className="flex flex-row">
            <Side_div></Side_div>
            <div className="bg-[#03050F] basis-full">
            <Opinioes_form></Opinioes_form>
            </div>

            <Side_div></Side_div>
        </div>


    )
}

export default Opinioes;