export function renderContactPage(contactPage) {
	return `
		<section class="view">
			<div class="view-panel contact-layout">
				<div class="contact-copy">
					<div class="section-heading">
						<p class="eyebrow">Контакты</p>
						<h1>${contactPage.title}</h1>
						<p>${contactPage.description}</p>
					</div>

					<div class="contact-note">${contactPage.note}</div>
				</div>

				<form class="contact-form" data-contact-form>
					<div class="field">
						<label for="contact-name">Имя</label>
						<input
							id="contact-name"
							type="text"
							name="name"
							placeholder="Ваше имя"
							required
						/>
					</div>

					<div class="field">
						<label for="contact-email">Email</label>
						<input
							id="contact-email"
							type="email"
							name="email"
							placeholder="example@mail.com"
							required
						/>
					</div>

					<div class="field">
						<label for="contact-message">Сообщение</label>
						<textarea
							id="contact-message"
							name="message"
							placeholder="Опишите задачу или идею проекта"
							required
						></textarea>
					</div>

					<button class="button" type="submit">Отправить</button>
					<p class="status-message" data-contact-status></p>
				</form>
			</div>
		</section>
	`
}
