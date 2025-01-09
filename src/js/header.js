// // JavaScript para controlar o menu
// document.addEventListener('DOMContentLoaded', function() {
//     const categoryItem = document.querySelector('.nav-menu-item-category');
//     const dropdown = document.querySelector('.category-dropdown');

//     // Função para fechar o dropdown quando clicar fora
//     function closeDropdown(event) {
//         if (!categoryItem.contains(event.target)) {
//             dropdown.classList.remove('active');
//             categoryItem.classList.remove('active');
//             document.removeEventListener('click', closeDropdown);
//         }
//     }

//     // Toggle do dropdown ao clicar em Categorias
//     categoryItem.addEventListener('click', function(event) {
//         event.preventDefault();
        
//         const isActive = dropdown.classList.contains('active');
        
//         // Fecha o dropdown se estiver aberto
//         if (isActive) {
//             dropdown.classList.remove('active');
//             categoryItem.classList.remove('active');
//             document.removeEventListener('click', closeDropdown);
//         } else {
//             // Abre o dropdown
//             dropdown.classList.add('active');
//             categoryItem.classList.add('active');
            
//             // Adiciona evento para fechar ao clicar fora
//             setTimeout(() => {
//                 document.addEventListener('click', closeDropdown);
//             }, 0);
//         }
//     });
// });

// JavaScript ajustado
document.addEventListener('DOMContentLoaded', function() {
    const categoryButton = document.querySelector('.category-button');
    const categoryDropdown = document.getElementById('categoryDropdown');

    // Função para abrir/fechar o dropdown
    function toggleDropdown(event) {
        event.preventDefault();
        categoryDropdown.classList.toggle('active');
    }

    // Função para fechar o dropdown quando clicar fora
    function closeDropdown(event) {
        if (!event.target.closest('.nav-menu-item-category')) {
            categoryDropdown.classList.remove('active');
        }
    }

    // Event listeners
    categoryButton.addEventListener('click', toggleDropdown);
    document.addEventListener('click', closeDropdown);

    // Prevenir que o clique no dropdown feche ele
    categoryDropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});