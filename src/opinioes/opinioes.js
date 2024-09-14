import React from "react";
import Side_div from "../side_div";
import Opinioes_form from "./opinioes_form";
import { BACKGROUND, FROM_BACKGROUND, TO_BACKGROUND, VIA_BACKGROUND, BORDER_BACKGROUND, BACKGROUND_LIGHT, 
    FROM_BACKGROUND_LIGHT, TO_BACKGROUND_LIGHT, VIA_BACKGROUND_LIGHT, BORDER_BACKGROUND_LIGHT, ACCENT_ACCENT, 
    TEXT_ACCENT, BORDER_ACCENT, OUTLINE_ACCENT, BG_ACCENT, TEXT_MAIN, BORDER_MAIN, OUTLINE_MAIN } from "../css_consts";





function Opinioes(){
    return(
        <div className="flex flex-row">
            <Side_div></Side_div>
            <div className={`bg-gradient-to-r ${FROM_BACKGROUND_LIGHT} ${TO_BACKGROUND_LIGHT}  ${VIA_BACKGROUND}
            basis-full`}>
            <Opinioes_form></Opinioes_form>
            </div>

            <Side_div></Side_div>
        </div>


    )
}

export default Opinioes;