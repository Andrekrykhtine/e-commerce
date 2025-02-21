const car = document.getElementById('car');
const menuCar = document.getElementById('menu_car');
const emptyCart = document.getElementById('carrinhoVazio');

// Mostra ou esconde o menu do carrinho
car.addEventListener('click', () => {
    menuCar.classList.toggle('show');
});

// Fecha o menu do carrinho ao clicar fora
document.addEventListener('click', (event) => {
    if (!car.contains(event.target) && !menuCar.contains(event.target)) {
        menuCar.classList.remove('show');
    }
});

let carrinho = [];
let total = 0;

// Função para carregar o carrinho do localStorage
function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
        document.getElementById('total').textContent = total.toFixed(2);
        document.querySelector('.header__cart-counter').textContent = carrinho.length;
        atualizarCarrinho();
    }
}

// Função para salvar o carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para adicionar um item ao carrinho
function adicionarItem(button) {
    // Verifica se o produto está na página de listagem (news__card) ou na página de detalhes (product-details__container)
    const produtoElement = button.closest('.news__card') || button.closest('.product-details__container');

    // Captura o nome e o preço do produto com base na página
    const nome = produtoElement.querySelector('.news__product-name')?.textContent || produtoElement.querySelector('.product-details__name')?.textContent;
    const preco = produtoElement.querySelector('.news__product-price')?.textContent || produtoElement.querySelector('.product-details__price')?.textContent;

    // Cria o objeto do produto
    const produto = {
        id: produtoElement.dataset.id,
        nome: nome,
        preco: parseFloat(preco.replace('R$ ', ''))
    };

    console.log('Produto adicionado:', produto); // Depuração

    carrinho.push(produto);
    total += produto.preco;
    document.getElementById('total').textContent = total.toFixed(2);

    // Atualiza o contador do carrinho
    const contador = document.querySelector('.header__cart-counter');
    if (contador) {
        contador.textContent = carrinho.length;
        contador.style.transform = 'scale(1.2)';
        setTimeout(() => {
            contador.style.transform = 'scale(1)';
        }, 100);
    }

    // Efeito visual de confirmação
    button.classList.remove('btn-success');
    button.classList.add('btn-secondary');
    setTimeout(() => {
        button.classList.remove('btn-secondary');
        button.classList.add('btn-success');
    }, 200);

    // Atualiza a lista visual do carrinho e salva no localStorage
    atualizarCarrinho();
    salvarCarrinho();
}

// Função para remover um item do carrinho
function removerItem(id) {
    const produto = carrinho.find(item => item.id === id);
    total -= produto.preco;
    document.getElementById('total').textContent = total.toFixed(2);
    carrinho = carrinho.filter(item => item.id !== id);

    // Atualiza o contador do carrinho
    const contador = document.querySelector('.header__cart-counter');
    if (contador) {
        contador.textContent = carrinho.length;
        contador.style.transform = 'scale(0.8)';
        setTimeout(() => {
            contador.style.transform = 'scale(1)';
        }, 200);
    }

    // Atualiza a lista visual do carrinho e salva no localStorage
    atualizarCarrinho();
    salvarCarrinho();
}

// Função para atualizar a lista visual do carrinho
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    const mensagemVazio = document.getElementById('carrinhoVazio');
    listaCarrinho.innerHTML = '';

    if (carrinho.length === 0) {
        mensagemVazio.style.display = 'block';
        listaCarrinho.style.display = 'none';
    } else {
        mensagemVazio.style.display = 'none';
        listaCarrinho.style.display = 'block';

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
        });
    }
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    carrinho = [];
    total = 0;
    document.getElementById('total').textContent = total.toFixed(2);
    document.querySelector('.header__cart-counter').textContent = 0;
    atualizarCarrinho();
    salvarCarrinho(); // Limpa o carrinho no localStorage
}

// Carrega o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', carregarCarrinho);