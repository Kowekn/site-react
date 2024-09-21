import React from "react";
import { Component } from "react";
const faz = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
    document.getElementById("tema0").setAttribute("checked",true)
    
} else {
  document.body.classList.add("light");
  document.getElementById("tema1").setAttribute("checked",true)
}
}


class Head extends Component {

  componentDidMount() {
    
    faz()
  }

render() {   
        return <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        
      </head>  
    }
}

export default Head;


