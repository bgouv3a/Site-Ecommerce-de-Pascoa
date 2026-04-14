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

// Array que vai guardar os produtos adicionados ao carrinho
let carrinhoItens = []

// Abre e fecha o carrinho
botaoAbrir.addEventListener("click", function () {
    carrinho.classList.add("ativo")
    overlay.classList.add("ativo");
})
botaoFechar.addEventListener("click", function () {
    carrinho.classList.remove("ativo")
    overlay.classList.remove("ativo");
})

// Pega todos os botoes de comprar e coloca um evento em cada um
let botoesComprar = document.querySelectorAll(".btn-comprar")

for (let i = 0; i < botoesComprar.length; i++) {
    botoesComprar[i].addEventListener("click", function () {
        adicionarAoCarrinho(i)
    })
}

// adiciona o produto ao carrinho
function adicionarAoCarrinho(indice) {
    let produto = produtos[indice]

    // procura se o produto ja esta no carrinho
    let jaEstaNoCarrinho = false
    for (let i = 0; i < carrinhoItens.length; i++) {
        if (carrinhoItens[i].id == produto.id) {
            jaEstaNoCarrinho = true
            carrinhoItens[i].quantidade = carrinhoItens[i].quantidade + 1
        }
    }

    // se nao estiver, adiciona ele
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

// Aumenta a quantidade de um item
function aumentarQuantidade(id) {
    for (let i = 0; i < carrinhoItens.length; i++) {
        if (carrinhoItens[i].id == id) {
            carrinhoItens[i].quantidade = carrinhoItens[i].quantidade + 1
        }
    }
    atualizarCarrinho()
}

// Diminui a quantidade, se chegar a 0 remove o item
function diminuirQuantidade(id) {
    for (let i = 0; i < carrinhoItens.length; i++) {
        if (carrinhoItens[i].id == id) {
            if (carrinhoItens[i].quantidade == 1) {
                carrinhoItens.splice(i, 1) // remove o item do array
            } else {
                carrinhoItens[i].quantidade = carrinhoItens[i].quantidade - 1
            }
        }
    }
    atualizarCarrinho()
}

// Remove o item direto
function removerItem(id) {
    for (let i = 0; i < carrinhoItens.length; i++) {
        if (carrinhoItens[i].id == id) {
            carrinhoItens.splice(i, 1) // remove 1 item na posicao i
        }
    }
    atualizarCarrinho()
}

// Redesenha o carrinho na tela
function atualizarCarrinho() {
    let itensContainer = document.getElementById("itensCarrinho")
    let precoTotal = document.getElementById("precoTotal")
    let contador = document.getElementById("contadorCarrinho")

    // Limpa o que estava antes
    itensContainer.innerHTML = ""

    // Se o carrinho estiver vazio mostra mensagem
    if (carrinhoItens.length == 0) {
        itensContainer.innerHTML = "<p class='carrinho-vazio'>Seu carrinho está vazio.</p>"
    }

    let total = 0
    let totalItens = 0

    // Percorre cada item e cria o HTML dele
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

    // Atualiza o total e o contador
    precoTotal.textContent = "R$ " + total.toFixed(2).replace(".", ",")
    contador.textContent = totalItens
}