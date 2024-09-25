import React from "react";
import Side from "./side";
import Main from "./main";
import Side_div from "../side_div";


function Download_main() {
    return (
       <div className="sm:flex sm:flex-row relative top-0">
        <Side_div></Side_div>
        <div className="basis-full sm:flex sm:flex-row relative top-0">
        <Side className={`sm:basis-4/12 sm:relative`}> </Side>
        <Main className={`sm:basis-full relative top-0  bg-gradient-to-r from-dark to-light via-dark  `}></Main>
        </div>
        <Side_div></Side_div>
       </div>
    )
}
export default Download_main;