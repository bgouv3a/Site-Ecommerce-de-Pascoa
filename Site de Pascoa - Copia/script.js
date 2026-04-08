let botaoAbrir = document.getElementById('botaoAbrir')
let carrinho = document.getElementById('carrinho')
let botaoFechar = document.getElementById('fecharCarrinho')

//Array dos produtos
const produtos = [
  {
    id: 1,
    imagem: "./fotos/ovo1_gouvea.png",
    nome: "Ovo de Pascoa Artesanal com recheio de Caramelo 370g",
    preco: 199.90
  },
  {
    id: 2,
    imagem: "./fotos/ovo3_gouvea.png",
    nome: "Ovo de Pascoa Artesanal com recheio de Coco 300g",
    preco: 129.90
  },
  {
    id: 3,
    imagem: "./fotos/ovo2_gouvea.png",
    nome: "Ovo de Pascoa Artesanal com recheio de Blueberry 320g",
    preco: 149.90
  },
  {
    id: 4,
    imagem: "./fotos/ovo4_gouvea.png",
    nome: "Ovo de Pascoa Artesanal sabor Meio-Amargo 350g",
    preco: 199.90
  },
  {
    id: 5,
    imagem: "./fotos/ovo5_gouvea.png",
    nome: "Ovo de Pascoa Artesanal com recheio de Café 350g",
    preco: 179.90
  },
  {
    id: 6,
    imagem: "./fotos/ovo6_gouvea.png",
    nome: "Ovo de Pascoa Artesanal com recheio de Oreo 350g",
    preco: 199.90
  },
  {
    id: 7,
    imagem: "./fotos/ovo7_gouvea.png",
    nome: "Ovo de Pascoa Artesanal com recheio de Morango 350g",
    preco: 179.90
  },
  {
    id: 8,
    imagem: "./fotos/ovo8_gouveaAvela.png",
    nome: "Ovo de Pascoa Artesanal com recheio de Avela 250g",
    preco: 99.90
  },
  {
    id: 9,
    imagem: "./fotos/ovo9_gouveaPistcahe.png",
    nome: "Ovo de Pascoa Artesanal com recheio de Pistache 300g",
    preco: 149.90
  }
];

//botao de abrir o carrinho

botaoAbrir.addEventListener("click", function(){
    carrinho.classList.add("ativo");
});
botaoFechar.addEventListener("click", function(){
    carrinho.classList.remove("ativo");
});

