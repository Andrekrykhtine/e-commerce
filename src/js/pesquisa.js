const products = [
    {
        id: 1,
        name: "Smartphone Galaxy",
        price: 1299.99,
        image: "https://via.placeholder.com/200x150",
        description: "Smartphone última geração"
    },
    {
        id: 2,
        name: "Notebook Pro",
        price: 4599.99,
        image: "https://via.placeholder.com/200x150",
        description: "Notebook para profissionais"
    },
    {
        id: 3,
        name: "Smartwatch Sport",
        price: 499.99,
        image: "https://via.placeholder.com/200x150",
        description: "Relógio inteligente esportivo"
    },
    {
        id: 4,
        name: "Fone Bluetooth",
        price: 199.99,
        image: "https://via.placeholder.com/200x150",
        description: "Fone sem fio"
    }
];

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');

function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p>${product.description}</p>
            <p class="product-price">R$ ${product.price.toFixed(2)}</p>
        </div>
    `;
}

// Renderiza produtos e os mantém ocultos inicialmente
function renderProducts() {
    productsGrid.innerHTML = products
        .map(product => createProductCard(product))
        .join('');
}

function filterProducts(searchTerm) {
    const productCards = document.querySelectorAll('.product-card');
    let hasResults = false;

    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        const productDescription = card.querySelector('p').textContent.toLowerCase();
        const searchContent = `${productName} ${productDescription}`;
        
        if (searchContent.includes(searchTerm.toLowerCase()) && searchTerm.length > 0) {
            card.classList.add('show');
            hasResults = true;
        } else {
            card.classList.remove('show');
        }
    });

    // Mostra mensagem quando não há resultados
    const existingNoResults = document.querySelector('.no-results');
    if (!hasResults && searchTerm.length > 0) {
        if (!existingNoResults) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'Nenhum produto encontrado';
            productsGrid.appendChild(noResults);
        }
    } else if (existingNoResults) {
        existingNoResults.remove();
    }
}

// Event listener para busca
searchInput.addEventListener('input', (e) => {
    filterProducts(e.target.value);
});

// Inicializa os produtos (ocultos)
renderProducts();