// Variáveis (var, let, const)
var x = 1
let y = 2
const z = 3

// Tipos de dados (number, string, boolean, object e undefined)
typeof(x)   // number

x = "IFBA"
typeof(x)   // string

x = true
typeof(x)   // boolean

x = [1,2,3]
typeof(x)   // object -> x[0]

x = [1, "IFBA", true]
typeof(x)   // object -> x[0]

x = [ 
    {nome: "João", idade: 20}, 
    {nome: "Maria", idade: 21}
]
typeof(x)   // object -> x[0].idade

// Operadores
var resultado = 7 + 3   // 10

7 == 7      // true
7 == "7"    // true
7 === "7"   // false
7 === 7     // true

// Estruturas condicionais
if (true) {
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

// Estrutura de repetição
for(let i = 0; i < 5; i++){
    console.log("For: " + i)
}

for(var n in x){
    console.log(x[n].nome) // n = 0, 1, ...
}

x.forEach( item => {
    console.log(item)
    //console.log(item.idade)
})

// Funções
function nomeFuncao(){
    console.log("Dentro da função")
}
nomeFuncao()

function funcaoRetorno(){
    console.log("Dentro da função retorno")
    return 'Retorno string'
}

// Eventos
function aoClicar(){
    console.log("ao clicar");
}

function aoPassarMouse(){
    console.log("ao passar mouse");
}

function aoSairMouse(){
    console.log("ao sair mouse");
}

// Seletor (DOM - Document Object Model)
var n1 = document.querySelector("#num1")    // CSS -> seletor
var n2 = document.querySelector("#num2")
var result = document.getElementById("resultado")    

function somar(){
    result.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}