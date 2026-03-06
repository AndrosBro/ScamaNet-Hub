export function renderBlogPage(articles, getArticleHash) {
	return `
		<section class="view">
			<div class="view-panel blog-header section-heading">
				<p class="eyebrow">Мой блог</p>
				<h1>Статьи</h1>
				<p>
					Раздел с заметками о первых проектах, практике фронтенда и решениях,
					которые помогают не собирать сайт в один монолитный HTML-файл.
				</p>
			</div>

			<div class="card-grid">
				${articles
					.map(
						(article) => `
							<a class="card" href="${getArticleHash(article.slug)}">
								<img
									class="card__media"
									src="${article.image.src}"
									alt="${article.image.alt}"
									loading="lazy"
								/>
								<div class="card__body">
									<h3>${article.title}</h3>
									<p>${article.excerpt}</p>
								</div>
							</a>
						`
					)
					.join('')}
			</div>
		</section>
	`
}
