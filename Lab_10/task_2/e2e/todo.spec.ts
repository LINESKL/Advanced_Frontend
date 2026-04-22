import { test, expect } from '@playwright/test';

test.describe('TodoList E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should display todo list heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /todo list/i })).toBeVisible();
  });

  test('should add a new todo', async ({ page }) => {
    const input = page.getByTestId('todo-input');
    const addButton = page.getByTestId('add-button');

    await input.fill('Buy groceries');
    await addButton.click();

    await expect(page.getByText('Buy groceries')).toBeVisible();
    await expect(page.getByTestId('todo-count')).toContainText('1 todos (0 completed)');
  });

  test('should add todo with Enter key', async ({ page }) => {
    const input = page.getByTestId('todo-input');

    await input.fill('Walk the dog');
    await input.press('Enter');

    await expect(page.getByText('Walk the dog')).toBeVisible();
  });

  test('should toggle todo completion', async ({ page }) => {
    const input = page.getByTestId('todo-input');
    await input.fill('Test todo');
    await input.press('Enter');

    const checkbox = page.locator('[data-testid^="todo-checkbox-"]').first();
    await checkbox.check();

    await expect(page.getByTestId('todo-count')).toContainText('1 todos (1 completed)');

    const todoItem = page.getByTestId('todo-item').first();
    await expect(todoItem).toHaveClass(/completed/);
  });

  test('should delete a todo', async ({ page }) => {
    const input = page.getByTestId('todo-input');
    await input.fill('Todo to delete');
    await input.press('Enter');

    await expect(page.getByText('Todo to delete')).toBeVisible();

    const deleteButton = page.locator('[data-testid^="delete-button-"]').first();
    await deleteButton.click();

    await expect(page.getByText('Todo to delete')).not.toBeVisible();
    await expect(page.getByTestId('todo-count')).toContainText('0 todos');
  });

  test('should not add empty todo', async ({ page }) => {
    const addButton = page.getByTestId('add-button');
    await addButton.click();

    await expect(page.getByTestId('todo-count')).toContainText('0 todos');
  });

  test('complete user workflow', async ({ page }) => {
    const input = page.getByTestId('todo-input');

    // Add first todo
    await input.fill('First task');
    await input.press('Enter');

    // Add second todo
    await input.fill('Second task');
    await input.press('Enter');

    // Add third todo
    await input.fill('Third task');
    await input.press('Enter');

    await expect(page.getByTestId('todo-count')).toContainText('3 todos (0 completed)');

    // Complete first todo
    const firstCheckbox = page.locator('[data-testid^="todo-checkbox-"]').first();
    await firstCheckbox.check();

    await expect(page.getByTestId('todo-count')).toContainText('3 todos (1 completed)');

    // Delete second todo
    const deleteButtons = page.locator('[data-testid^="delete-button-"]');
    await deleteButtons.nth(1).click();

    await expect(page.getByTestId('todo-count')).toContainText('2 todos (1 completed)');
    await expect(page.getByText('First task')).toBeVisible();
    await expect(page.getByText('Second task')).not.toBeVisible();
    await expect(page.getByText('Third task')).toBeVisible();
  });

  test('should handle multiple todos correctly', async ({ page }) => {
    const input = page.getByTestId('todo-input');
    const todos = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

    for (const todo of todos) {
      await input.fill(todo);
      await input.press('Enter');
    }

    await expect(page.getByTestId('todo-count')).toContainText('5 todos (0 completed)');

    // Complete some todos
    const checkboxes = page.locator('[data-testid^="todo-checkbox-"]');
    await checkboxes.nth(0).check();
    await checkboxes.nth(2).check();
    await checkboxes.nth(4).check();

    await expect(page.getByTestId('todo-count')).toContainText('5 todos (3 completed)');
  });
});
