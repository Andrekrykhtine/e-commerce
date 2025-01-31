const produtos = [
    {
        id: 1,
        nome: "Camisa amarela do Campeonato Tour de France",
        preco: 99.50,
        imagem: "./src/images/camisa-amarela.png"
    },
    {
        id: 2,
        nome: "Óculos Armor ideal para prática do ciclismo",
        preco: 220.00,
        imagem: "./src/images/oculos.png"
    },
    {
        id: 3,
        nome: "Luva Bike preta/ laranja para ciclismo meio dedo ClicleTur",
        preco: 200.00,
        imagem: "./src/images/luva.png"
    },
    {
        id: 4,
        nome: "Ciclocomputador de bordo ultra resistente ClicleLife",
        preco: 150.90,
        imagem: "./src/images/compudador-de-bordo.png"
    },
    {
        id: 5,
        nome: "Camisa de bolinha do Campeonato Tour de France melhor escalador",
        preco: 99.50,
        imagem: "./src/images/camisa-bolinha.png"
    },
    {
        id: 6,
        nome: "Óculos para ciclismo",
        preco: 220.00,
        imagem: "./src/images/oculos.png"
    },
    {
        id: 7,
        nome: "Luva ciclismo",
        preco: 200.00,
        imagem: "./src/images/luva.png"
    },
    {
        id: 8,
        nome: "Ciclocomputador",
        preco: 150.90,
        imagem: "./src/images/compudador-de-bordo.png"
    },
    {
        id: 9,
        nome: "Luva ciclismo",
        preco: 200.00,
        imagem: "./src/images/luva.png"
    },
    {
        id: 10,
        nome: "Ciclocomputador",
        preco: 150.90,
        imagem: "./src/images/compudador-de-bordo.png"
    }
];

function criarCard(produto) {
    return `
        <div class="news__card" data-id="${produto.id}">
            <div class="news__card-image">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="news__card-content">
                <h3 class="news__card-title">${produto.nome}</h3>
                <p class="news__card-price">R$ ${produto.preco.toFixed(2)}</p>
                <button class="news__card-button btn btn-success" onclick="adicionarItem(this)" title="Adicionar ao carrinho">
                    <i class="fas">Adicionar ao carrinho</i>
                </button>
            </div>
        </div>
    `;
}

function renderizarCards() {
    const newsGrid = document.getElementById("newsGrid");

    // Limpa o conteúdo atual (caso haja)
    newsGrid.innerHTML = "";

    // Para cada produto, cria um card e adiciona ao grid
    produtos.forEach(produto => {
        const cardHTML = criarCard(produto);
        newsGrid.innerHTML += cardHTML;
    });
}

document.addEventListener("DOMContentLoaded", renderizarCards);

document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cartButton");
    const cartDropdown = document.getElementById("cartDropdown");
    const cartList = document.getElementById("cartList");
    const emptyCart = document.getElementById("emptyCart");
    const cartTotal = document.getElementById("cartTotal");
    const cartCounter = document.querySelector(".header__cart-counter");

    let cartItems = []; // Array para armazenar os produtos no carrinho
    let total = 0; // Variável para armazenar o total do carrinho

    // Função para abrir/fechar o dropdown do carrinho
    cartButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Impede que o evento se propague para o documento
        cartDropdown.classList.toggle("active");
    });

    // Fechar o dropdown ao clicar fora
    document.addEventListener("click", (event) => {
        if (!cartDropdown.contains(event.target) && !cartButton.contains(event.target)) {
            cartDropdown.classList.remove("active");
        }
    });

    // Função para adicionar produtos ao carrinho
    function adicionarItem(botao) {
        const card = botao.closest(".news__card");
        const produtoId = card.getAttribute("data-id");

        // Encontra o produto no array de produtos
        const produto = produtos.find(p => p.id == produtoId);

        if (produto) {
            // Adiciona o produto ao carrinho
            cartItems.push(produto);
            total += produto.preco;

            // Atualiza a lista de produtos no carrinho
            atualizarCarrinho();

            // Atualiza o contador do carrinho
            cartCounter.textContent = cartItems.length;

            // Exibe o dropdown do carrinho
            cartDropdown.classList.add("active");
        }
    }

    // Função para atualizar a lista de produtos no carrinho
    function atualizarCarrinho() {
        // Limpa a lista atual
        cartList.innerHTML = "";

        // Adiciona os produtos ao carrinho
        cartItems.forEach((produto, index) => {
            const li = document.createElement("li");
            li.className = "header__cart-product";
            li.innerHTML = `
                <span>${produto.nome}</span>
                <span>R$ ${produto.preco.toFixed(2)}</span>
                <button class="header__cart-remove" onclick="removerItem(${index})">Remover</button>
            `;
            cartList.appendChild(li);
        });

        // Atualiza o total do carrinho
        cartTotal.textContent = total.toFixed(2);

        // Mostra ou esconde a mensagem de carrinho vazio
        if (cartItems.length === 0) {
            emptyCart.style.display = "block";
        } else {
            emptyCart.style.display = "none";
        }
    }

    // Função para remover produtos do carrinho
    window.removerItem = function (index) {
        // Remove o produto do array
        total -= cartItems[index].preco;
        cartItems.splice(index, 1);

        // Atualiza o carrinho
        atualizarCarrinho();

        // Atualiza o contador do carrinho
        cartCounter.textContent = cartItems.length;
    };

    // Função para finalizar a compra
    window.finalizarCompra = function () {
        if (cartItems.length === 0) {
            alert("Seu carrinho está vazio!");
        } else {
            alert("Compra finalizada! Obrigado por comprar conosco.");
            cartItems = [];
            total = 0;
            atualizarCarrinho();
            cartCounter.textContent = "0";
            cartDropdown.classList.remove("active");
        }
    };
});

function filtrarProdutos(termo) {
    return produtos.filter(produto => {
        // Converte o nome do produto e o termo de pesquisa para minúsculas
        const nomeProduto = produto.nome.toLowerCase();
        const termoLowerCase = termo.toLowerCase();

        // Verifica se o termo de pesquisa está contido no nome do produto
        return nomeProduto.includes(termoLowerCase);
    });
}

function exibirResultados(produtosFiltrados) {
    const productsGrid = document.getElementById("productsGrid");

    // Limpa os resultados anteriores
    productsGrid.innerHTML = "";

    // Se não houver produtos correspondentes, exibe uma mensagem
    if (produtosFiltrados.length === 0) {
        productsGrid.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    // Para cada produto filtrado, cria um card e adiciona ao grid
    produtosFiltrados.forEach(produto => {
        const cardHTML = `
            <div class="search__card" data-id="${produto.id}">
                <div class="search__card-image">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="search__card-content">
                    <h3 class="search__card-title">${produto.nome}</h3>
                    <p class="search__card-price">R$ ${produto.preco.toFixed(2)}</p>
                </div>
            </div>
        `;
        productsGrid.innerHTML += cardHTML;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", () => {
        const termo = searchInput.value.trim(); // Obtém o termo de pesquisa

        if (termo === "") {
            // Se a barra de pesquisa estiver vazia, limpa os resultados
            document.getElementById("productsGrid").innerHTML = "";
            return;
        }

        // Filtra os produtos e exibe os resultados
        const produtosFiltrados = filtrarProdutos(termo);
        exibirResultados(produtosFiltrados);
    });
});