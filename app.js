console.log("Estou funcionando!");

let botao = document.getElementById("criar-topico-botao")
let conteudo = document.getElementById("discussoes-content");
let novoConteudo = document.getElementById("novo-topico");
let discussoes = document.getElementById("discussoes");
let footer = document.getElementsByName("footer");
botao.addEventListener("click", function () {
    if (conteudo.style.display === "none") {
        conteudo.style.display = "block";
        novoConteudo.style.display = "none";


    } else {
        conteudo.style.display = "none";
        novoConteudo.style.display = "block";
    }

})


let caixaFooter1 = document.getElementById("caixa1-novo");
let caixaFooter2 = document.getElementById("caixa2-novo")
let rodapé = document.querySelector("footer");
let sumirConteudoNovo = document.getElementById("discussoes-content-novo")
let discussoesNovo = document.getElementById("discussoes-novo");
let botaoEnviar = document.getElementById("botao-enviar");
botaoEnviar.addEventListener("click", function () {
    sumirConteudoNovo.style.display = "none";
    discussoesNovo.style.display = "block";
    discussoes.style.display = "none";
    rodapé.style.position = "relative";
    rodapé.style.top = "-1016px";
    rodapé.style.left = "221px";
    caixaFooter1.style.position = "absolute";
    caixaFooter2.style.position = "absolute"
    caixaFooter1.style.top = "655px";
    caixaFooter2.style.top = "809px";
})


let criarNovoTopico = document.getElementById("criar-novo-topico");
criarNovoTopico.addEventListener("click",function(){
    discussoes.style.display="block"
    discussoesNovo.style.display="none"
} )

let resumoExpandidoTxt = document.getElementById("resumo-expandido-txt")
let resumoTxt =  document.getElementById("Resumo-txt")
let resumoColapsado = document.getElementById("resumo-colapsado")
let resumoExpandido = document.getElementById("resumo-expandido")
resumoExpandido.addEventListener("click" , function(){ 
    // resumoColapsado.style.position="relative";
    // resumoColapsado.style.top="-36%";
    resumoColapsado.style.height="500px";
    resumoTxt.style.display="none"
    resumoExpandidoTxt.style.display="block"
    discussoes.style.bottom="-35px";
    rodapé.style.top="1862px";
    // if(resumoTxt.style.display==="none"){
    //     resumoExpandidoTxt.style.display="block"
    // }else{
    //     resumoExpandidoTxt.style.display="none";
    // }
    
 })


 