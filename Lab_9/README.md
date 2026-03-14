<div align="center">

# Lab 9 — Performance Optimization

### Memoization and Virtualization

</div>

## Описание

Лабораторная работа посвящена методам оптимизации производительности в React-приложениях. Включает два практических задания: реализацию мемоизации компонентов и функций для предотвращения лишних рендеров, а также использование виртуализации для эффективного отображения больших списков.

## Цели обучения

- Использование `React.memo` для предотвращения ререндера компонентов
- Применение `useMemo` для кеширования результатов ресурсоемких вычислений
- Использование `useCallback` для сохранения ссылок на функции
- Работа с `react-window` для виртуализации длинных списков
- Оптимизация First Contentful Paint (FCP) и плавности интерфейса

## Задания

### Task 1 — Memoization with React.memo, useMemo, useCallback

**Директория:** `task_1/`

SPA-приложение с дашбордом, демонстрирующим проблему "водопада рендеров" и её решение с помощью мемоизации.

#### Компоненты:

- **Dashboard**: Корневой компонент, хранящий состояние приложения.
- **UserCard**: Компонент профиля пользователя, обернутый в `React.memo`.
- **AnalyticsChart**: Компонент с тяжелыми вычислениями, оптимизированный через `useMemo`.
- **Button**: Мемоизированный компонент кнопки, принимающий колбек через `useCallback`.

**Ключевые концепции:**
- Reference equality (ссылочная идентичность)
- Предотвращение лишних рендеров
- Профилирование производительности (React DevTools)

**Запуск:**
```bash
cd Lab_9/task_1
pnpm install
pnpm dev
```

---

### Task 2 — Virtualization for Large Lists

**Директория:** `task_2/`

Приложение для работы со списками из 10 000 элементов со встроенной фильтрацией и виртуализацией.

#### Компоненты:

- **RegularList**: Обычный список (демонстрация проблем с производительностью).
- **VirtualList**: Оптимизированный список с использованием `FixedSizeList` из `react-window`.
- Утилита `generateItems` для создания моковых данных.

**Ключевые концепции:**
- Виртуализация скроллинга (Windowing)
- Управление DOM-узлами
- Мемоизация фильтров поиска (`useMemo`)

**Запуск:**
```bash
cd Lab_9/task_2
pnpm install
pnpm dev
```

## Структура проекта

```
Lab_9/
├── task_1/                  # React.memo, useMemo, useCallback
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── UserCard.tsx
│   │   │   ├── AnalyticsChart.tsx
│   │   │   └── Button.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── task_2/                  # Virtualization with react-window
│   ├── src/
│   │   ├── components/
│   │   │   ├── RegularList.tsx
│   │   │   └── VirtualList.tsx
│   │   ├── utils/
│   │   │   └── generateItems.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                # Этот файл
```

## Технологии

- **React 18** — библиотека для UI
- **TypeScript** — типизация проекта
- **Vite** — быстрая сборка
- **react-window** — виртуализация списков
- **pnpm** — менеджер пакетов

## Запуск всех проектов

```bash
# Task 1
cd Lab_9/task_1
pnpm install
pnpm dev

# Task 2
cd Lab_9/task_2
pnpm install
pnpm dev
```

---

<div align="center">

**Лабораторная работа 9** | React + TypeScript

</div>
