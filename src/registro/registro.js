import React from "react";
import Side_div from "../side_div";
import Registro_form from "./registro_form";
import GoToTop from "../go_to_top";


function Registro() {
    return(
        <div className={`flex flex-row`}>
        <Side_div></Side_div>
        <div className={`bg-gradient-to-r from-light to-light via-dark basis-full `}>
        
        
        <Registro_form></Registro_form>
        
        <GoToTop/>
        </div>
        <Side_div></Side_div>
        </div>
    )
}
export default Registro; 