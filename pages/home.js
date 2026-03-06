export function renderHomePage(homePage) {
	return `
		<section class="view view--home view-panel">
			<div class="hero-copy">
				<div class="section-heading">
					<p class="eyebrow">Портфолио и блог</p>
					<h1>${homePage.title}</h1>
					<p class="lead">${homePage.description}</p>
				</div>

				<div class="button-row">
					<a class="button" href="#projects">Посмотреть проекты</a>
					<a class="button button--ghost" href="#contact">Написать мне</a>
				</div>

				<div class="feature-list">
					${homePage.features
						.map(
							(feature) => `
								<div class="feature-list__item">
									<strong>${feature.title}</strong>
									<span>${feature.description}</span>
								</div>
							`
						)
						.join('')}
				</div>
			</div>

			<div class="hero-media">
				<img
					src="${homePage.image.src}"
					alt="${homePage.image.alt}"
					loading="eager"
				/>
			</div>
		</section>
	`
}
