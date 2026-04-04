<div align="center">

# Lab 11 — React Native Fundamentals

### Core Components, Styling, Lists, and Navigation

</div>

## Описание

Лабораторная работа посвящена основам разработки кроссплатформенных мобильных приложений (iOS и Android) с использованием фреймворков React Native и Expo. Включает два практических задания: создание базовых экранов со статичным контентом и формами ввода, а также реализацию полноценного каталога товаров со сложными списками и стековой навигацией.

## Цели обучения

- Инициализация и запуск мобильных проектов через **Expo CLI**
- Понимание отличий мобильного рендеринга от браузерного DOM (Web vs Native)
- Использование базовых компонентов: `<View>`, `<Text>`, `<Image>`, `<TextInput>`
- Стилизация интерфейсов с помощью `StyleSheet` и мобильного Flexbox
- Использование `<FlatList>` для оптимизированного вывода длинных списков
- Построение переходов между экранами с помощью **React Navigation**
- Написание платформозависимого кода через `Platform.select()`

---

## Теоретическая справка (React Native vs Web)

Главное отличие React Native от обычного React заключается в том, что он не использует HTML-теги и CSS. При сборке компоненты транслируются в настоящие нативные элементы ОС.

| Aspect | Web (React) | React Native |
| :--- | :--- | :--- |
| **Renderer** | DOM | Native OS components |
| **Components** | `<div>`, `<span>`, `<p>` | `<View>`, `<Text>`, `<TextInput>` |
| **Styling** | CSS classes / Inline | `StyleSheet` API (JavaScript Objects) |
| **Layout** | CSS Flexbox / Grid | StyleSheet Flexbox (по умолчанию `column`) |
| **Events** | `onClick`, `onChange` | `onPress`, `onChangeText` |

---

## Задания

### Task 1 — Expo Setup and Core Components

**Директория:** `task1/`

Мобильное приложение-визитка, демонстрирующее работу базовых компонентов React Native и обработку ввода с клавиатуры.

#### Компоненты:
- **ProfileCard**: Статичная карточка профиля пользователя с изображением и текстовыми полями.
- **ContactSection**: Интерактивная форма обратной связи. Кнопка отправки (`TouchableOpacity`) заблокирована, пока не будут введены Email, Телефон и Сообщение.

**Ключевые концепции:**
- Базовые компоненты UI
- Эмуляция CSS через `StyleSheet.create`
- Управление состоянием (state) текстовых полей

**Запуск:**
```bash
cd task1
npm install
npx expo start
```

---

### Task 2 — Lists, Navigation, and Platform-Specific Code

**Директория:** `task2/`

Каталог товаров, демонстрирующий работу с большими списками и стековой навигацией (Stack Navigation), при которой новые экраны открываются поверх предыдущих.

#### Компоненты:
- **ProductListScreen**: Главный экран. Использует `<FlatList>` для оптимизированного и виртуализированного вывода моковых продуктов. Включает функцию "Pull-to-refresh".
- **ProductItem**: Компонент отдельной карточки товара в списке.
- **ProductDetailScreen**: Экран подробной информации о товаре, принимающий параметры маршрута (`route.params`). Включает кнопку, стилизованную по-разному для iOS (тени) и Android (elevation).

**Ключевые концепции:**
- React Navigation (Native Stack)
- Виртуализация списков (`FlatList`)
- Платформозависимый код (`Platform.OS`, `Platform.select`)

**Запуск:**
```bash
cd task2
npm install
npx expo start
```

---

## Структура проекта

```text
Lab_11/
├── task1/                   # Core Components & Styling
│   ├── src/
│   │   └── components/
│   │       ├── ProfileCard.tsx
│   │       └── ContactSection.tsx
│   ├── App.tsx              # Сборка экрана профиля
│   ├── package.json
│   └── tsconfig.json
│
├── task2/                   # Navigation & Lists
│   ├── src/
│   │   ├── components/
│   │   │   └── ProductItem.tsx
│   │   ├── data/
│   │   │   └── products.ts
│   │   └── screens/
│   │       ├── ProductListScreen.tsx
│   │       └── ProductDetailScreen.tsx
│   ├── App.tsx              # Настройка NavigationContainer
│   ├── package.json
│   └── tsconfig.json
│
├── AI_REPORT.md             # Отчет об использовании AI
└── README.md                # Этот файл
```

## Технологии

- **React Native** — фреймворк для кроссплатформенной разработки
- **Expo** — набор инструментов и сервисов вокруг React Native
- **TypeScript** — строгая типизация
- **React Navigation** — библиотека маршрутизации для нативных приложений

## Запуск всех проектов

```bash
# Task 1
cd task1
npm install
npx expo start

# Task 2 (в новом окне терминала)
cd task2
npm install
npx expo start
```

---

<div align="center">

**Лабораторная работа 11** | React Native + TypeScript

</div>
