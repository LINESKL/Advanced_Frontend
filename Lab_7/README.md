<div align="center">

# Lab 7 — React Performance and Reliability

### Lazy Loading, Suspense, Error Boundaries

</div>

## Описание

Лабораторная работа посвящена оптимизации загрузки интерфейса и обработке ошибок в React-приложениях. Включает два практических задания: базовую реализацию lazy loading маршрутов и расширенную версию с выделенным fallback-компонентом для ошибок.

## Цели обучения

- Использование `React.lazy` для ленивой загрузки компонентов
- Применение `Suspense` для отображения состояния загрузки
- Реализация `ErrorBoundary` для перехвата runtime-ошибок
- Создание fallback UI при ошибках
- Настройка клиентской маршрутизации в SPA

## Задания

### Task 1 — Lazy Loading with Suspense

**Директория:** `task_1/`

Базовое SPA с ленивой загрузкой страниц и обработкой ошибок через Error Boundary.

#### Компоненты:

**App** (`src/App.tsx`)
- Настройка маршрутов (`BrowserRouter`, `Routes`, `Route`)
- Ленивая загрузка страниц (`Dashboard`, `Settings`, `Profile`)
- `Suspense` с fallback-компонентом `LoadingSpinner`
- `ErrorBoundary` с fallback-сообщением

**ErrorBoundary** (`src/components/ErrorBoundary.tsx`)
- Классовый компонент для перехвата ошибок
- `getDerivedStateFromError` и `componentDidCatch`
- Кнопка сброса ошибки `Try Again`

**LoadingSpinner** (`src/components/LoadingSpinner.tsx`)
- Компонент индикации загрузки во время lazy import

**Ключевые концепции:**
- Code Splitting
- Lazy Loading
- Suspense fallback
- Error Boundary

**Запуск:**
```bash
cd Lab_7/task_1
pnpm install
pnpm dev
```

---

### Task 2 — Error Handling for Lazy Routes

**Директория:** `task_2/`

Расширение первого задания: выделенный fallback-компонент для ошибок и переиспользуемая обработка исключений.

#### Компоненты:

**App** (`src/App.tsx`)
- Маршрутизация и lazy-загрузка страниц
- `Suspense` с `LoadingSpinner`
- `ErrorBoundary` с компонентом `ErrorFallback`

**ErrorFallback** (`src/components/ErrorFallback.tsx`)
- Отдельный UI для отображения ошибок загрузки/рендера
- Используется как fallback для Error Boundary

**ErrorBoundary** (`src/components/ErrorBoundary.tsx`)
- Централизованный перехват ошибок дочерних компонентов
- Логирование и восстановление через кнопку `Try Again`

**Ключевые концепции:**
- Обработка ошибок в React
- Разделение ответственности (`ErrorBoundary` + `ErrorFallback`)
- Устойчивость SPA при runtime-ошибках

**Запуск:**
```bash
cd Lab_7/task_2
pnpm install
pnpm dev
```

## Структура проекта

```
Lab_7/
├── task_1/                  # Lazy Loading + Suspense
│   ├── src/
│   │   ├── components/
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Settings.tsx
│   │   │   └── Profile.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── task_2/                  # Error Handling + Fallback UI
│   ├── src/
│   │   ├── components/
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ErrorFallback.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Settings.tsx
│   │   │   └── Profile.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                # Этот файл
```

## Технологии

- **React 18** — библиотека для UI
- **TypeScript** — типизация проекта
- **React Router** — маршрутизация SPA
- **Vite** — быстрая сборка
- **pnpm** — менеджер пакетов

## Запуск всех проектов

```bash
# Task 1
cd Lab_7/task_1
pnpm install
pnpm dev

# Task 2
cd Lab_7/task_2
pnpm install
pnpm dev
```

## Ключевые навыки

После выполнения лабораторной работы вы будете уметь:

- Делить приложение на лениво загружаемые части
- Использовать `Suspense` для управления состоянием загрузки
- Перехватывать ошибки рендера через `ErrorBoundary`
- Создавать fallback UI для ошибок
- Повышать устойчивость интерфейса к runtime-сбоям

---

<div align="center">

**Лабораторная работа 7** | React + TypeScript

</div>
