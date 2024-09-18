import React, { useState } from "react";
import Opinioes from "./opiniao";



function Opiniao_form(){

    const [Nome, setNome] = useState("");
    const [Email, setEmail] = useState("");
    const [Como, setComo] = useState(true);
    const [ComoInput, setComoInput] = useState("");

    {/*Titulo,                          required       type      pattern                                                codigo  State         setState        max-size     placeholder*/}
    const registros =     
[   ["Nome de Registro",                "required",   "text",   false,                                                     1,   Nome,         setNome,        "255",      "Anônimo"],
    ["E-mail",                          "required",   "email",  "",                                                        2,   Email,     setEmail,          "",         " "],
    ["Como conheceu o componente",      "unrequired", "",       "",                                                         , ComoInput,   setComoInput,      "",         " "]
    
]
const RegistroTextCssInput = `relative peer  block   bg-light border  placeholder-shown:border-main border-accent  focus:outline outline-[2px] outline-offset-[-3px] outline-main  focus:border-accent
       w-[100%]   border-4   rounded pt-4 pl-4 pb-2 font-semibold `

const RegistroTextCssSpan = `absolute top-[30%] left-2 pl-[10px] pr-[10px]  font-semibold   rounded-lg    font-semibold
      bg-light  bg-contain   origin-top-left transition-transform ease-in leading-tight   
      peer-focus:translate-y-[-100%] peer-focus:scale-75 peer-[:not(:placeholder-shown)]:translate-y-[-100%] peer-[:not(:placeholder-shown)]:scale-75 peer-focus:text-accent`

const RegistroTextCssDiv = `w-[100%] min-w-[400px] max-w-[600px] mb-2 mt-2 `

const RegistroHR = `w-[100%] min-w-[400px] max-w-[600px] border-main relative bottom-4 left-0 bottom-2 mt-8`

const deleta = (e, setValue) => {
    if(e.keyCode == 8){
          
     
  }}

  const Conheceu = [ 
    ["indicacao",     "Indicação de amigo"],
    ["banner",        "Banner"],
    ["anuncio",       "Anúncio"],
    ["vbmania",       "VBMania"],
    ["busca",         "Busca pela internet"],
    ["superdown",     "SuperDownloads"],
    ["baixaki",       "Baixaki"],
    ["outro",         "Outro (Especifique)"]]
    
    const updatedConheceu = Conheceu?.map((item, index)=>{
      return <option value={Conheceu[index][0]}  ><p id="p">{Conheceu[index][1]}</p></option>
    })
    const [ComoCSS, setComoCSS] = useState(`bg-light ml-2 pl-2 pr-2 p-1 border-4 border-transparent outline-main `); 
    const updateComo = (item) => {
      setComoCSS(`bg-light ml-2 pl-2 pr-2 p-1 border-4 border-transparent outline-main `)
      if(item == "outro"){
        setComo(false);
      }else{
        setComo(true)
        setComoInput("")
      }
      if(item != "selecione"){
        setComoCSS(`bg-light ml-2 pl-2 pr-2 p-1 border border-4 border-accent outline-main `)
      }
    
    }

      
      const updateComoInput = (item) => {
        if(item != ""){
          setComoInput("")
        }else{
          
        }
      }

    const updatedRegistros = registros?.map((registro, index) =>{
        if(registros[index][0] == "Como conheceu o componente"){
            return <div>
            <div className="block relative left-0 pl-2  mt-3 bg-inherit">
            <p id="p" className="bg-inherit">
            <label className="font-semibold block ">Como conheceu o componente:</label>
            <select name="fonte" id="componente" onChange={event => updateComo(event.target.value)}
              className={ComoCSS}  >
              <option selected value="selecione"><p id="p">--Selecione--</p></option>
            {updatedConheceu}
            </select>
            <input type="text"  id="outro"  disabled={Como}  value={ComoInput} onChange={e => setComoInput(e.target.value)}  onFocus={event =>updateComoInput(event.target.value)} onKeyDown={e => deleta(e, registros[index][6])}
                className={`bg-light pl-2 p-1 pt-[5px] border-4 border-transparent focus:border-accent focus:outline outline-2 outline-offset-[-3px] font-semibold focus:outline-main`} placeholder="Especifique" maxLength={30}></input>
            </p></div><hr className={RegistroHR}></hr></div>;
          }
          else{
            
      
            return <div><div className={RegistroTextCssDiv}>
            <label className="relative ">
            <input type={registros[index][2]} value={registros[index][5]} onChange={e => registros[index][6](e.target.value)} pattern={registros[index][3]}   onKeyDown={e => deleta(e, registros[index][6])}
            placeholder={registros[index][8]} className={RegistroTextCssInput} maxLength={registros[index][7]}
              ></input>
            <span id="in" className={RegistroTextCssSpan}
            >{registros[index][0]}</span></label></div><br></br></div>;
             
    }})


    const registrosCheckbox = 
[   ["Crystal Reports", "Cristal Reports"],
    ["Active Report",   "Active Report"],
    ["Objeto Printer",  "Printer"],
    ["Outras",          "Outras"]
]
    const CheckboxCSS = `peer accent-accent`

    const updatedRegistrosCheckbox = registrosCheckbox?.map((registro, index) => {
        return(
            <div>
                <input type="checkbox" value={registrosCheckbox[index][1]} name="ferramentas" className={CheckboxCSS}></input> 
                <label className={` font-semibold pl-2 peer-checked:text-accent`}>{registrosCheckbox[index][0]}</label>
            </div>
        )

        
    })
    

    const registrosRadio = 
[   ["O componente atende as suas necessidades?", "atende" ],
    ["O que acha da documentação?",  "help" ],
    ["O que acha do design da página?",  "site" ],
    ["O que acha do valor do registro?",  "preco" ],
]
    
    const valoresRadio =
[   ["Sim", "Não"],
    ["Ruim", "Boa", "Ótima"],
    ["Ruim", "Bom", "Ótimo"],
    ["Barato", "Aceitável", "Caro"]]

    
    const TituloRadioCSS = `block pl-2 font-semibold pb-2 `
   


    const updatedRegistroRadio = registrosRadio?.map((item, index) =>{
        return(
            <div>
                <fieldset>
                <p id="p">
                <label className={TituloRadioCSS}>{registrosRadio[index][0]}</label>
                <div className={`grid bg-light auto-cols-max grid-flow-col w-[75%] place-content-evenly border border-2 rounded border-main p-4  has-[:checked]:border-accent`}>
                {valoresRadio?.map((x,y) => {
                    if(valoresRadio[index][y]){
                    return <div className="">
                <input type="radio" value={valoresRadio[index][y]} name={registrosRadio[index][1]} className={`peer accent-accent border-main border-2 rounded-full `}></input> 
                <label className={` font-semibold pl-2 peer-checked:text-accent   `} >{valoresRadio[index][y]}</label>
            </div>}
                })}
                </div>
                </p>
                <hr className={RegistroHR}></hr>
                </fieldset>
            </div>
        )
    })


    const TextBox = () => {
      return <div><p id="p">
        <label className="block pl-2 font-semibold pb-2">Críticas e sujestões</label>
        <textarea className={`resize font-semibold rounded-md bg-light outline-main w-[75%] border-4  placeholder-shown:border-main border-accent focus:border-accent   focus:outline outline-[2px] outline-offset-[-3px] outline-main `} 
        placeholder="Digite sua opinião"></textarea>
      </p></div>
    }

<div></div>

    return(
        <div className="bg-inherit">
        <div className={`flex flex-col   p-4  pl-8  pb-16  text-start`}>
          <h id="h">Deixe sua opinião!</h>
          <p id="p">Sua opinião me ajuda a entender os problemas que necessitam atenção. </p>
        </div>
        <fieldset className="bg-inherit">
        <form className="pl-8 p-4 md:grid   grid-rows-5  grid-flow-col gap-x-2 bg-inherit" onPaste={e => e.preventDefault()}>
        {updatedRegistros}
        <fieldset className="">
        <p id="p">
        <label className="block pl-2 font-semibold pb-2">Quais ferramentas você utiliza?</label>  
        <div className={`grid grid-cols-2 grid-flow-row place-content-center border border-2 rounded border-main p-4 w-[75%] 
        has-[:checked]:border-accent bg-light `}> 
                
           {updatedRegistrosCheckbox}
        </div></p>
        <hr className={RegistroHR}></hr>
        </fieldset>

        {updatedRegistroRadio}
        {TextBox()}
        
        </form>
        </fieldset>
        <div></div>

        </div>

        
    )
}
export default Opiniao_form;