<div align="center">

# Lab 6 — React Router: Navigation and Dynamic Routes

### SPA, Routing, Dynamic Parameters, Loaders and Search Params

</div>

## Описание

Лабораторная работа посвящена изучению клиентской маршрутизации в React с использованием библиотеки **React Router**. Включает два практических задания: создание многостраничного приложения с базовой навигацией и разработку каталога курсов с динамическими путями, загрузкой данных и фильтрацией через URL.

## Цели обучения

- Настройка маршрутизации (Routes, RouterProvider)
- Создание макетов страниц с помощью `Layout` и `Outlet`
- Навигация без перезагрузки страницы (`Link`, `NavLink`)
- Обработка динамических параметров пути (`:id`, `useParams`)
- Использование `loader` для предварительной загрузки данных
- Работа с параметрами поиска (`useSearchParams`)
- Обработка ошибок маршрутизации (`errorElement`, `NotFound`)

## Задания

### Task 1 — Basic Routing

**Директория:** `task_1/`

Создание базовой структуры SPA с несколькими страницами и общим макетом навигации.

#### Компоненты:

**Layout** (`src/Layout.tsx`)
- Содержит навигационное меню (`nav`)
- Использует `<Outlet />` для рендеринга дочерних маршрутов

**Pages** (`src/pages/`)
- `Home.tsx`, `About.tsx` — простые информационные страницы
- `NotFound.tsx` — страница 404 (обработка `*` пути)

**Routing** (`src/main.tsx`)
- Использование `createBrowserRouter`
- Определение иерархии маршрутов (children)

**Ключевые концепции:**
- Базовая конфигурация роутера
- Вложенные маршруты
- Компонент `<Outlet />`
- Обработка несуществующих страниц

**Запуск:**
```bash
cd Lab_6/task_1
pnpm install
pnpm dev
```

---

### Task 2 — Advanced Routing and Data Loading

**Директория:** `task_2/`

Приложение "Каталог курсов" с динамическими страницами деталей, загрузчиками данных и программной сортировкой.

#### Компоненты:

**Courses** (`src/pages/Courses.tsx`)
- Отображение списка всех курсов
- Реализация сортировки (asc/desc) через `useSearchParams`
- Ссылка на детали каждого курса

**CourseDetail** (`src/pages/CourseDetail.tsx`)
- Отображение подробной информации о конкретном курсе
- Получение данных через `useLoaderData`

**Data Strategy** (`src/main.tsx` & `src/data.ts`)
- Определение `loader` для автоматической загрузки данных перед рендерингом
- Выброс ошибок при отсутствии данных
- Конфигурация `errorElement` для отображения ошибок маршрута

**Ключевые концепции:**
- Динамические параметры (`/courses/:id`)
- Хук `useLoaderData` для доступа к загруженным данным
- Хук `useSearchParams` для управления URL-параметрами (query strings)
- Глобальная и локальная обработка ошибок (`errorElement`)

**Запуск:**
```bash
cd Lab_6/task_2
pnpm install
pnpm dev
```

## Структура проекта

```
Lab_6/
├── task_1/                  # Basic Routing
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   └── NotFound.tsx
│   │   ├── Layout.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── task_2/                  # Course Catalog
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Courses.tsx
│   │   │   ├── CourseDetail.tsx
│   │   │   ├── About.tsx
│   │   │   └── NotFound.tsx
│   │   ├── Layout.tsx
│   │   ├── data.ts
│   │   └── main.tsx
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                # Этот файл
```

## Технологии

- **React 18** — библиотека для UI
- **TypeScript** — типизация проекта
- **React Router 6/7** — современная библиотека маршрутизации
- **Vite** — быстрая сборка
- **pnpm** — менеджер пакетов

## Запуск всех проектов

```bash
# Task 1
cd Lab_6/task_1
pnpm install
pnpm dev

# Task 2
cd Lab_6/task_2
pnpm install
pnpm dev
```

## Ключевые навыки

После выполнения лабораторной работы вы будете уметь:

- Интегрировать маршрутизацию в React-приложения
- Создавать вложенные макеты (Layouts)
- Работать с динамическими путями и параметрами
- Эффективно загружать данные через механизмы React Router (Loaders)
- Синхронизировать состояние приложения с URL (Search Params)
- Надежно обрабатывать навигационные ошибки и 404 страницы

---

<div align="center">

**Лабораторная работа 6** | React Router + TypeScript

</div>
