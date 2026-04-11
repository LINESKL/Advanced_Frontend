<div align="center">

# Lab 13 — React Navigation Deep Dive

### Stack Navigation and Tab Navigation

</div>

## Описание

Лабораторная работа посвящена углубленному изучению маршрутизации в мобильных приложениях с использованием библиотеки **React Navigation**. Включает два практических задания: реализацию стековой навигации с передачей параметров между экранами, а также создание многоуровневой архитектуры с вкладками (Tabs) и вложенными стеками (Nested Stacks).

## Цели обучения

- Инициализация мобильных проектов через **Expo CLI** без Expo Router (ручная настройка)
- Построение стековой навигации с помощью `@react-navigation/native-stack`
- Передача параметров между экранами через `route.params`
- Типизация маршрутов с использованием `ParamList` и TypeScript
- Создание вложенной навигации (Tabs внутри Stack и наоборот)
- Кастомизация внешнего вида заголовков и таб-бара

---

## Теоретическая справка (React Navigation vs Expo Router)

В React Native существует два основных подхода к маршрутизации:

| Aspect | React Navigation | Expo Router |
| :--- | :--- | :--- |
| **Подход** | Declarative (JSX-based) | File-based routing |
| **Контроль** | Полный контроль в одном файле | Структура папок определяет маршруты |
| **Entry Point** | `App.tsx` или `index.js` | `app/_layout.tsx` |
| **Гибкость** | Легко менять структуру кодом | Жесткая привязка к файловой системе |

В данной работе используется **React Navigation** для явного контроля над структурой навигации.

---

## Задания

### Task 1 — Stack Navigation and Parameter Passing

**Директория:** `task_1/`

Мобильное приложение, демонстрирующее работу стековой навигации (Stack Navigation), при которой новые экраны открываются поверх предыдущих, образуя «стопку».

#### Компоненты и экраны:
- **HomeScreen**: Главный экран с приветствием и кнопками перехода на другие экраны.
- **ProfileScreen**: Экран профиля, принимающий параметр `userId` для динамической загрузки данных.
- **SettingsScreen**: Экран настроек.

**Ключевые концепции:**
- Стек экранов (`NativeStackNavigator`)
- Типизация параметров маршрута (`RootStackParamList`)
- Передача данных (`navigation.navigate('Profile', { userId: '123' })`)
- Получение данных (`route.params`)
- Кастомизация заголовка (`headerStyle`, `headerTintColor`)

**Запуск:**
```bash
cd Lab_13/task_1
npm install
npx expo start --web
```

---

### Task 2 — Tab Navigation with Nested Stacks

**Директория:** `task_2/`

Приложение, имитирующее структуру типичной социальной сети или мессенджера с нижней панелью навигации (Bottom Tabs) и отдельными стеками для каждой вкладки.

#### Компоненты и экраны:
- **HomeTab**: Главный экран со статистикой и быстрыми ссылками. Вложенный стек позволяет переходить к профилю и настройкам.
- **SearchTab**: Экран поиска с полем ввода.
- **NotificationsTab**: Экран уведомлений со списком событий и бейджем (счетчиком) на иконке вкладки.
- **ProfileTab**: Экран профиля с информацией о пользователе.

**Ключевые концепции:**
- Нижняя навигация (`createBottomTabNavigator`)
- Вложенные навигаторы (Nested Navigators)
- Иконки вкладок (`@expo/vector-icons`)
- Бейджи на вкладках
- Разделение логики на стеки и табы

**Запуск:**
```bash
cd Lab_13/task_2
npm install
npx expo start --web
```

---

## Структура проекта

```text
Lab_13/
├── task_1/                  # Stack Navigation
│   ├── src/
│   │   ├── navigation/
│   │   │   └── types.ts
│   │   └── screens/
│   │       ├── HomeScreen.tsx
│   │       ├── ProfileScreen.tsx
│   │       └── SettingsScreen.tsx
│   ├── index.js             # Entry point
│   ├── App.tsx              # Main Navigation Setup
│   ├── app.json
│   └── package.json
│
├── task_2/                  # Tab Navigation with Nested Stacks
│   ├── src/
│   │   ├── navigation/
│   │   │   ├── AppNavigator.tsx
│   │   │   └── types.ts
│   │   └── screens/
│   │       ├── HomeScreen.tsx
│   │       ├── SearchScreen.tsx
│   │       ├── NotificationsScreen.tsx
│   │       ├── ProfileScreen.tsx
│   │       └── SettingsScreen.tsx
│   ├── index.js             # Entry point
│   ├── app.json
│   └── package.json
│
└── README.md                # Этот файл
```

## Технологии

- **React Native** — фреймворк для кроссплатформенной разработки
- **Expo** — набор инструментов и сервисов вокруг React Native
- **React Navigation** — библиотека маршрутизации для нативных приложений
- **TypeScript** — строгая типизация маршрутов и параметров

## Запуск всех проектов

```bash
# Task 1
cd Lab_13/task_1
npm install
npx expo start --web

# Task 2 (в новом окне терминала)
cd Lab_13/task_2
npm install
npx expo start --web
```

---

<div align="center">

**Лабораторная работа 13** | React Navigation + TypeScript

</div>
