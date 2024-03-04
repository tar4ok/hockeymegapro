const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModal = modal.querySelector('.close');

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

const openModal2 = document.getElementById('openModal2');
const modal2 = document.getElementById('modal2');
const closeModal2 = modal2.querySelector('.close2');

openModal2.addEventListener('click', () => {
    modal2.style.display = 'block';
});

closeModal2.addEventListener('click', () => {
    modal2.style.display = 'none';
});

function toggleMenu() {
    const menuList = document.querySelector('.menu-list');

    if (menuList.style.display === 'none' || menuList.style.display === '') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
}   