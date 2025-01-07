// Получаем элементы
const burgerMenu = document.getElementById('burger-menu');
const headerList = document.getElementById('header-list');

// Добавляем обработчик клика по бургер-меню
burgerMenu.addEventListener('click', () => {
  // Переключаем класс .active у списка меню
  headerList.classList.toggle('active');
  // Обновляем aria-expanded
  const expanded = burgerMenu.getAttribute('aria-expanded') === 'true';
  burgerMenu.setAttribute('aria-expanded', !expanded);
});
