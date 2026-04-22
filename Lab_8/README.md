<div align="center">

# Lab 8 — Server-Side Rendering with Next.js

### SSR, SSG, ISR, and Dynamic Rendering Strategies

</div>

## Описание

Лабораторная работа посвящена изучению различных стратегий рендеринга в Next.js: Server-Side Rendering (SSR), Static Site Generation (SSG) и Incremental Static Regeneration (ISR). Включает два практических задания: базовое блог-приложение с разными стратегиями рендеринга и расширенную версию с пользовательским дашбордом и аналитикой.

## Цели обучения

- Понимание разницы между SSR, SSG и ISR
- Использование `generateStaticParams` для динамических маршрутов
- Применение `revalidate` для ISR
- Использование `dynamic = "force-dynamic"` для SSR
- Работа с серверными компонентами в Next.js App Router
- Выбор правильной стратегии рендеринга для разных сценариев

## Задания

### Task 1 — Next.js Blog with SSR and SSG

**Директория:** `task_1/`

Базовое блог-приложение с демонстрацией различных стратегий рендеринга.

#### Компоненты:

**Home Page** (`src/app/page.tsx`)
- Список всех постов блога
- SSG с ISR (revalidate: 60 секунд)
- Навигация по сайту

**Blog Posts** (`src/app/posts/[id]/page.tsx`)
- Динамические маршруты для отдельных постов
- Информация об авторе
- Теги и метаданные
- SSG с `generateStaticParams` и ISR

**Profile Page** (`src/app/profile/page.tsx`)
- Пользовательский профиль
- SSR с `dynamic = "force-dynamic"`
- Отображение времени рендеринга

**About Page** (`src/app/about/page.tsx`)
- Статическая страница о блоге
- Чистый SSG без ревалидации

**Ключевые концепции:**
- Static Site Generation (SSG)
- Server-Side Rendering (SSR)
- Incremental Static Regeneration (ISR)
- Dynamic Routes
- App Router

**Запуск:**
```bash
cd Lab_8/task_1
npm install
npm run dev
```

---

### Task 2 — SSR User Dashboard

**Директория:** `task_2/`

Расширенное приложение с пользовательским дашбордом, системой уведомлений и аналитикой.

#### Компоненты:

**Home Page** (`src/app/page.tsx`)
- Список постов с просмотрами и лайками
- SSG с ISR

**Dashboard** (`src/app/dashboard/page.tsx`)
- Профиль пользователя с информацией об аккаунте
- Система уведомлений в реальном времени
- Обзор аналитики (просмотры, посты, пользователи)
- Рейтинг популярных постов
- SSR с обновлением на каждом запросе

**Blog Posts** (`src/app/posts/[id]/page.tsx`)
- Расширенная информация о постах
- Статистика просмотров и лайков
- Информация об авторе с количеством постов
- SSG с ISR

**About Page** (`src/app/about/page.tsx`)
- Статическая страница
- SSG

**Ключевые концепции:**
- Real-time data with SSR
- User-specific content
- Analytics dashboard
- Notification system
- Mixed rendering strategies

**Запуск:**
```bash
cd Lab_8/task_2
npm install
npm run dev
```

## Структура проекта

```
Lab_8/
├── task_1/                  # Basic SSR/SSG Blog
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx              # Home (SSG + ISR)
│   │   │   ├── about/
│   │   │   │   └── page.tsx          # About (SSG)
│   │   │   ├── posts/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx      # Post (SSG + ISR)
│   │   │   ├── profile/
│   │   │   │   └── page.tsx          # Profile (SSR)
│   │   │   └── not-found.tsx
│   │   ├── lib/
│   │   │   └── api.ts
│   │   └── types/
│   │       └── index.ts
│   ├── package.json
│   └── README.md
│
├── task_2/                  # Enhanced Dashboard
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx              # Home (SSG + ISR)
│   │   │   ├── about/
│   │   │   │   └── page.tsx          # About (SSG)
│   │   │   ├── posts/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx      # Post (SSG + ISR)
│   │   │   └── dashboard/
│   │   │       └── page.tsx          # Dashboard (SSR)
│   │   ├── lib/
│   │   │   └── api.ts                # Extended API
│   │   └── types/
│   │       └── index.ts              # Extended types
│   ├── package.json
│   └── README.md
│
├── AI_REPORT.md             # AI usage report
└── README.md                # This file
```

## Технологии

- **Next.js 16** — React framework с SSR/SSG
- **TypeScript** — типизация проекта
- **Tailwind CSS** — utility-first стили
- **App Router** — современная система роутинга Next.js
- **React 19** — библиотека для UI

## Сравнение стратегий рендеринга

| Стратегия | Когда рендерится | Свежесть данных | Производительность | Использование |
|-----------|------------------|-----------------|-------------------|---------------|
| **SSG** | Build time | Устаревает до rebuild | Самая быстрая | Блоги, документация |
| **SSR** | Request time | Всегда свежие | Медленнее | Дашборды, персонализация |
| **ISR** | Build + периодически | Обновляется по интервалу | Быстрая | E-commerce, новости |

## Когда использовать каждую стратегию

### SSG (Static Site Generation)
- ✅ Контент редко меняется
- ✅ Одинаковый для всех пользователей
- ✅ Важна производительность
- ✅ Нужно SEO
- 📝 Примеры: блоги, маркетинговые страницы, документация

### SSR (Server-Side Rendering)
- ✅ Данные часто меняются
- ✅ Пользовательский контент
- ✅ Нужны актуальные данные
- ✅ Требуется аутентификация
- 📝 Примеры: дашборды, профили, real-time данные

### ISR (Incremental Static Regeneration)
- ✅ Контент обновляется периодически
- ✅ Баланс между производительностью и свежестью
- ✅ Большое количество страниц
- 📝 Примеры: товары в e-commerce, статьи новостей

## Запуск всех проектов

```bash
# Task 1
cd Lab_8/task_1
npm install
npm run dev

# Task 2
cd Lab_8/task_2
npm install
npm run dev
```

## Ключевые навыки

После выполнения лабораторной работы вы будете уметь:

- Выбирать правильную стратегию рендеринга для разных сценариев
- Реализовывать SSG с помощью `generateStaticParams`
- Использовать ISR с опцией `revalidate`
- Принудительно использовать SSR с `dynamic = "force-dynamic"`
- Работать с серверными компонентами в Next.js
- Создавать приложения с комбинированными стратегиями рендеринга
- Оптимизировать производительность веб-приложений

---

<div align="center">

**Лабораторная работа 8** | Next.js + TypeScript

</div>
