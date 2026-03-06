const PAGE_IDS = ['home', 'blog', 'projects', 'faq', 'contact']

export const DEFAULT_PAGE_ID = 'home'

export function getPageHash(pageId) {
	return `#${pageId}`
}

export function getArticleHash(slug) {
	return `#article/${slug}`
}

export function parseHash(hash) {
	const normalizedHash = hash.replace(/^#\/?/, '').trim()

	if (!normalizedHash) {
		return { type: 'page', pageId: DEFAULT_PAGE_ID }
	}

	if (PAGE_IDS.includes(normalizedHash)) {
		return { type: 'page', pageId: normalizedHash }
	}

	if (normalizedHash.startsWith('article/')) {
		const slug = normalizedHash.slice('article/'.length)

		return slug ? { type: 'article', slug } : { type: 'not-found' }
	}

	return { type: 'not-found', value: normalizedHash }
}

export function resolveNavPageId(route) {
	if (route.type === 'article') {
		return 'blog'
	}

	if (route.type === 'page') {
		return route.pageId
	}

	return ''
}
