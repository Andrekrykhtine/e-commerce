// Função para carregar os detalhes do produto com base no ID da URL
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const produtos = [
        {
            id: 1,
            nome: "Camisa amarela do Campeonato Tour de France",
            preco: 99.50,
            imagem: "./src/images/camisa-amarela.png",
            descricao: "Camisa oficial do Tour de France, perfeita para os fãs de ciclismo."
        },
        {
            id: 2,
            nome: "Óculos Armor ideal para prática do ciclismo",
            preco: 220.00,
            imagem: "./src/images/oculos.png",
            descricao: "Óculos esportivos com lentes polarizadas, ideais para proteção e conforto durante o ciclismo."
        },
        {
            id: 3,
            nome: "Luva Bike preta/ laranja para ciclismo meio dedo ClicleTur",
            preco: 200.00,
            imagem: "./src/images/luva.png",
            descricao: "Luvas de ciclismo meio dedo com design moderno, oferecendo conforto e aderência ao guidão."
        },
        {
            id: 4,
            nome: "Ciclocomputador de bordo ultra resistente ClicleLife",
            preco: 150.90,
            imagem: "./src/images/compudador-de-bordo.png",
            descricao: "Ciclocomputador resistente que monitora velocidade, distância e tempo em suas pedaladas."
        },
        {
            id: 5,
            nome: "Camisa de bolinha do Campeonato Tour de France melhor escalador",
            preco: 99.50,
            imagem: "./src/images/camisa-bolinha.png",
            descricao: "Camisa icônica dos melhores escaladores do Tour de France, celebrando a força nas montanhas."
        },
        {
            id: 6,
            nome: "Squeeze de 1L MonsBike",
            preco: 90.00,
            imagem: "./src/images/squeeze.png",
            descricao: "Garrafa Bike Squeeze Bike Caramanhola Big 1L Ciclismo. Livre de BPA, boca larga que facilita a limpeza."
        },
        {
            id: 7,
            nome: "Capacete de ciclismo",
            preco: 150.00,
            imagem: "./src/images/capacete.png",
            descricao: "O acessório necessário para suas atividades. Esse capacete lhe dará comodidade e segurança para que você possa aproveitar as atividades que você mais gosta sem preocupações"
        },
        {
            id: 8,
            nome: "Sapatilha para ciclismo",
            preco: 111.99,
            imagem: "./src/images/sapatilha.png",
            descricao: " Ideal para longas pedaladas devido ao seu design e materiais.As perfurações e malha respirável ajudam a manter os pés frescos."
        },
        
    ];

    const produto = produtos.find(p => p.id == productId);

    if (produto) {
        document.getElementById('product-image').src = produto.imagem;
        document.getElementById('product-name').innerText = produto.nome;
        document.getElementById('product-price').innerText = `R$ ${produto.preco.toFixed(2)}`;
        document.getElementById('product-description').innerText = produto.descricao;
    } else {
        document.getElementById('product-details').innerHTML = "<p>Produto não encontrado.</p>";
    }
}

// Carregar os detalhes do produto quando a página for carregada
window.onload = loadProductDetails;