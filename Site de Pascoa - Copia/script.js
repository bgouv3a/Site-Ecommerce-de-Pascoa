let botaoAbrir = document.getElementById('botaoAbrir')
let carrinho = document.getElementById('aba-lateral')
botaoAbrir.addEventListener("click", function(){
    carrinho.classList.toggle("ativo");
});

