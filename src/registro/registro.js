import React from "react";
import Header from "../header";
import Footer from "../footer";
import Registro_form from "./registro_form";
import GoToTop from "../go_to_top";


function Registro() {
    return(
        <div>
        <Header></Header>
        <Registro_form></Registro_form>
        <Footer></Footer>
        <GoToTop/>
        </div>
    )
}
export default Registro; 