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
            nome: "Óculos para ciclismo",
            preco: 220.00,
            imagem: "./src/images/oculos.png",
            descricao: "Óculos aerodinâmicos projetados para proteger contra vento, poeira e raios UV durante o ciclismo."
        },
        {
            id: 7,
            nome: "Luva ciclismo",
            preco: 200.00,
            imagem: "./src/images/luva.png",
            descricao: "Luvas de ciclismo com acolchoamento estratégico para maior conforto e controle ao pedalar."
        },
        {
            id: 8,
            nome: "Ciclocomputador",
            preco: 150.90,
            imagem: "./src/images/compudador-de-bordo.png",
            descricao: "Ciclocomputador compacto que registra métricas essenciais para monitorar seu desempenho."
        },
        {
            id: 9,
            nome: "Luva ciclismo",
            preco: 200.00,
            imagem: "./src/images/luva.png",
            descricao: "Luvas leves e respiráveis, projetadas para manter suas mãos protegidas durante longas pedaladas."
        },
        {
            id: 10,
            nome: "Ciclocomputador",
            preco: 150.90,
            imagem: "./src/images/compudador-de-bordo.png",
            descricao: "Ferramenta prática para medir velocidade, distância e tempo, ajudando a otimizar seus treinos."
        }
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