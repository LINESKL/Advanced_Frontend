<div align="center">

# Lab 14 — React Native Performance

### FlatList Optimization and Form Handling

</div>

## Описание

Лабораторная работа посвящена оптимизации производительности в React Native приложениях. Включает два практических задания: реализацию оптимизированного списка контактов с использованием FlatList и создание формы регистрации с валидацией и управлением клавиатурой.

## Цели обучения

- Оптимизация рендеринга больших списков с помощью FlatList
- Использование `getItemLayout`, `keyExtractor`, `useCallback` для производительности
- Реализация pull-to-refresh функционала
- Работа с формами и валидацией в React Native
- Управление клавиатурой с помощью KeyboardAvoidingView
- Применение SafeAreaView для корректного отображения на разных устройствах

## Задания

### Task 1 — Optimized Contact List with FlatList

**Директория:** `task_1/`

Приложение со списком из 100 контактов университета с оптимизированным рендерингом и pull-to-refresh.

#### Компоненты:

- **ContactsScreen**: Главный экран со списком контактов.
- **Contact Item**: Элемент списка с аватаром, именем и email.
- Утилита `generateContacts` для создания моковых данных.

**Ключевые концепции:**
- Оптимизация FlatList (getItemLayout, keyExtractor, windowSize)
- Pull-to-refresh функционал
- Мемоизация рендер-функций с useCallback
- SafeAreaView для безопасных зон экрана

**Запуск:**
```bash
cd Lab_14/task_1
npm install
npm start
```

---

### Task 2 — Registration Form with Validation

**Директория:** `task_2/`

Форма регистрации с валидацией email, управлением клавиатурой и адаптивным поведением.

#### Компоненты:

- **RegistrationScreen**: Экран регистрации с тремя полями ввода.
- Валидация email в реальном времени.
- Адаптивное поведение клавиатуры для iOS/Android.

**Ключевые концепции:**
- KeyboardAvoidingView для разных платформ
- Валидация форм с регулярными выражениями
- Управление состоянием формы
- Dismiss клавиатуры при тапе вне полей

**Запуск:**
```bash
cd Lab_14/task_2
npm install
npm start
```

## Структура проекта

```
Lab_14/
├── task_1/                  # FlatList Optimization
│   ├── src/
│   │   ├── screens/
│   │   │   └── ContactScreen.tsx
│   │   ├── utils/
│   │   │   └── mockData.ts
│   │   └── types.ts
│   ├── App.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── task_2/                  # Registration Form
│   ├── src/
│   │   └── screens/
│   │       ├── ContactsScreen.tsx
│   │       └── RegistrationsScreen.tsx
│   ├── App.tsx
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                # Этот файл
```

## Технологии

- **React Native 0.81** — фреймворк для мобильной разработки
- **Expo ~54** — инструменты для React Native
- **TypeScript** — типизация проекта
- **react-native-safe-area-context** — управление безопасными зонами
- **npm** — менеджер пакетов

## Запуск всех проектов

```bash
# Task 1
cd Lab_14/task_1
npm install
npm start

# Task 2
cd Lab_14/task_2
npm install
npm start
```

## Тестирование

Для тестирования приложений используйте:
- **Expo Go** на физическом устройстве
- **iOS Simulator** (macOS)
- **Android Emulator**

---

<div align="center">

**Лабораторная работа 14** | React Native + TypeScript

</div>
