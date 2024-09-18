import React from "react";
import Side from "./side";
import Info from "./info";
import Side_div from "../side_div";


function Download_info() {
    return (
       <div className="flex flex-row">
        <Side_div></Side_div>
        <div className="basis-full flex ">
        <Side className="basis-4/12   "></Side>
        <Info className={`basis-8/12 bg-gradient-to-r from-dark to-light via-dark `}></Info>
        </div>
        <Side_div></Side_div>
       </div>
    )
}
export default Download_info;