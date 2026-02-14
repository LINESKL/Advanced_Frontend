# Task 1 — User Card and Skill List

Карточка пользователя и список навыков с типизацией props и данных.

## Описание

Проект демонстрирует:
- Использование интерфейсов и union types
- Типизацию props и children
- Отображение списков данных
- Условное оформление по значениям

## Компоненты

### UserCard (`src/components/UserCard.tsx`)

Компонент карточки пользователя:
- Props: `user`, `isActive`, `children`
- `isActive` управляет прозрачностью карточки
- `children` передается как вложенный контент

**Props Interface:**
```typescript
interface UserCardProps {
  user: User;
  isActive?: boolean;
  children: React.ReactNode;
}
```

### SkillList (`src/components/SkillList.tsx`)

Список навыков с цветовой индикацией уровня:
- Props: `skills: Skill[]`
- Цвет определяется функцией `getLevelColor`

**Props Interface:**
```typescript
interface SkillListProps {
  skills: Skill[];
}
```

### types.ts (`src/types.ts`)

Типы данных:

```typescript
export interface User {
  name: string;
  email: string;
  age: number;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}
```

## Ключевые концепции

- **Типизация props**
- **Optional props** (`isActive?`)
- **children в TypeScript**
- **Union types**
- **Рендеринг списков**

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
- Vite
- ESLint

## Расширения

Возможные улучшения:
- Добавить сортировку навыков по уровню
- Вынести стили в отдельный файл
- Добавить переключатель активности карточки
