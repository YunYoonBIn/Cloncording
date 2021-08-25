const toggleBtn = document.querySelector('.navber_toogleBtn');
const menu = document.querySelector('.navber_menu');
const icon = document.querySelector('.navber_icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}); 