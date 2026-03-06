export function renderProjectsPage(projects) {
	return `
		<section class="view">
			<div class="view-panel projects-header section-heading">
				<p class="eyebrow">Мои сайты</p>
				<h1>Проекты</h1>
				<p>
					Ниже собраны живые примеры работ. У каждого проекта теперь есть
					структурированное описание, так что секцию проще расширять и
					переиспользовать.
				</p>
			</div>

			<div class="card-grid">
				${projects
					.map(
						(project) => `
							<a class="card" href="${project.url}" target="_blank" rel="noreferrer">
								<img
									class="card__media"
									src="${project.image.src}"
									alt="${project.image.alt}"
									loading="lazy"
								/>
								<div class="card__body">
									<h3>${project.title}</h3>
									<p>${project.description}</p>
								</div>
							</a>
						`
					)
					.join('')}
			</div>
		</section>
	`
}
