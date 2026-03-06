import { renderArticlePage } from '../../pages/article.js'
import { renderBlogPage } from '../../pages/blog.js'
import { renderContactPage } from '../../pages/contact.js'
import { renderFaqPage } from '../../pages/faq.js'
import { renderHomePage } from '../../pages/home.js'
import { renderNotFoundPage } from '../../pages/not-found.js'
import { renderProjectsPage } from '../../pages/projects.js'
import {
	articles,
	contactPage,
	faqItems,
	homePage,
	navigationItems,
	projects,
	siteMeta,
} from './data/site-content.js'
import {
	DEFAULT_PAGE_ID,
	getArticleHash,
	getPageHash,
	parseHash,
	resolveNavPageId,
} from './router.js'

const articleMap = new Map(articles.map((article) => [article.slug, article]))

let navNode
let viewNode
let footerNode

function renderNavigation(activePageId) {
	navNode.innerHTML = navigationItems
		.map(
			(item) => `
				<li>
					<a
						class="nav-link${item.id === activePageId ? ' is-active' : ''}"
						href="${getPageHash(item.id)}"
					>
						${item.label}
					</a>
				</li>
			`
		)
		.join('')
}

function renderPage(route) {
	if (route.type === 'article') {
		const article = articleMap.get(route.slug)

		if (!article) {
			return {
				html: renderNotFoundPage('Статья не найдена', 'Похоже, ссылка на статью устарела или была введена с ошибкой.'),
				title: 'Статья не найдена',
			}
		}

		return {
			html: renderArticlePage(article),
			title: article.title,
		}
	}

	if (route.type === 'page') {
		switch (route.pageId) {
			case 'home':
				return { html: renderHomePage(homePage), title: 'Главная' }
			case 'blog':
				return { html: renderBlogPage(articles, getArticleHash), title: 'Блог' }
			case 'projects':
				return { html: renderProjectsPage(projects), title: 'Проекты' }
			case 'faq':
				return { html: renderFaqPage(faqItems), title: 'FAQ' }
			case 'contact':
				return { html: renderContactPage(contactPage), title: 'Контакты' }
			default:
				break
		}
	}

	return {
		html: renderNotFoundPage('Раздел не найден', 'Маршрут существует только в URL. Внутри приложения для него пока нет представления.'),
		title: 'Раздел не найден',
	}
}

function renderApp() {
	const route = parseHash(window.location.hash)
	const { html, title } = renderPage(route)

	renderNavigation(resolveNavPageId(route))
	viewNode.innerHTML = html
	footerNode.textContent = siteMeta.footerText
	document.title = `${title} | ${siteMeta.brandName}`
}

function handleContactSubmit(event) {
	const form = event.target.closest('[data-contact-form]')

	if (!form) {
		return
	}

	event.preventDefault()

	const statusNode = form.querySelector('[data-contact-status]')

	if (statusNode) {
		statusNode.textContent =
			'Форма отправки пока работает как демо. Для продакшена подключи backend или внешний сервис.'
	}

	form.reset()
}

export function initApp() {
	navNode = document.querySelector('[data-role="nav"]')
	viewNode = document.querySelector('[data-role="view"]')
	footerNode = document.querySelector('[data-role="footer"]')

	if (!navNode || !viewNode || !footerNode) {
		return
	}

	viewNode.addEventListener('submit', handleContactSubmit)
	window.addEventListener('hashchange', renderApp)

	// Сразу нормализуем стартовый маршрут, чтобы SPA открывался с прямой ссылкой на раздел.
	if (!window.location.hash) {
		window.location.hash = getPageHash(DEFAULT_PAGE_ID)
		return
	}

	renderApp()
}
