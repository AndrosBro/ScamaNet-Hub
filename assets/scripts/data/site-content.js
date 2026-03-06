import { frontendBackendArticle } from '../../../articles/frontend-backend.js'
import { howICreatedArticle } from '../../../articles/how-i-created.js'

export const siteMeta = {
	brandName: 'ScamaNet',
	footerText: `© ${new Date().getFullYear()} ScamaNet. Портфолио, блог и контакты веб-разработчика.`,
}

export const navigationItems = [
	{ id: 'home', label: 'Главная' },
	{ id: 'blog', label: 'Мой блог' },
	{ id: 'projects', label: 'Мои сайты' },
	{ id: 'faq', label: 'F.A.Q' },
	{ id: 'contact', label: 'Контакты' },
]

export const homePage = {
	title: 'Привет!',
	description:
		'Я Андрей, веб-разработчик из Берлина. Здесь собраны мои проекты, заметки о фронтенде и простой способ связаться со мной по задачам на разработку.',
	image: {
		src: 'img/Microsites-amico.svg',
		alt: 'Иллюстрация разработки небольших сайтов',
	},
	features: [
		{
			title: 'Портфолио',
			description: 'Отдельный раздел с рабочими проектами и быстрым переходом к демо.',
		},
		{
			title: 'Блог',
			description: 'Короткие статьи о том, как я учусь, собираю проекты и принимаю решения.',
		},
		{
			title: 'Контакты',
			description: 'Форма заявки, которую можно быстро адаптировать под реальную отправку.',
		},
	],
}

export const articles = [howICreatedArticle, frontendBackendArticle]

export const projects = [
	{
		title: 'AirProMaxFresh',
		description: 'Лендинг с фокусом на чистую подачу продукта и понятный визуальный ритм.',
		image: {
			src: 'img/AirProMaxFresh.png',
			alt: 'Превью проекта AirProMaxFresh',
		},
		url: 'https://androsbro.github.io/AirProMaxFresh/',
	},
	{
		title: 'GamePulseNews',
		description: 'Новостной макет для геймерской тематики с карточками материалов и акцентом на контент.',
		image: {
			src: 'img/GamePulseNews.png',
			alt: 'Превью проекта GamePulseNews',
		},
		url: 'https://androsbro.github.io/GamePulse/',
	},
	{
		title: 'GamePulseStore',
		description: 'Интерфейс магазина с витриной товаров, навигацией по категориям и акцентом на CTA.',
		image: {
			src: 'img/GamePulseStore.png',
			alt: 'Превью проекта GamePulseStore',
		},
		url: 'https://androsbro.github.io/GamePulseStore/',
	},
]

export const faqItems = [
	{
		question: 'Сколько стоит разработка сайта?',
		answer:
			'Стоимость зависит от объёма работ, числа экранов, интерактивности и того, нужен ли backend. Для оценки достаточно кратко описать задачу и желаемый результат.',
	},
	{
		question: 'Будет ли сайт адаптирован под мобильные устройства?',
		answer:
			'Да. Макеты и стили лучше сразу проектировать под несколько диапазонов экранов, чтобы сайт корректно выглядел на телефоне, планшете и десктопе.',
	},
	{
		question: 'Можно ли оптимизировать скорость загрузки?',
		answer:
			'Да. Обычно это достигается за счёт сжатия изображений, аккуратной структуры CSS и JavaScript, lazy loading и удаления неиспользуемых зависимостей.',
	},
	{
		question: 'Что будет после запуска проекта?',
		answer:
			'После релиза можно договориться о поддержке: исправления, мелкие доработки, добавление новых секций или перенос на более зрелую архитектуру.',
	},
	{
		question: 'Сколько времени занимает разработка?',
		answer:
			'Небольшой лендинг обычно укладывается в несколько дней, а более сложный сайт с продуманной архитектурой и контентом занимает заметно дольше.',
	},
]

export const contactPage = {
	title: 'Связаться со мной',
	description:
		'Если нужен лендинг, портфолио-сайт или рефакторинг существующего интерфейса, оставьте сообщение. Сейчас форма работает как демо-механика без backend-отправки, но структура уже готова к интеграции.',
	note: 'Следующий логичный шаг для этой формы — подключить реальный обработчик через EmailJS, Telegram Bot API или свой backend endpoint.',
}
