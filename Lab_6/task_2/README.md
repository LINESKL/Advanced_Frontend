# Task 2 — Advanced Routing and Data Loading

Каталог курсов с динамическими путями, предварительной загрузкой данных и синхронизацией состояния с URL.

## Описание

Проект демонстрирует продвинутые возможности React Router:
- Динамические параметры пути (`:id`)
- Использование `loader` для получения данных до рендеринга
- Управление параметрами поиска (`query strings`) через `useSearchParams`
- Обработка ошибок загрузки через `errorElement`

## Компоненты

### Courses (`src/pages/Courses.tsx`)

Страница со списком курсов:
- Использует `useSearchParams` для реализации сортировки (asc/desc)
- Состояние сортировки сохраняется в URL: `?sort=asc`
- Автоматически сортирует список курсов при изменении параметра в URL

### CourseDetail (`src/pages/CourseDetail.tsx`)

Страница деталей курса:
- Получает ID из параметров пути через `useParams`
- Получает данные курса через хук `useLoaderData`
- Демонстрирует работу типизированных загрузчиков

### data.ts

Слой данных:
- Интерфейс `Course`
- Моковые данные (массив курсов)
- Функция `getCourseById` для поиска курса

### main.tsx (Конфигурация)

Настройка роутера с загрузчиками:
```typescript
{
  path: "courses/:id",
  element: <CourseDetail />,
  errorElement: <p style={{ color: 'red' }}>Course not found!</p>,
  loader: async ({ params }) => {
    const course = getCourseById(Number(params.id));
    if (!course) throw new Error("Not found");
    return { course };
  },
}
```

## Ключевые концепции

- **Dynamic Routes**: Маршруты с переменными частями
- **Loaders**: Функция, выполняющаяся перед переходом на маршрут
- **useLoaderData**: Хук для доступа к данным из загрузчика
- **useSearchParams**: Хук для чтения и записи query-параметров
- **errorElement**: Компонент-заглушка для ошибок внутри маршрута

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
