console.log("Estou funcionando!");

let botao = document.getElementById("criar-topico-botao")
let conteudo= document.getElementById("discussoes-content");
let novoConteudo =  document.getElementById("novo-topico");
let discussoes = document.getElementById("discussoes");
let footer =document.getElementsByTagName("footer");
botao.addEventListener("click",function(){
    if(conteudo.style.display==="none"){
        conteudo.style.display="block";
        novoConteudo.style.display="none";
        
        
    }else{
        conteudo.style.display="none";
        novoConteudo.style.display="block";
    }

}) 


let discussoesNovo = document.getElementById("discussoes-novo")
let botaoEnviar = document.getElementById("botao-enviar");
botaoEnviar.addEventListener("click",function(){
    novoConteudo.style.display="none";
    if(discussoes.style.display==="none"){
        discussoes.style.display="block";
        discusssoesNovo.style.display="none"
    }else{
        discussoes.style.display="none";
        discussoesNovo.style.display="block";
    }
})