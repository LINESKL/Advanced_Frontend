# Task 1 — Lazy Loading with Suspense

Базовое SPA-приложение с ленивой загрузкой страниц и обработкой ошибок через Error Boundary.

## Описание

Проект демонстрирует:
- Ленивая загрузка страниц через `React.lazy`
- Отображение состояния загрузки через `Suspense`
- Глобальную обработку ошибок рендера через `ErrorBoundary`
- Навигацию между страницами через `react-router-dom`

## Компоненты

### App (`src/App.tsx`)

Главный компонент приложения:
- Настройка маршрутов с `BrowserRouter`, `Routes`, `Route`
- Ленивая загрузка страниц `Dashboard`, `Settings`, `Profile`
- Обертка маршрутов в `Suspense` с fallback `LoadingSpinner`
- Обертка контента в `ErrorBoundary` с fallback UI

### ErrorBoundary (`src/components/ErrorBoundary.tsx`)

Классовый компонент для перехвата ошибок:
- `getDerivedStateFromError` переключает состояние ошибки
- `componentDidCatch` логирует детали ошибки
- Кнопка `Try Again` сбрасывает состояние ошибки

### LoadingSpinner (`src/components/LoadingSpinner.tsx`)

UI-компонент для индикации загрузки:
- Показывается во время загрузки lazy-компонентов
- Используется как fallback в `Suspense`

### Pages (`src/pages/`)

- **Dashboard**: лениво загружаемая страница
- **Settings**: лениво загружаемая страница
- **Profile**: лениво загружаемая страница

## Ключевые концепции

- **Code Splitting** через `React.lazy`
- **Fallback UI** через `Suspense`
- **Error Boundary** для перехвата runtime-ошибок
- **Client-side routing** через `react-router-dom`

## Установка и запуск

```bash
# Установка зависимостей
pnpm install

# Запуск dev сервера
pnpm dev

# Сборка для production
pnpm build
```

## Технологии

- React 18
- TypeScript
- React Router
- Vite
- pnpm
