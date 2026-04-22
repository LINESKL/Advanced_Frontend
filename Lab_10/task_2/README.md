# Lab 10.2 — End-to-End Testing with Playwright

**Student Name:** Нурканат Алиар  
**Date:** 22.04.2026

## E2E Testing Strategy Explanation

В данном проекте реализовано end-to-end тестирование React приложения с использованием Playwright.

Ключевые принципы E2E тестирования:

1. **Real Browser Testing**: Тесты выполняются в реальных браузерах (Chromium, Firefox, WebKit).

2. **User-Centric Approach**: Тесты симулируют реальные действия пользователя в браузере.

3. **Complete Workflows**: Проверка полных пользовательских сценариев от начала до конца.

4. **Cross-Browser Compatibility**: Тестирование на разных браузерах для обеспечения совместимости.

## Описание проекта

Todo-приложение с полным E2E тестированием:

- Добавление задач (кнопка и Enter)
- Переключение статуса выполнения
- Удаление задач
- Подсчет общего количества и выполненных задач
- Комплексные пользовательские сценарии

## Компоненты

### TodoList (`src/components/TodoList.tsx`)

Основной компонент приложения:
- **State Management**: Управление списком задач через `useState`.
- **Add Todo**: Добавление новых задач с валидацией.
- **Toggle Todo**: Переключение статуса выполнения.
- **Delete Todo**: Удаление задач из списка.
- **Keyboard Support**: Добавление задачи по нажатию Enter.

### E2E Tests (`e2e/todo.spec.ts`)

Комплексные end-to-end тесты:

**Basic Functionality Tests**:
- Отображение заголовка
- Добавление задачи через кнопку
- Добавление задачи через Enter
- Валидация пустого ввода

**Interaction Tests**:
- Переключение статуса выполнения
- Удаление задачи
- Обновление счетчика

**Workflow Tests**:
- Полный пользовательский сценарий (добавление, выполнение, удаление)
- Работа с множественными задачами

## Ключевые концепции

- **Playwright**: Современный фреймворк для E2E тестирования.
- **Cross-Browser Testing**: Тестирование в Chromium, Firefox, WebKit.
- **Page Object Pattern**: Использование локаторов для надежного доступа к элементам.
- **Web Server Integration**: Автоматический запуск dev сервера перед тестами.
- **Visual Testing**: Проверка видимости элементов и CSS классов.

## Структура тестов

```typescript
test.describe('TodoList E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should display todo list heading', async ({ page }) => {
    // E2E тест
  });

  test('complete user workflow', async ({ page }) => {
    // Комплексный сценарий
  });
});
```

## Playwright Configuration

```typescript
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
```

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Установка браузеров Playwright
npx playwright install

# Запуск dev сервера
npm run dev

# Запуск E2E тестов
npm run test:e2e

# Запуск тестов с UI
npm run test:e2e:ui

# Просмотр отчета
npm run test:e2e:report
```

## Технологии

- React 19
- TypeScript
- Vite 8
- Playwright 1.59
- Testing across Chromium, Firefox, WebKit
