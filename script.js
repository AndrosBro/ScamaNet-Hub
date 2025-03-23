// Находим все ссылки навигации и все страницы
let links = document.querySelectorAll('.nav-list a')
let pages = document.querySelectorAll('.page')

// Функция для переключения контента
function switchPage(pageId) {
	// Скрыть все страницы
	pages.forEach((page) => page.classList.remove('active'))

	// Найти нужную и показать
	let targetPage = document.getElementById(pageId)
	if (targetPage) {
		targetPage.classList.add('active')
	}

	// Убрать активный класс у всех ссылок
	links.forEach((link) => link.classList.remove('active'))

	// Добавить активный класс к нужной ссылке
	links.forEach((link) => {
		if (link.dataset.page === pageId) {
			link.classList.add('active')
		}
	})
}

// Навешиваем обработчики кликов
links.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault() // Отменяем стандартное поведение ссылки
		let pageId = link.dataset.page
		switchPage(pageId)
	})
})

// Включаем первую страницу по умолчанию при загрузке
document.addEventListener('DOMContentLoaded', () => {
	switchPage('home')
})
