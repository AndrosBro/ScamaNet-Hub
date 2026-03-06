export function renderArticlePage(article) {
	return `
		<article class="view">
			<div class="button-row">
				<a class="button button--ghost" href="#blog">Назад к блогу</a>
			</div>

			<div class="view-panel article-layout">
				<img
					src="${article.image.src}"
					alt="${article.image.alt}"
					loading="eager"
				/>

				<div class="article-copy">
					<div class="section-heading">
						<p class="eyebrow">Статья</p>
						<h1>${article.title}</h1>
						<p class="lead">${article.excerpt}</p>
					</div>

					${article.paragraphs
						.map((paragraph) => `<p>${paragraph}</p>`)
						.join('')}
				</div>
			</div>
		</article>
	`
}
