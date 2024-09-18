import React from "react";
import Side_div from "../side_div";
import Opinioes_form from "./opiniao_form";





function Opiniao(){
    return(
        <div className="flex flex-row ">
            <Side_div></Side_div>
            <div className={`bg-gradient-to-r from-light to-light  via-dark
            basis-full`}>
            <Opinioes_form ></Opinioes_form>
            </div>

            <Side_div></Side_div>
        </div>


    )
}

export default Opiniao;