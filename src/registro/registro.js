import React from "react";
import Side_div from "../side_div";
import Registro_form from "./registro_form";
import GoToTop from "../go_to_top";
import { BACKGROUND, FROM_BACKGROUND, TO_BACKGROUND, VIA_BACKGROUND, BORDER_BACKGROUND, BACKGROUND_LIGHT, 
    FROM_BACKGROUND_LIGHT, TO_BACKGROUND_LIGHT, VIA_BACKGROUND_LIGHT, BORDER_BACKGROUND_LIGHT, ACCENT_ACCENT, 
    TEXT_ACCENT, BORDER_ACCENT, OUTLINE_ACCENT, TEXT_MAIN, BORDER_MAIN, OUTLINE_MAIN } from "../css_consts";

function Registro() {
    return(
        <div className={`flex flex-row`}>
        <Side_div></Side_div>
        <div className={`bg-gradient-to-r ${FROM_BACKGROUND_LIGHT} ${TO_BACKGROUND_LIGHT} ${VIA_BACKGROUND} basis-full`}>
        
        
        <Registro_form></Registro_form>
        
        <GoToTop/>
        </div>
        <Side_div></Side_div>
        </div>
    )
}
export default Registro; 