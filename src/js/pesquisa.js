// const products = [
//     {
//         id: 1,
//         name: "Smartphone Galaxy",
//         price: 1299.99,
//         image: "https://via.placeholder.com/200x150",
//         description: "Smartphone última geração"
//     },
//     {
//         id: 2,
//         name: "Notebook Pro",
//         price: 4599.99,
//         image: "https://via.placeholder.com/200x150",
//         description: "Notebook para profissionais"
//     },
//     {
//         id: 3,
//         name: "Smartwatch Sport",
//         price: 499.99,
//         image: "https://via.placeholder.com/200x150",
//         description: "Relógio inteligente esportivo"
//     },
//     {
//         id: 4,
//         name: "Fone Bluetooth",
//         price: 199.99,
//         image: "https://via.placeholder.com/200x150",
//         description: "Fone sem fio"
//     }
// ];

// const productsGrid = document.getElementById('productsGrid');
// const searchInput = document.getElementById('searchInput');

// function createProductCard(product) {
//     return `
//         <div class="product-card" data-id="${product.id}">
//             <h3 class="product-name">${product.name}</h3>
//             <p>${product.description}</p>
//             <p class="product-price">R$ ${product.price.toFixed(2)}</p>
//         </div>
//     `;
// }

// // Renderiza produtos e os mantém ocultos inicialmente
// function renderProducts() {
//     productsGrid.innerHTML = products
//         .map(product => createProductCard(product))
//         .join('');
// }
// // Filtra os produtos com base na busca
// function filterProducts(searchTerm) {
//     const productCards = document.querySelectorAll('.product-card');
//     let hasResults = false;

//     productCards.forEach(card => {
//         const productName = card.querySelector('.product-name').textContent.toLowerCase();
//         const productDescription = card.querySelector('p').textContent.toLowerCase();
//         const searchContent = `${productName} ${productDescription}`;
        
//         if (searchContent.includes(searchTerm.toLowerCase()) && searchTerm.length > 0) {
//             card.classList.add('show');
//             hasResults = true;
//         } else {
//             card.classList.remove('show');
//         }
//     });

//     // Mostra mensagem quando não há resultados
//     const existingNoResults = document.querySelector('.no-results');
//     if (!hasResults && searchTerm.length > 0) {
//         if (!existingNoResults) {
//             const noResults = document.createElement('div');
//             noResults.className = 'no-results';
//             noResults.textContent = 'Nenhum produto encontrado';
//             productsGrid.appendChild(noResults);
//         }
//     } else if (existingNoResults) {
//         existingNoResults.remove();
//     }
// }

// // Event listener para busca
// searchInput.addEventListener('input', (e) => {
//     filterProducts(e.target.value);
// });

// // Inicializa os produtos (ocultos)
// renderProducts();



// #####teste####
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
