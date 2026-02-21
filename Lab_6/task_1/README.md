# Task 1 — Basic Routing

Создание базовой структуры одностраничного приложения (SPA) с использованием React Router.

## Описание

Проект демонстрирует основы маршрутизации в React:
- Настройка путей через `createBrowserRouter`
- Использование общего макета (`Layout`)
- Рендеринг вложенных страниц через `Outlet`
- Навигация между страницами без перезагрузки браузера

## Компоненты

### Layout (`src/Layout.tsx`)

Главный макет приложения:
- Навигационная панель с ссылками `<Link />`
- Область основного контента с компонентом `<Outlet />` (куда подставляются страницы)
- Общий футер страницы

### Pages (`src/pages/`)

- **Home**: Главная страница
- **About**: Страница "О проекте"
- **NotFound**: Обработка несуществующих путей (404)

### main.tsx

Конфигурация маршрутов:
```typescript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
```

## Ключевые концепции

- **BrowserRouter**: Провайдер маршрутизации
- **Link**: Компонент для переходов без перезагрузки
- **Outlet**: Место в макете, где рендерятся дочерние маршруты
- **Catch-all route** (`*`): Маршрут для обработки ошибок 404

## Установка и запуск

```bash
# Установка зависимостей
pnpm install

# Запуск dev сервера
pnpm dev
```

## Технологии

- React 18
- TypeScript
- React Router 6/7
- Vite
- pnpm
