const API = "http://localhost:3000/objetos";

function corAleatoria() {

const cores = [
"#ff6b6b",
"#6bcB77",
"#4d96ff",
"#ffd93d",
"#c77dff",
"#ff9f1c"
];

return cores[Math.floor(Math.random()*cores.length)];

}

function formaAleatoria(){

const formas = [
"box",
"sphere",
"cone",
"cylinder",
"tetrahedron"
];

return formas[Math.floor(Math.random()*formas.length)];

}


async function listar(){

const res = await fetch(API);
const dados = await res.json();

const container = document.getElementById("objetos");

container.innerHTML="";

let linha=0;
let coluna=0;

dados.forEach(obj => {

let espacamento = 4;

let x = (coluna * espacamento) - 8;
let z = (linha * -espacamento) - 4;

const entidade = document.createElement("a-entity");

entidade.setAttribute("position",`${x} 1 ${z}`);

let forma;

if(obj.forma === "sphere"){
forma = document.createElement("a-sphere");
forma.setAttribute("radius","0.7");
}

else if(obj.forma === "cone"){
forma = document.createElement("a-cone");
forma.setAttribute("radius-bottom","0.7");
forma.setAttribute("height","1.5");
}

else if(obj.forma === "cylinder"){
forma = document.createElement("a-cylinder");
forma.setAttribute("radius","0.6");
forma.setAttribute("height","1.4");
}

else if(obj.forma === "tetrahedron"){
forma = document.createElement("a-tetrahedron");
forma.setAttribute("radius","0.9");
}

else{
forma = document.createElement("a-box");
forma.setAttribute("depth","1");
forma.setAttribute("height","1");
forma.setAttribute("width","1");
}

forma.setAttribute("color",obj.cor);

forma.setAttribute("class","clickable");

forma.dataset.id = obj.id;

forma.setAttribute("animation",
"property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear");

forma.addEventListener("click",function(){

const id = this.dataset.id;

deletar(id);

});


const texto = document.createElement("a-text");

texto.setAttribute("value",obj.nome);

texto.setAttribute("align","center");

texto.setAttribute("color","#ffffff");

texto.setAttribute("position","0 1.8 0");

texto.setAttribute("scale","2 2 2");


entidade.appendChild(forma);

entidade.appendChild(texto);

container.appendChild(entidade);


coluna++;

if(coluna>4){

coluna=0;

linha++;

}

});

}


async function criar(){

const nome = document.getElementById("nome").value;

if(nome===""){

alert("Digite um nome");

return;

}

const objeto = {

nome:nome,

cor:corAleatoria(),

forma:formaAleatoria()

};

await fetch(API,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(objeto)

});

document.getElementById("nome").value="";

listar();

}


async function deletar(id){

await fetch(API+"/"+id,{

method:"DELETE"

});

listar();

}


window.onload=listar;