# Task 2 — User Search with Filtering

Поиск пользователей по имени с фильтрацией данных в реальном времени.

## Описание

Проект демонстрирует:
- Типизированные состояния в React
- Фильтрацию массива по строке поиска
- Контролируемый input
- Условный рендеринг результатов
- Переиспользование компонентов

## Компоненты

### SearchApp (`src/components/SearchApp.tsx`)

Главный компонент приложения:
- Инициализация массива пользователей
- Состояния: `users`, `filteredUsers`, `searchTerm`
- Фильтрация по имени (`includes` + `toLowerCase`)
- Очистка поиска и сброс списка

**Состояние:**
```typescript
const [users] = useState<User[]>(INITIAL_DATA);
const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
const [searchTerm, setSearchTerm] = useState<string>("");
```

**Фильтрация:**
```typescript
const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  const term = event.target.value;
  setSearchTerm(term);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(term.toLowerCase())
  );
  setFilteredUsers(filtered);
};
```

### UserCard (`src/components/UserCard.tsx`)

Переиспользуемая карточка пользователя:
- Props: `user`, `children`, `isActive?`
- Используется как в профиле, так и в результатах поиска

## Ключевые концепции

- **useState с типизацией**
- **Фильтрация массива**
- **Controlled input**
- **Условный рендеринг**
- **Переиспользование компонентов**

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
- Поиск по email
- Дебаунсинг ввода
- Подсветка совпадений в имени
- Сохранение последнего запроса в localStorage
