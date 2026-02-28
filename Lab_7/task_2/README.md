# Task 2 — Error Handling for Lazy Routes

SPA-приложение с ленивой загрузкой страниц и выделенным fallback-компонентом для ошибок.

## Описание

Проект демонстрирует:
- Ленивая загрузка маршрутов через `React.lazy`
- Показ индикатора загрузки через `Suspense`
- Обработку ошибок через `ErrorBoundary`
- Отдельный fallback-компонент `ErrorFallback`

## Компоненты

### App (`src/App.tsx`)

Главный компонент приложения:
- Настройка маршрутов с `BrowserRouter`, `Routes`, `Route`
- Ленивая загрузка страниц `Dashboard`, `Settings`, `Profile`
- `Suspense` с fallback `LoadingSpinner`
- `ErrorBoundary` с fallback `ErrorFallback`

### ErrorBoundary (`src/components/ErrorBoundary.tsx`)

Классовый компонент для перехвата ошибок рендера:
- `getDerivedStateFromError` переводит компонент в режим ошибки
- `componentDidCatch` логирует ошибку
- Кнопка `Try Again` сбрасывает состояние

### ErrorFallback (`src/components/ErrorFallback.tsx`)

Компонент резервного UI при ошибке:
- Сообщение о неуспешной загрузке страницы
- Используется как `fallback` для `ErrorBoundary`

### LoadingSpinner (`src/components/LoadingSpinner.tsx`)

Компонент состояния загрузки:
- Показывается при асинхронной загрузке lazy-страниц

### Pages (`src/pages/`)

- **Dashboard**: лениво загружаемая страница
- **Settings**: лениво загружаемая страница
- **Profile**: лениво загружаемая страница

## Ключевые концепции

- **Lazy Loading** маршрутов
- **Suspense fallback** для асинхронной загрузки
- **Error Boundary + Fallback UI**
- **Маршрутизация в SPA**

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
