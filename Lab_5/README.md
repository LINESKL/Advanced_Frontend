<div align="center">

# Lab 5 — React + TypeScript: Props and Lists

### Typed Props, Children, Lists, Search Filtering

</div>

## Описание

Лабораторная работа посвящена работе с типизированными props в React + TypeScript. Включает два практических задания: карточку пользователя и список навыков, а также поиск пользователей по имени с фильтрацией данных.

## Цели обучения

- Типизация props и children
- Использование optional props
- Объявление интерфейсов и union types
- Отображение списков данных
- Условный рендеринг
- Работа с состоянием и фильтрацией
- Обработка событий ввода

## Задания

### Task 1 — User Card and Skill List

**Директория:** `task_1/`

Создание карточки пользователя и списка навыков с типизацией данных и props.

#### Компоненты:

**UserCard** (`src/components/UserCard.tsx`)
- Получает `user`, `isActive` и `children`
- Отображает имя, email и возраст пользователя
- `isActive` управляет прозрачностью карточки
- Демонстрация типизации `children: React.ReactNode`

**SkillList** (`src/components/SkillList.tsx`)
- Получает массив навыков `skills`
- Отображает список с цветовой индикацией уровня
- Использует тип `SkillLevel` для строгой типизации

**types.ts** (`src/types.ts`)
- Интерфейсы `User`, `Skill`
- Union type `SkillLevel`

**Ключевые концепции:**
- Типизированные props
- Optional props (`isActive?`)
- `children` в TypeScript
- Union types
- Рендеринг списков

**Запуск:**
```bash
cd Lab_5/task_1
pnpm install
pnpm dev
```

---

### Task 2 — User Search with Filtering

**Директория:** `task_2/`

Приложение с поиском пользователей по имени и фильтрацией списка в реальном времени.

#### Компоненты:

**SearchApp** (`src/components/SearchApp.tsx`)
- Исходные данные пользователей
- Состояния: `users`, `filteredUsers`, `searchTerm`
- Фильтрация по имени с `toLowerCase()`
- Очистка поиска и сброс списка
- Условный рендеринг при отсутствии результатов

**UserCard** (`src/components/UserCard.tsx`)
- Переиспользуемая карточка пользователя
- Встраиваемый контент через `children`

**Ключевые концепции:**
- useState с типизацией
- Фильтрация массивов
- Controlled input
- Условный рендеринг
- Переиспользование компонентов

**Запуск:**
```bash
cd Lab_5/task_2
pnpm install
pnpm dev
```

## Структура проекта

```
Lab_5/
├── task_1/                  # User Card + Skills
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserCard.tsx
│   │   │   └── SkillList.tsx
│   │   ├── types.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── task_2/                  # User Search
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchApp.tsx
│   │   │   └── UserCard.tsx
│   │   ├── types.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                # Этот файл
```

## Технологии

- **React 18** — библиотека для создания UI
- **TypeScript** — типизированный JavaScript
- **Vite** — быстрый сборщик проектов
- **pnpm** — менеджер пакетов

## Запуск всех проектов

```bash
# Task 1
cd Lab_5/task_1
pnpm install
pnpm dev

# Task 2
cd Lab_5/task_2
pnpm install
pnpm dev
```

## Ключевые навыки

После выполнения лабораторной работы вы будете уметь:

- Типизировать props и children
- Создавать интерфейсы данных
- Использовать union types
- Рендерить списки в React
- Реализовывать фильтрацию и поиск
- Управлять состоянием в TypeScript
- Переиспользовать компоненты

---

<div align="center">

**Лабораторная работа 5** | React + TypeScript

</div>
