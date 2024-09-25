import React from "react";
import Side from "./side";
import Info from "./info";
import Side_div from "../side_div";



function Download_info() {
    return (
       <div className="sm:flex sm:flex-row ">
        <Side_div></Side_div>
        <div className="basis-full sm:flex sm:flex-row relative  ">
        <Side className={`sm:basis-3/12 sm:relative`}> </Side>
        <Info className={`sm:basis-full relative top-0  bg-gradient-to-r from-dark to-light via-dark  `}></Info>
        </div>
        <Side_div></Side_div>
       </div>
    )
}
export default Download_info;