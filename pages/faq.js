export function renderFaqPage(faqItems) {
	return `
		<section class="view">
			<div class="view-panel faq-header section-heading">
				<p class="eyebrow">F.A.Q</p>
				<h1>Частые вопросы</h1>
				<p>
					Секцию с вопросами лучше хранить отдельной структурой данных, а не
					вшивать прямо в HTML. Тогда её легко пополнять и переиспользовать в
					других версиях сайта.
				</p>
			</div>

			<div class="faq-list">
				${faqItems
					.map(
						(item, index) => `
							<details class="faq-item"${index === 0 ? ' open' : ''}>
								<summary>${item.question}</summary>
								<p>${item.answer}</p>
							</details>
						`
					)
					.join('')}
			</div>
		</section>
	`
}
