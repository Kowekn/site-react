import React from "react";
import Side_div from "../side_div";
import FAQDado from "./faq_dado";


function FAQ() {



    return(
        <div className="flex flex-row ">
            <Side_div></Side_div>
            <div className={`basis-full bg-gradient-to-r from-light to-light via-dark`}>
                <FAQDado></FAQDado>
            </div>
            
            <Side_div></Side_div>
        </div>
    )
}
export default FAQ;