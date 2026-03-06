# ScamaNet-Hub

Статический SPA-сайт портфолио с блогом, проектами, FAQ и формой контактов.

После рефакторинга проект больше не хранит весь контент и всю логику в одном HTML-файле. Теперь он разделён на:

- shell приложения
- маршрутизацию
- данные контента
- view-модули страниц
- слои CSS

## Что внутри

- `index.html` — минимальный каркас приложения
- `script.js` — точка входа, запускает инициализацию SPA
- `assets/scripts/app.js` — сборка интерфейса, рендер маршрутов, обработка формы
- `assets/scripts/router.js` — hash-router
- `assets/scripts/data/site-content.js` — данные навигации, главной, проектов, FAQ и контактов
- `pages/` — шаблоны страниц
- `articles/` — контент статей
- `assets/styles/` — переменные, база, layout, компоненты и page-specific стили
- `img/` — изображения проекта

## Архитектура

Проект работает как лёгкое клиентское SPA без сборщика:

1. `index.html` содержит только общую оболочку.
2. `script.js` вызывает `initApp()`.
3. `assets/scripts/app.js` читает текущий hash-маршрут и рендерит нужную страницу в `data-role="view"`.
4. Для обычных разделов используются view-модули из `pages/`.
5. Для статей используются данные из `articles/` и отдельный article-view.

Поддерживаемые маршруты:

- `#home`
- `#blog`
- `#projects`
- `#faq`
- `#contact`
- `#article/<slug>`

## Структура каталогов

```text
ScamaNet-Hub/
├─ index.html
├─ script.js
├─ style.css
├─ articles/
│  ├─ frontend-backend.js
│  └─ how-i-created.js
├─ assets/
│  ├─ scripts/
│  │  ├─ app.js
│  │  ├─ router.js
│  │  └─ data/
│  │     └─ site-content.js
│  └─ styles/
│     ├─ base.css
│     ├─ components.css
│     ├─ layout.css
│     ├─ pages.css
│     └─ variables.css
├─ img/
└─ pages/
   ├─ article.js
   ├─ blog.js
   ├─ contact.js
   ├─ faq.js
   ├─ home.js
   ├─ not-found.js
   └─ projects.js
```

## Как запускать

Сборка не нужна. Достаточно открыть `index.html` в браузере или поднять любой простой static server.

Если нужен локальный сервер, можно использовать любой удобный инструмент, например:

```powershell
python -m http.server 8000
```

После этого открыть:

```text
http://localhost:8000
```

## Как расширять проект

### Добавить новую обычную страницу

1. Создать новый view-файл в `pages/`.
2. Добавить данные в `assets/scripts/data/site-content.js`, если они нужны.
3. Подключить новый рендер в `assets/scripts/app.js`.
4. При необходимости добавить пункт навигации.

### Добавить новую статью

1. Создать новый файл в `articles/`.
2. Экспортировать объект статьи со `slug`, `title`, `excerpt`, `image`, `paragraphs`.
3. Импортировать статью в `assets/scripts/data/site-content.js` и добавить её в массив `articles`.

### Добавить стили

- общие токены — в `assets/styles/variables.css`
- глобальная база — в `assets/styles/base.css`
- каркас и layout — в `assets/styles/layout.css`
- переиспользуемые компоненты — в `assets/styles/components.css`
- стили конкретных экранов — в `assets/styles/pages.css`

## Ограничения текущей версии

- форма контактов работает как demo-submit без backend
- контент рендерится на клиенте, без SSR
- автоматическая проверка JavaScript зависит от наличия Node.js в среде

## Следующие логичные улучшения

- подключить реальную отправку формы
- оптимизировать изображения
- добавить тестирование маршрутов и рендеринга
- при росте проекта перенести структуру на Vite или другой сборщик
