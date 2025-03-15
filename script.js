let links = document.querySelectorAll('.nav_link')
let pages = document.querySelectorAll('.page')

// Функция для переключения страниц
function updateContent(pageName) {
	// Скрываем все страницы
	pages.forEach((page) => page.classList.remove('active'))

	// Показываем нужную страницу
	let activePage = document.getElementById(pageName)
	if (activePage) activePage.classList.add('active')
}

// Обработчик кликов на ссылки
links.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault()
		let pageName = e.target.dataset.page
		if (!pageName) return

		// Убираем класс у всех ссылок
		links.forEach((l) => l.classList.remove('active-link'))
		e.target.classList.add('active-link')

		updateContent(pageName)
	})
})

// Устанавливаем главную страницу при загрузке
document.addEventListener('DOMContentLoaded', () => {
	updateContent('Главная')
})
