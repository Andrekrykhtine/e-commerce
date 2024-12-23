const car = document.getElementById('car');
const menuCar = document.getElementById('menu_car');

car.addEventListener('click', () => {
    menuCar.classList.toggle('show');
});