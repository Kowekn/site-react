import React from "react";
import * as consts from "../css_consts"
import Side_div from "../side_div";



const Links = () => {



    return(
        <div className={`flex flex-row h-full  `}>
            <Side_div></Side_div>
            <div className={`basis-full flex flex-col  p-4  pl-8  pb-16  text-start bg-gradient-to-r from-light to-light via-dark`}>
                <div>
                    <h1 id="h">Links</h1>
                </div>
                <div>
                    
                </div>

            </div>
            <Side_div></Side_div>
        </div>
    )
}
export default Links;