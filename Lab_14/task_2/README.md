# Lab 14.2 — Registration Form with Validation

**Student Name:** Нурканат Алиар  
**Date:** 18.04.2026

## Keyboard Handling and Form Validation Explanation

В мобильных приложениях управление клавиатурой и валидация форм требуют особого подхода, отличного от веб-разработки.

Ключевые концепции в данном проекте:

1. **`KeyboardAvoidingView`**: Автоматически сдвигает контент вверх при появлении клавиатуры. Поведение различается для платформ:
   - **iOS**: `behavior="padding"` — добавляет padding снизу.
   - **Android**: `behavior="height"` — изменяет высоту контейнера.
   - `keyboardVerticalOffset` компенсирует высоту заголовка навигации.

2. **`TouchableWithoutFeedback`**: Оборачивает весь экран для обработки тапов вне полей ввода. При тапе вызывается `Keyboard.dismiss()`, закрывая клавиатуру.

3. **Real-time Validation**: Валидация email происходит при каждом изменении текста (`onChangeText`). Используется регулярное выражение `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` для проверки формата.

4. **Conditional Styling**: При ошибке валидации поле ввода меняет стиль (красная рамка, розовый фон), а под полем появляется текст ошибки.

5. **Button State**: Кнопка "Create Account" активна только когда:
   - Email и пароль заполнены
   - Email прошел валидацию (нет ошибок)
   - Визуально неактивная кнопка имеет светлый цвет и отключенную тень.

## Описание проекта

В данном проекте реализована форма регистрации с тремя полями ввода (имя, email, пароль), валидацией email в реальном времени и адаптивным поведением клавиатуры для iOS и Android. Форма включает визуальную индикацию ошибок и блокировку кнопки при невалидных данных.

Проект демонстрирует:
- Валидацию email с помощью регулярных выражений.
- Управление состоянием формы через `useState`.
- Адаптивное поведение клавиатуры с `KeyboardAvoidingView`.
- Закрытие клавиатуры при тапе вне полей ввода.
- Условное отключение кнопки при невалидной форме.

## Компоненты

### RegistrationScreen (`src/screens/RegistrationsScreen.tsx`)

Главный экран регистрации:
- Три поля ввода: Full Name, ALMAU Email, Secure Password.
- Валидация email в реальном времени с отображением ошибки.
- Кнопка "Create Account" активна только при валидных данных.
- Адаптивное поведение при появлении клавиатуры (iOS/Android).
- Закрытие клавиатуры при тапе вне полей или нажатии кнопки.

### ContactsScreen (`src/screens/ContactsScreen.tsx`)

Альтернативный экран со списком контактов (для переключения в App.tsx).

## Ключевые концепции

- **Form Validation**: валидация полей формы с использованием регулярных выражений.
- **KeyboardAvoidingView**: адаптивное поведение контента при появлении клавиатуры с учетом платформы.
- **TouchableWithoutFeedback**: закрытие клавиатуры при тапе вне полей ввода.
- **Conditional Styling**: динамическое изменение стилей при ошибках валидации.
- **Button State Management**: управление состоянием кнопки (активна/неактивна).

## Логика валидации

```typescript
// Email валидация
const validateEmail = (text: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setForm({ ...form, email: text });
  if (!emailRegex.test(text) && text.length > 0) {
    setErrors({ email: 'Invalid Student Email format' });
  } else {
    setErrors({ email: '' });
  }
};

// Условие активации кнопки
disabled={!form.email || !form.password || errors.email !== ''}
```

## Адаптивность клавиатуры

```typescript
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
>
```

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm start

# Запуск на iOS
npm run ios

# Запуск на Android
npm run android
```

## Переключение экранов

В файле `App.tsx` можно переключаться между экранами:

```typescript
// Для отображения формы регистрации
return <RegistrationScreen />;

// Для отображения списка контактов
// return <ContactsScreen />;
```

## Технологии

- React Native 0.81
- Expo ~54
- TypeScript
- KeyboardAvoidingView
- ScrollView
- npm
