import React from "react";

function App() {
  const [expresion, setExpresion] = React.useState('')
  const [answer, setAnswer] = React.useState(0)
  
  const display = (symbol) => {
    setExpresion(prev => prev + symbol)
    
    if(expresion[expresion.length -1] == "."){
      if(symbol == "."){
        setExpresion(expresion)
      }else{
        setExpresion(expresion + symbol)
      }
    }
    
    
    if(expresion[expresion.length -1] == "="){
      if(/[1-9.]/.test(symbol)){
        setExpresion(symbol)
      }else{
        setExpresion(answer + symbol)
      }
    }
  }
  
  const calculate = () => {
    setAnswer(eval(expresion))
    setExpresion((prev) => prev + "=")
  }
  
  const allClear = () => {
    setExpresion('')
    setAnswer(0)
    
  }
  
  const clear = () => {
    setExpresion(prev => prev.split('').slice(0,prev.length -1).join(''))
    setAnswer(0)
  }

  return (
    <div className = "container">
      <div className = "grid">
        <div  className = "dis">
          <input  type = "text" value = {expresion} placeholder = "Please enter a value" disabled />
          <div id="display" className = "total">{answer}</div>
        </div>
        
      <div id="clear" onClick = {allClear} className = "padButton AC red">AC</div>
      <div id = "clear-c" onClick = {clear} className = "padButton C red">C</div>
      <div id="divide" onClick = {() => display("/")} className = "padButton div">/</div>
      <div id="multiply" onClick = {() => display("*")} className = "padButton times">x</div>
      <div id="seven" onClick = {() => display("7")} className = "padButton seven  dark-grey">7</div>
      <div id="eight" onClick = {() => display("8")} className = "padButton eight dark-grey">8</div>
      <div id="nine" onClick = {() => display("9")} className = "padButton nine dark-grey">9</div>
      <div id="subtract" onClick = {() => display("-")} className = "padButton minus">-</div>
      <div id="four" onClick = {() => display("4")} className = "padButton four dark-grey">4</div>
      <div id="five" onClick = {() => display("5")} className = "padButton five dark-grey">5</div>
      <div id="six" onClick = {() => display("6")} className = "padButton six dark-grey">6</div>
      <div id="add" onClick = {() => display("+")} className = "padButton plus">+</div>
      <div id="one" onClick = {() => display("1")} className = "padButton one dark-grey">1</div>
      <div id="two" onClick = {() => display("2")} className = "padButton two dark-grey">2</div>
      <div id="three" onClick = {() => display("3")}  className = "padButton three dark-grey">3</div>
      <div id="equals" onClick = {calculate} className = "padButton equal">=</div>
      <div id="zero" onClick = {() => display("0")} className = "padButton zero dark-grey">0</div>
      <div id="decimal" onClick = {() => display(".")} className = "padButton dot dark-grey">.</div>
        
      </div>
    </div>
  );
}

export default App;

