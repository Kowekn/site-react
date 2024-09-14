import React from "react";
import Side from "./side";
import Info from "./info";
import Side_div from "../side_div";
import { BACKGROUND, FROM_BACKGROUND, TO_BACKGROUND, VIA_BACKGROUND, BORDER_BACKGROUND, BACKGROUND_LIGHT, 
    FROM_BACKGROUND_LIGHT, TO_BACKGROUND_LIGHT, VIA_BACKGROUND_LIGHT, BORDER_BACKGROUND_LIGHT, ACCENT_ACCENT, 
    TEXT_ACCENT, BORDER_ACCENT, OUTLINE_ACCENT, BG_ACCENT, TEXT_MAIN, BORDER_MAIN, OUTLINE_MAIN } from "../css_consts";

function Download_info() {
    return (
       <div className="flex flex-row">
        <Side_div></Side_div>
        <div className="basis-full flex ">
        <Side className="basis-4/12   "></Side>
        <Info className={`basis-8/12 bg-gradient-to-r ${FROM_BACKGROUND_LIGHT} ${TO_BACKGROUND_LIGHT} ${VIA_BACKGROUND} `}></Info>
        </div>
        <Side_div></Side_div>
       </div>
    )
}
export default Download_info;