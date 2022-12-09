/* Consumo de Apis */

function ConsumodeAPIS (NombreAPI) {
    alert ( "Consumo de api: " + NombredeAPI )

    const API_URL= "https://jsonplaceholder.typicode.com/" ;
}

console.log (`${API_URL}posts/1`);
fetch (`${API_URL}posts/1`)


  function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "green";
  }



  function MostrarMensajesIf () {
    /* let boolean= true;*/
    /* let number =5, */
  
let string = 5;
if (string >= 7){ 
    alert ("Se cumplió la condición 1")
}
else if (string =="Hola") {
    alert ("Se cumplió la condición 2");
}
else if (string < 4) {
    alert ("Se cumplió la condición 3");
}
else {
     alert ("No se cumplió ninguna condición");

}}

  function MostrarMensajeSwitch () {
/* Switch */

let string = "Hola";

switch (string) {

case 5:
    alert ("Es 5")
    break;

case "Hola":
    alert ("Hola");
    break;

    default:
        alert ("No cumple ningún caso")
        break;
} }

/*While */

function MostrarMensajesWhile ()

{
let ciclo =5;
while (ciclo >= 1 ) {
    ciclo = ciclo -1;
    alert(ciclo)
}
 }


/* Do While */

 function MostrarMensajesDoWhile () {

let num = 1;

do {

num=num + 1;

alert ('el número es :' + num);
/* if (num === 3) {
break;
} */
}
 while (num < 5); 
 }


 function MostrarMensajesFor () {

 for (let index =0 ; index < 5;index++)  {
 alert (index);}
 }

 function Sumar  (num1, num2) {
 let total = num1 + num2;
alert ("La suma de "+ num1 + " y " + num2 + " es igual a " + total)
 }

/* Manejo del DOM */

function ManejodelDOM () {
document.getElementById("obtenerPorId").innerHTML = "Hola bienvenidos a la página de María"


}

/* Evento Click */ 
    function Saludar() {
        alert("Bienvenidos a la página de María")
      }
      
      let botonEvento = document.getElementById("evento");
      let inputEvento = document.getElementById("evento2");
      let submitEvento = document.getElementById("evento2");

/* APIS */

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  const API_URL = "https://jsonplaceholder.typicode.com/" ;


/* GET POST */


function ConsumoAPIS (NombreAPI)
{
alert ("Consumo de Api:"+ NombreAPI)

}
fetch (`${API_URL}post/1`)


/* post de un post */

fetch(`${API_URL}posts`, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
      }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log("Publicar un post: ", json));


.poke-card {
    position: relative;
    height: fit-content;
    font-family: 'Roboto Mono', monospace;
    max-width: 300px;
    border-radius: 4px;
    color: #000;
    text-align: center;
    padding: 10px;
    margin: 0 auto;
    background-color: #FFF;
    border: 1px solid black;
}

.poke-card::before {
    content: '';
    background: radial-gradient(black 33%, transparent 33%);
    background-size: 3px 3px;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: -1;
}

.img-container {
    position: relative;
    width: 180px;
    margin: 10px auto;
}

.poke-stats div {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    padding: 5px;
    font-size: 18px;
}

.poke-types div {
    padding: 5px;
    margin: 5px;
    border-radius: 4px;
    border: 1px dashed black;
}

.poke-img {
    width: 180px;
    border-radius: 50%;
}
  


