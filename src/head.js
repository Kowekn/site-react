import React from "react";
import { Component } from "react";
const faz = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
    
    
} else {
  document.body.classList.add("light");
  alert(window.matchMedia('(prefers-color-scheme: dark)').matches)
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
        <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
      </head>  
    }
}

export default Head;


