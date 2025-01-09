const car = document.getElementById('car');
const menuCar = document.getElementById('menu_car');

car.addEventListener('click', () => {
    menuCar.classList.toggle('show');
});

// const menu = document.getElementById('menu');
// const openButton = document.getElementById('open');
// const closeButton = document.getElementById('close');

// // Abrir o menu
// openButton.addEventListener('click', () => {
//     menu.classList.add('active'); // Adiciona a classe 'active' para mostrar o menu
// });

// // Fechar o menu
// closeButton.addEventListener('click', () => {
//     menu.classList.remove('active'); // Remove a classe 'active' para esconder o menu
// });

// script.js
// let carrinho = [];
// let total = 0;

// function adicionarItem() {
//     // Dados do produto (em uma aplicação real, estes viriam do banco de dados)
//     const produto = {
//         id: Date.now(), // Gerando ID único
//         nome: "Produto Exemplo",
//         preco: 99.90
//     };

//     // Adiciona o produto ao array do carrinho
//     carrinho.push(produto);
    
//     // Atualiza o total
//     total += produto.preco;
//     document.getElementById('total').textContent = total.toFixed(2);
    
//     // Atualiza a lista visual do carrinho
//     atualizarCarrinho();
// }

// function removerItem(id) {
//     // Encontra o produto no carrinho
//     const produto = carrinho.find(item => item.id === id);
    
//     // Atualiza o total
//     total -= produto.preco;
//     document.getElementById('total').textContent = total.toFixed(2);
    
//     // Remove o produto do carrinho
//     carrinho = carrinho.filter(item => item.id !== id);
    
//     // Atualiza a lista visual do carrinho
//     atualizarCarrinho();
// }

// function atualizarCarrinho() {
//     const listaCarrinho = document.getElementById('listaCarrinho');
//     listaCarrinho.innerHTML = '';
    
//     carrinho.forEach(produto => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             ${produto.nome} - R$ ${produto.preco.toFixed(2)}
//             <span class="remover-item" onclick="removerItem(${produto.id})">
//                 <i class="fas fa-trash"></i>
//             </span>
//         `;
//         listaCarrinho.appendChild(li);
//     });
// }

// script.js
let carrinho = [];
let total = 0;

function adicionarItem(button) {
    // Encontra o elemento pai mais próximo com a classe 'produto'
    const produtoElement = button.closest('.produto');
    
    // Extrai as informações do produto do HTML
    const produto = {
        id: produtoElement.dataset.id,
        nome: produtoElement.querySelector('h2').textContent,
        preco: parseFloat(produtoElement.querySelector('.preco').textContent.replace('R$ ', ''))
    };

    // Adiciona o produto ao array do carrinho
    carrinho.push(produto);
    
    // Atualiza o total
    total += produto.preco;
    document.getElementById('total').textContent = total.toFixed(2);

    // IMPORTANTE: Atualiza o contador aqui
    const contador = document.querySelector('.cart-counter');
    if (contador) {
        contador.textContent = carrinho.length;
        
        // Adiciona animação
        contador.style.transform = 'scale(1.2)';
        setTimeout(() => {
            contador.style.transform = 'scale(1)';
        }, 100);
    } else {
        contador.textContent = carrinho.remove();
    }

    
    // Adiciona efeito visual de confirmação
    button.classList.remove('btn-success');
    button.classList.add('btn-secondary');
    setTimeout(() => {
        button.classList.remove('btn-secondary');
        button.classList.add('btn-success');
    }, 200);
    
    // Atualiza a lista visual do carrinho
    atualizarCarrinho();
}

function removerItem(id) {
    // Encontra o produto no carrinho
    const produto = carrinho.find(item => item.id === id);
    
    // Atualiza o total
    total -= produto.preco;
    document.getElementById('total').textContent = total.toFixed(2);
    
    // Remove o produto do carrinho
    carrinho = carrinho.filter(item => item.id !== id);

    // IMPORTANTE: Atualiza o contador aqui
    const contador = document.querySelector('.cart-counter');
    if (contador) {
        contador.textContent = carrinho.length;
        
        // Adiciona animação ao decrementar
        contador.style.transform = 'scale(0.8)';
        setTimeout(() => {
            contador.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Atualiza a lista visual do carrinho
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';
    
    carrinho.forEach(produto => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${produto.nome} - R$ ${produto.preco.toFixed(2)}
            <span class="remover-item" onclick="removerItem('${produto.id}')">
                <i class="fas fa-trash"></i>
            </span>
        `;
        listaCarrinho.appendChild(li);
    });
}