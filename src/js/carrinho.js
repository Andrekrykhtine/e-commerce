const car = document.getElementById('car');
const menuCar = document.getElementById('menu_car');
const emptyCart = document.getElementById('emptyCart');

car.addEventListener('click', () => {
    menuCar.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    // Check if the click was outside both the car button and menuCar
    if (!car.contains(event.target) && !menuCar.contains(event.target)) {
        // Remove the 'show' class to close the menu
        menuCar.classList.remove('show');
    }
});

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
    const mensagemVazio = document.getElementById('carrinhoVazio');
    listaCarrinho.innerHTML = '';

    carrinho.length === 0 
        ? (mensagemVazio.style.display = 'block', listaCarrinho.style.display = 'none')
        : (mensagemVazio.style.display = 'none', 
           listaCarrinho.style.display = 'block',

    carrinho.forEach(produto => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${produto.nome} - R$ ${produto.preco.toFixed(2)}
            <span class="remover-item" onclick="removerItem('${produto.id}')">
                <i class="fas fa-trash"></i>
            </span>
            <hr style="border: 0.5px solid #ccc;">
        `;

        listaCarrinho.appendChild(li);
    
        }));
    }

