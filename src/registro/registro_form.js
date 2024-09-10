import React from "react";
import Side_div from "../side_div";
import { useState } from "react";
import {ReactComponent as BrasilEscuro} from "../imagens/brasil_escuro.svg";

function Registro_form() {


const [Como, setComo] = useState(true);
const [ComoInput, setComoInput] = useState("");
const [CPFInput, setCPFInput] = useState("");

const [Nome, setNome] = useState("");
const [Endereco, setEndereco] = useState("");
const [Email, setEmail] = useState("");
const [Cidade, setCidade] = useState("");
const [Estado, setEstado] = useState("");
const [CEP, setCEP] = useState("");
const [CPF, setCPF] = useState("");
const [Inscr, setInscr] = useState("");
const [Tel, setTel] = useState("");



const VerificaInput = (e, setValue, index , Value) => {
    
  switch (index) {
    case 1:
       
      break; 

    case 2:
      
      break; 

    case 3:
      
      break; 

    case 4:
      
      break; 
    
    case 8:

    setTimeout(function faz() {

    if(Value.length == 9 || Value.length == 8){
    let cep = Value.replace(/[^0-9]/, "");

    if(Value.length == 8 && Value.search(/[^0-9]/)){
    let parte1 = Value.substring(0,5)
    let parte2 = Value.substring(5)
    setValue(parte1 + "-" + parte2);
    }
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      if(!response.ok) {
        return response.text().then(text => { throw new Error(text) })
       }
      else {
      response.json()
      .then(data => showData(data))
      }})
    
      .catch(err => alert(err))
    
    const showData = (result) => {
      for(const campo in result){
      if(campo == "localidade"){
        setCidade(result[campo])
      }
      if(campo == "uf"){
        setEstado(result[campo])
      }
      }}
      

    }},1500)
  
  
      break;
  
    case 9:
      
      if (Value.length == 3 || Value.length == 7 ) {
        
        setValue(Value + ".");
        
    } else if (Value.length == 11) {
        setValue(Value + "-");
    }
      break; 

    case 10:
      
      break; 

    case 11:
      
        Value = e.target.value
        if(Value.length > 9){
       
      
      setTimeout(function faz()  {
        
          if(Value == e.target.value){
          
        const menor = (valor) =>{
          
          let parte1 = valor.substring(0,2)
          let parte2 = valor.substring(2)       
          return "(" + parte1 + ")" + parte2 
        }
        if(Value.length == 13 && Value.startsWith("(")) {
          
            let parte1 = Value.substring(0, 9)
            let parte2 = Value.substring(9,13)
            setValue(parte1 + "-" + parte2)
        } 
        else if(Value.length == 12 && Value.startsWith("(")) {
            
            let parte1 = Value.substring(0, 8)
            let parte2 = Value.substring(8,12)
            setValue(parte1 + "-" + parte2)
        }
        else if(Value.length == 11 && !(Value.startsWith("("))){
          
            let valor = menor(Value)
            let parte3 = valor.substring(0, 9)
            let parte4 = valor.substring(9,13)
            setValue(parte3 + "-" + parte4)
          }
        else if(Value.length == 10 && !(Value.startsWith("("))){
          
            let valor = menor(Value)
            let parte3 = valor.substring(0, 8)
            let parte4 = valor.substring(8,12)
            setValue(parte3 + "-" + parte4)   
        }
         
         }
      }, 2000)}

      

    

      break; 

    default:

      break;
      }
      
   
    
  }
const deleta = (e, setValue) =>{
  if(e.keyCode === 8){
        
    setValue("");
}}
    {/*Titulo,                      required       type      pattern                                                codigo  State         setState        max-size */}
const registros = 
[ ["Nome de Registro",             "required",   "text",   false,                                                     1,   Nome,         setNome,        "255" ],
  ["E-mail",                       "required",   "email",  "",                                                        2,   Endereco,     setEndereco,    "" ],
  ["Endereço",                      "unrequired", "text",   "",                                                        3,   Email,        setEmail,       "" ],
  ["Cidade",                        "unrequired",  "text",   false,                                                    4,   Cidade,       setCidade,      "" ],
  ["Estado",                        "unrequired",  "",       "",                                                        ,       ,                  ,      "" ],
  ["Número de Licenças",            "unrequired",  "",       "",                                                        ,       ,                  ,      "" ],
  ["Como conheceu o componente",    "unrequired", "",       "",                                                         ,       ,                  ,      "" ],
  ["CEP",                           "unrequired", "text",   "",                                                        8,   CEP,          setCEP,         "9" ],
  ["CNPJ/CPF",                      "unrequired", "text",   "[1-9]{1}[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}",  9,   CPF,          setCPF,         "14" ],
  ["Inscrição Estadual",            "unrequired", "text",   false,                                                    10,   Inscr,        setInscr,       "" ],
  ["Telefone",                      "unrequired", "tel",    "",                                                       11,   Tel,          setTel,         "14" ]];  


const RegistroTextCssInput = `relative peer focus:outline-none block   bg-neutral-800 border border-neutral-600
      box-border w-[100%] border-solid border-current border-[3px]  bg-transparent rounded pt-4 pl-4 pb-2`

const RegistroTextCssSpan = `absolute top-[30%] left-2 pl-[10px] pr-[10px]     rounded-lg  
      bg-neutral-900   origin-top-left transition-transform ease-in leading-tight 
      peer-focus:translate-y-[-100%] peer-focus:scale-75 peer-[:not(:placeholder-shown)]:translate-y-[-100%] peer-[:not(:placeholder-shown)]:scale-75`

const RegistroTextCssDiv = `w-[100%] min-w-[400px] max-w-[600px] mb-2 mt-2`

const RegistroHR = `w-[100%] min-w-[400px] max-w-[600px] border-zinc-500 relative bottom-4 left-0 bottom-2 mt-8`

const Estados =  [["AC","Acre"],             ["AL","Alagoas"],               ["AP","Amapá"],                  ["AM","Amazonas"],    
                  ["BA","Bahia"],            ["CE","Ceará"],                 ["ES","Espirito Santo"],         ["GO","Goiânia"],               
                  ["MA","Maranhão"],         ["MT","Mato Grosso"],           ["MS","Mato Grosso do Sul"],     ["MG","Minas Gerais"],          
                  ["PA","Pará"],             ["PB","Paraíba"],               ["PR","Paraná"],                 ["PE","Pernambuco"],            
                  ["PI","Piauí"],            ["RJ","Rio de Janeiro"],        ["RN","Rio Grande do Norte"],    ["RS","Rio Grande so Sul"],     
                  ["RO","Rondônia"],         ["RR","Roraima"],               ["SC","Santa Catarina"],         ["SP","São Paulo"],             
                  ["SE","Serjipe"],          ["TO","Tocantins"],
                  ["XX", "Outro país"]]

const updatedEstados = Estados?.map((registro, index)=>{
  return <option value={Estados[index][0]}><p id="p">{Estados[index][1]}</p></option>
})

const Conheceu = [ 
["indicacao",     "Indicação de amigo"],
["banner",        "Banner"],
["anuncio",       "Anúncio"],
["vbmania",       "VBMania"],
["busca",         "Busca pela internet"],
["superdown",     "SuperDownloads"],
["baixaki",       "Baixaki"],
["outro",         "Outro (especifique)"]]

const updatedConheceu = Conheceu?.map((item, index)=>{
  return <option value={Conheceu[index][0]}  ><p id="p">{Conheceu[index][1]}</p></option>
})


const updateComo = (item) => {
  if(item == "outro"){
    setComo(false);
  }else{
    setComo(true)
  }
}

const updateComoInput = (item) => {
  if(item != ""){
    setComoInput("")
  }else{
    
  }
}




const updatedRegistros = registros?.map((registro, index)=>{
  if(registros[index][0] == "Estado"){
    return <div ><hr className="w-[100%] min-w-[400px] max-w-[600px] border-zinc-500 relative bottom-4 left-0 bottom-4"></hr>
            <div className="block relative left-0 pl-5 mt-1 ">
            <p id="p">
            <label>Estado:</label>
            <select name="estado" title="Estados" value={Estado} onChange={e => setEstado(e.target.value)}
            className="bg-neutral-800 pl-4 pr-6 ml-2 p-1">
            <option selected value><p id="p">--Selecione--</p></option>
              {updatedEstados}
            </select> </p></div><hr className={RegistroHR}></hr>
            </div>;
  }
  if(registros[index][0] == "Número de Licenças"){
    return <div><div className="block relative left-0 pl-5  mt-3">
                <p id="p">
                <label>Número de Licenças:</label>
                <select  name="licencas"
                  className="bg-neutral-800 ml-2 pl-2 pr-2 p-1" >
                <option value="1">1</option>
      
    </select></p></div><hr className={RegistroHR}></hr></div>;
  }
  if(registros[index][0] == "Como conheceu o componente"){
    return <div>
    <div className="block relative left-0 pl-5  mt-3">
    <p id="p">
    <label className="block">Como conheceu o componente:</label>
    <select name="fonte" id="componente" onChange={event => updateComo(event.target.value)}
      className=" bg-neutral-800 mt-2 ml-2 pl-2 pr-2 p-1"  >
      <option selected value><p id="p">--Selecione--</p></option>
    {updatedConheceu}
    </select>
    <input type="text"  id="outro"  disabled={Como}  value={ComoInput} onChange={e => setComoInput(e.target.value)}  onFocus={event =>updateComoInput(event.target.value)} onKeyDown={e => deleta(e, registros[index][6])}
        className="bg-neutral-800 pl-2 p-1" placeholder="Especifique" maxLength={30}></input>
    </p></div><hr className={RegistroHR}></hr></div>;
  }
  
  else{
      if(registros[index][1] == "required"){

      return <div><div className={RegistroTextCssDiv}>
      <label className="relative ">
      <input required  type={registros[index][2]} value={registros[index][5]} onChange={e => registros[index][6](e.target.value)} pattern={registros[index][3]} onInput={event => VerificaInput(event, registros[index][6], registros[index][4],registros[index][5])}  onKeyDown={e => deleta(e, registros[index][6])}
      placeholder=" " className={RegistroTextCssInput} maxLength={registros[index][7]}
        ></input>
      <span id="in" className={RegistroTextCssSpan}
      ><strong className="text-red-700">*</strong>{registros[index][0]}</span></label></div><br></br></div>;
      }
      

      else{

      return <div><div className={RegistroTextCssDiv}>
      <label className="relative ">
      <input  type={registros[index][2]} value={registros[index][5]} onChange={e => registros[index][6](e.target.value)} pattern={registros[index][3]}  onInput={event => VerificaInput(event, registros[index][6], registros[index][4],registros[index][5]) }    onKeyDown={e => deleta(e, registros[index][6])} 
      placeholder=" " className={RegistroTextCssInput} maxLength={registros[index][7]}
        ></input>
      <span id="in" className={RegistroTextCssSpan}
      >{registros[index][0]}</span></label></div><br></br></div>;
      }}
  
});













    return(
        <div className="flex flex-row-reverse place-content-start" >
            <Side_div></Side_div>
            <div className="basis-5/12 p-4 place-content-center mb-8   ">
              <div className=" "
              ><BrasilEscuro
                className="bg-neutral-800 rounded-[100px] p-16 max-w-[75%] h-[3%]  object-scale-down place-self-center"
              ></BrasilEscuro></div>
            </div>
            <div className=" basis-7/12 ">
            
            <div>
            <p  id="rf"  className="text-start p-4 pl-8 leading-6" >
            O registro serve para caso perca o programa licenciador e tenha que solicitá-lo novamente. 
            <br></br>
            Após o cadastro será enviado um email com as instruções.
            <br></br>
            <br></br>
            <strong>O registro não tem custo.</strong>  Apenas o envio das informações de registro é necessária.
            <br></br>
            Caso queira doar algum valor, as informações estarão no email do registro.
            <br></br>
            <br></br>
            Campos com '<strong className="text-red-700">*</strong>' são obrigatórios</p>
            </div>

            <fieldset className="m-4 pl-4  ">
                <form onPaste={e => e.preventDefault()}>

                    {updatedRegistros}
                    
                    <div className="flex flex-row ">
                    <div className="w-[100%] min-w-[175px] max-w-[250px] "></div>
                    <input id="in" type="Submit" value="Enviar" className="bg-inherit focus:outline-none  p-2 
                    border border-neutral-500  border-[3px] rounded
                      "></input> 
                        <div className="w-[75%]   "></div>
                      </div>

                </form>
            </fieldset>
            </div>
            <Side_div></Side_div>
            
        </div>
    )
}


export default Registro_form;


{/*import React from "react";

function Registro_form() {
    return(
        <div>

        </div>
    )
}
export default Registro_form;*/}