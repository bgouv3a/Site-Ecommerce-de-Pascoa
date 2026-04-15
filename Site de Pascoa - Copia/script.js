let botaoAbrir = document.getElementById('botaoAbrir')
let carrinho = document.getElementById('carrinho')
let botaoFechar = document.getElementById('fecharCarrinho')

const produtos = [
  { id: 1, imagem: "./fotos/ovo1_gouvea.png", nome: "Ovo de Pascoa Artesanal com recheio de Caramelo 370g", preco: 199.90 },
  { id: 2, imagem: "./fotos/ovo3_gouvea.png", nome: "Ovo de Pascoa Artesanal com recheio de Coco 300g", preco: 129.90 },
  { id: 3, imagem: "./fotos/ovo2_gouvea.png", nome: "Ovo de Pascoa Artesanal com recheio de Blueberry 320g", preco: 149.90 },
  { id: 4, imagem: "./fotos/ovo4_gouvea.png", nome: "Ovo de Pascoa Artesanal sabor Meio-Amargo 350g", preco: 199.90 },
  { id: 5, imagem: "./fotos/ovo5_gouvea.png", nome: "Ovo de Pascoa Artesanal com recheio de Café 350g", preco: 179.90 },
  { id: 6, imagem: "./fotos/ovo6_gouvea.png", nome: "Ovo de Pascoa Artesanal com recheio de Oreo 350g", preco: 199.90 },
  { id: 7, imagem: "./fotos/ovo7_gouvea.png", nome: "Ovo de Pascoa Artesanal com recheio de Morango 350g", preco: 179.90 },
  { id: 8, imagem: "./fotos/ovo8_gouveaAvela.png", nome: "Ovo de Pascoa Artesanal com recheio de Avela 250g", preco: 99.90 },
  { id: 9, imagem: "./fotos/ovo9_gouveaPistcahe.png", nome: "Ovo de Pascoa Artesanal com recheio de Pistache 300g", preco: 149.90 }
];

// array do carrinho
let carrinhoItens = []

// abre e fecha o carrinho
botaoAbrir.addEventListener("click", function () {
    carrinho.classList.add("ativo")
    overlay.classList.add("ativo");
})
botaoFechar.addEventListener("click", function () {
    carrinho.classList.remove("ativo")
    overlay.classList.remove("ativo");
})


let botoesComprar = document.querySelectorAll(".btn-comprar")

for (let i = 0; i < botoesComprar.length; i++) {
    botoesComprar[i].addEventListener("click", function () {
        adicionarAoCarrinho(i)
    })
}

// adiciona o produto ao carrinho
function adicionarAoCarrinho(indice) {
    let produto = produtos[indice]

    let jaEstaNoCarrinho = false
    for (let i = 0; i < carrinhoItens.length; i++) {
        if (carrinhoItens[i].id == produto.id) {
            jaEstaNoCarrinho = true
            carrinhoItens[i].quantidade = carrinhoItens[i].quantidade + 1
        }
    }

    if (jaEstaNoCarrinho == false) {
        let novoItem = {
            id: produto.id,
            imagem: produto.imagem,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        }
        carrinhoItens.push(novoItem)
    }

    atualizarCarrinho()
}

// contador do produto
function aumentarQuantidade(id) {
    for (let i = 0; i < carrinhoItens.length; i++) {
        if (carrinhoItens[i].id == id) {
            carrinhoItens[i].quantidade = carrinhoItens[i].quantidade + 1
        }
    }
    atualizarCarrinho()
}


function diminuirQuantidade(id) {
    for (let i = 0; i < carrinhoItens.length; i++) {
        if (carrinhoItens[i].id == id) {
            if (carrinhoItens[i].quantidade == 1) {
                carrinhoItens.splice(i, 1)
            } else {
                carrinhoItens[i].quantidade = carrinhoItens[i].quantidade - 1
            }
        }
    }
    atualizarCarrinho()
}

// remover item do carrinh
function removerItem(id) {
    for (let i = 0; i < carrinhoItens.length; i++) {
        if (carrinhoItens[i].id == id) {
            carrinhoItens.splice(i, 1) 
        }
    }
    atualizarCarrinho()
}

//atualiza o carrinho
function atualizarCarrinho() {
    let itensContainer = document.getElementById("itensCarrinho")
    let precoTotal = document.getElementById("precoTotal")
    let contador = document.getElementById("contadorCarrinho")

    
    itensContainer.innerHTML = ""

    
    if (carrinhoItens.length == 0) {
        itensContainer.innerHTML = "<p class='carrinho-vazio'>Seu carrinho está vazio.</p>"
    }

    let total = 0
    let totalItens = 0

    //html dos iten
    for (let i = 0; i < carrinhoItens.length; i++) {
        let item = carrinhoItens[i]

        total = total + (item.preco * item.quantidade)
        totalItens = totalItens + item.quantidade

        let div = document.createElement("div")
        div.classList.add("carrinho-item")

        div.innerHTML =
            '<img src="' + item.imagem + '" alt="' + item.nome + '">' +
            '<div class="carrinho-item-info">' +
                '<p class="carrinho-item-nome">' + item.nome + '</p>' +
                '<p class="carrinho-item-preco">R$ ' + item.preco.toFixed(2).replace(".", ",") + '</p>' +
                '<div class="carrinho-item-quantidade">' +
                    '<button onclick="diminuirQuantidade(' + item.id + ')">−</button>' +
                    '<span>' + item.quantidade + '</span>' +
                    '<button onclick="aumentarQuantidade(' + item.id + ')">+</button>' +
                '</div>' +
            '</div>' +
            '<button class="carrinho-item-remover" onclick="removerItem(' + item.id + ')">✕</button>'

        itensContainer.appendChild(div)
    }

    // total
    precoTotal.textContent = "R$ " + total.toFixed(2).replace(".", ",")
    contador.textContent = totalItens
}