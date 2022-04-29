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

let rodapé = document.getElementsByTagName("footer");
let sumirConteudoNovo = document.getElementById("discussoes-content-novo")
let discussoesNovo = document.getElementById("discussoes-novo");
let botaoEnviar = document.getElementById("botao-enviar");
botaoEnviar.addEventListener("click",function(){
    sumirConteudoNovo.style.display="none"; 
    discussoesNovo.style.display="block";
    discussoes.style.display="none";
    rodapé.
})


