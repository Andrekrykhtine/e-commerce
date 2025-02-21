document.addEventListener('DOMContentLoaded', function () {
    const categoryButton = document.querySelector('.nav__category-button'); // Ajustado para a nova classe
    const categoryDropdown = document.getElementById('categoryDropdown');

    // Função para abrir/fechar o dropdown
    function toggleDropdown(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        categoryDropdown.classList.toggle('active'); // Alterna a classe 'active'
    }

    // Função para fechar o dropdown quando clicar fora
    function closeDropdown(event) {
        if (!event.target.closest('.nav__menu-item--category')) { // Ajustado para a nova classe
            categoryDropdown.classList.remove('active'); // Remove a classe 'active'
        }
    }

    // Event listeners
    categoryButton.addEventListener('click', toggleDropdown); // Adiciona o event listener ao botão
    document.addEventListener('click', closeDropdown); // Adiciona o event listener ao documento

    // Prevenir que o clique no dropdown feche ele
    categoryDropdown.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});