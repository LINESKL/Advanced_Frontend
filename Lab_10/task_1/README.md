# Lab 10.1 — Unit Testing with Jest and React Testing Library

**Student Name:** Нурканат Алиар  
**Date:** 22.04.2026

## Testing Strategy Explanation

В данном проекте реализовано юнит-тестирование React компонента с использованием Vitest и React Testing Library.

Ключевые принципы тестирования:

1. **Test Behavior, Not Implementation**: Тесты проверяют поведение компонента с точки зрения пользователя, а не внутреннюю реализацию.

2. **Query Priority**: Используется правильная иерархия запросов RTL:
   - `getByRole` — предпочтительный метод (семантический доступ)
   - `getByLabelText` — для форм
   - `getByTestId` — последний вариант

3. **User Event**: Используется `@testing-library/user-event` для реалистичной симуляции действий пользователя.

4. **Comprehensive Coverage**: Тесты покрывают все основные сценарии использования компонента.

## Описание проекта

Todo-приложение с полным покрытием тестами:

- Добавление задач (кнопка и Enter)
- Переключение статуса выполнения
- Удаление задач
- Подсчет общего количества и выполненных задач
- Валидация ввода (пустые строки, пробелы)

## Компоненты

### TodoList (`src/components/TodoList.tsx`)

Основной компонент приложения:
- **State Management**: Управление списком задач через `useState`.
- **Add Todo**: Добавление новых задач с валидацией.
- **Toggle Todo**: Переключение статуса выполнения.
- **Delete Todo**: Удаление задач из списка.
- **Keyboard Support**: Добавление задачи по нажатию Enter.

### Tests (`src/components/TodoList.test.tsx`)

Комплексные тесты компонента:

**Rendering Tests**:
- Рендеринг пустого списка
- Рендеринг с начальными данными

**Adding Todos Tests**:
- Добавление через кнопку
- Добавление через Enter
- Валидация пустых строк
- Обрезка пробелов

**Toggling Todos Tests**:
- Переключение статуса
- Применение CSS класса `completed`

**Deleting Todos Tests**:
- Удаление задачи
- Обновление счетчика

**Integration Tests**:
- Полный workflow: добавление, переключение, удаление

## Ключевые концепции

- **Vitest**: Современный тестовый фреймворк для Vite проектов.
- **React Testing Library**: Тестирование компонентов с точки зрения пользователя.
- **User Event**: Реалистичная симуляция пользовательских действий.
- **Test Coverage**: Покрытие всех основных сценариев использования.
- **data-testid**: Использование для надежных запросов элементов.

## Структура тестов

```typescript
describe("TodoList Component", () => {
  describe("Rendering", () => {
    test("renders empty todo list", () => {
      // Тест рендеринга
    });
  });

  describe("Adding Todos", () => {
    test("adds a new todo when clicking Add button", async () => {
      // Тест добавления
    });
  });

  // ... другие группы тестов
});
```

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Запуск тестов
npm test

# Запуск тестов с UI
npm run test:ui

# Запуск тестов с coverage
npm run test:coverage
```

## Технологии

- React 19
- TypeScript
- Vite 8
- Vitest 4
- React Testing Library
- @testing-library/user-event
