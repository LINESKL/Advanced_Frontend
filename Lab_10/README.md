<div align="center">

# Lab 10 — Testing and Deployment

### Unit Testing, E2E Testing, and Production Deployment

</div>

## Описание

Лабораторная работа посвящена тестированию React-приложений и их деплою в production. Включает два практических задания: юнит-тестирование с Jest/Vitest и React Testing Library, а также E2E тестирование и деплой на Vercel/Netlify.

## Цели обучения

- Написание юнит-тестов для React компонентов
- Использование React Testing Library для тестирования UI
- Понимание Testing Pyramid (Unit → Integration → E2E)
- Симуляция пользовательских действий с `userEvent`
- Деплой приложений на production платформы
- Настройка CI/CD для автоматического тестирования

## Задания

### Task 1 — Unit Testing with Vitest and React Testing Library

**Директория:** `task_1/`

Todo-приложение с комплексным покрытием юнит-тестами.

#### Компоненты:

**TodoList** (`src/components/TodoList.tsx`)
- Управление списком задач
- Добавление, переключение и удаление задач
- Подсчет общего количества и выполненных задач
- Поддержка клавиатуры (Enter для добавления)

**Tests** (`src/components/TodoList.test.tsx`)
- Тесты рендеринга компонента
- Тесты добавления задач (кнопка и Enter)
- Тесты переключения статуса
- Тесты удаления задач
- Интеграционные тесты полного workflow

**Ключевые концепции:**
- Vitest configuration
- React Testing Library queries
- User Event simulation
- Test organization with describe/test
- Comprehensive test coverage

**Запуск:**
```bash
cd Lab_10/task_1
npm install
npm test
```

---

### Task 2 — E2E Testing and Deployment

**Директория:** `task_2/`

Расширенное приложение с E2E тестами и настройкой деплоя.

#### Компоненты:

**Application**
- Полнофункциональное Todo-приложение
- Оптимизированная production сборка
- Environment variables для разных окружений

**E2E Tests**
- Playwright или Cypress тесты
- Тестирование пользовательских сценариев
- Проверка критических путей приложения

**Deployment**
- Конфигурация для Vercel/Netlify
- Автоматический деплой из GitHub
- Environment variables setup

**Ключевые концепции:**
- End-to-End testing
- Production build optimization
- Deployment platforms
- CI/CD integration
- Environment configuration

**Запуск:**
```bash
cd Lab_10/task_2
npm install
npm run build
npm run preview
```

## Структура проекта

```
Lab_10/
├── task_1/                  # Unit Testing
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoList.tsx
│   │   │   ├── TodoList.test.tsx
│   │   │   └── TodoList.css
│   │   ├── test/
│   │   │   └── setup.ts
│   │   ├── App.tsx
│   │   └── App.css
│   ├── vitest.config.ts
│   ├── package.json
│   └── README.md
│
├── task_2/                  # E2E Testing & Deployment
│   ├── src/
│   │   └── components/
│   ├── e2e/
│   │   └── todo.spec.ts
│   ├── playwright.config.ts
│   ├── vercel.json
│   ├── package.json
│   └── README.md
│
├── AI_REPORT.md             # AI usage report
└── README.md                # This file
```

## Технологии

- **React 19** — библиотека для UI
- **TypeScript** — типизация проекта
- **Vite 8** — быстрая сборка
- **Vitest 4** — тестовый фреймворк
- **React Testing Library** — тестирование компонентов
- **Playwright/Cypress** — E2E тестирование
- **Vercel/Netlify** — платформы деплоя

## Testing Pyramid

```
        E2E Tests
       (Few, Slow)
      /            \
     /              \
    /  Integration   \
   /   Tests (Some)   \
  /____________________\
  Unit Tests (Many, Fast)
```

## Запуск всех проектов

```bash
# Task 1 - Unit Tests
cd Lab_10/task_1
npm install
npm test

# Task 2 - E2E Tests & Deploy
cd Lab_10/task_2
npm install
npm run build
npm run preview
```

## Ключевые навыки

После выполнения лабораторной работы вы будете уметь:

- Писать юнит-тесты для React компонентов
- Использовать React Testing Library для тестирования UI
- Симулировать пользовательские действия в тестах
- Организовывать тесты с помощью describe/test
- Настраивать тестовое окружение (Vitest)
- Деплоить приложения на production платформы
- Настраивать автоматическое тестирование в CI/CD

---

<div align="center">

**Лабораторная работа 10** | React Testing + Deployment

</div>
