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

let botaoEnviar = document.getElementById("botao-enviar");
botaoEnviar.addEventListener("click",function(){
    novoConteudo.style.display="none";
   if(discussoes.style.height=="621px"){
        discussoes.style.height="753px";
   }else{
       discussoes.style.height="621px";
   }
})