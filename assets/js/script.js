const consoleDiv = document.getElementById("console")
consoleDiv.scrollIntoView()

const button = document.getElementsByTagName("button")[0]
const clearButton = document.getElementsByTagName("button")[1]


//validacion
const validation = (aux) =>{
  if(!aux || aux>20){
    alert("Numero invalido o fuera de rango")
    return false}
  else return true  
}

clearButton.addEventListener("click", ()=>{
  console.clear()
})


//multiplicacion
const multiplication = (selection) =>{
  for (let count=1; count <= selection; count ++){
    console.log(`${count} x ${selection} = ${count*selection}`)
  }
}
  
//factorial 

const printFactorial = (numero) =>{  
  for (let i = 1; i <= numero; i++){
    let resultado = 1;    
    for (let j = 1; j <= i; j++){
      resultado *= j             
    }  
    console.log(`El factorial de ${i} es : ${resultado}`) 
  }
}

button.addEventListener("click", ()=>{
  const number = +document.getElementById("number").value
  if(validation(number)){
    multiplication(number)
    printFactorial(number)
  }
})

