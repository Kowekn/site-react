import React from "react";
import { BACKGROUND_LIGHT } from "./css_consts.js";

function Side_div() {
    return(
        <div className={`${BACKGROUND_LIGHT} 
            lg:basis-1/12 lg:w-full
            md:basis-0 md:w-0
            sm:basis-0 sm:w-0`}>
            
        </div>
    )
}
export default Side_div;