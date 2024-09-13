import React from "react";
import Side from "./side";
import Main from "./main";
import Side_div from "../side_div";

function Download_main() {
    return (
       <div className="flex flex-row  ">
        <Side_div></Side_div>
        <div className="basis-full flex flex-row">
        <Side className="basis-5/12  "></Side>
        <Main className="basis-7/12   "></Main>
        </div>
        <Side_div></Side_div>
       </div>
    )
}
export default Download_main;