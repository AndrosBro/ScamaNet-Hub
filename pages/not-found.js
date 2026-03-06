export function renderNotFoundPage(title, description) {
	return `
		<section class="view-panel not-found">
			<p class="eyebrow">404</p>
			<h1>${title}</h1>
			<p>${description}</p>
			<a class="button" href="#home">Вернуться на главную</a>
		</section>
	`
}
