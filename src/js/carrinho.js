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