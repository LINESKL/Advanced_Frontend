# Lab 11.1 — Expo Setup & Core Components

**Student Name:** Нурканат Алиар  
**Date:** 04.04.2026  

## React Native vs Web (Web Components Differences)

Главное отличие React Native от обычного React заключается в том, что он не использует браузерный DOM и HTML-теги. При сборке компоненты React Native транслируются в настоящие нативные элементы iOS и Android.

| Aspect | Web (React) | React Native |
| :--- | :--- | :--- |
| **Renderer** | DOM | Native OS components |
| **Components** | `<div>`, `<span>`, `<p>` | `<View>`, `<Text>`, `<TextInput>` |
| **Styling** | CSS classes / Inline styles | `StyleSheet` API (JS Object) |
| **Layout** | CSS Flexbox / Grid | StyleSheet Flexbox (default flex-direction is `column`) |
| **Events** | `onClick`, `onChange` | `onPress`, `onChangeText` |
| **Lists** | `.map()` inside `<ul>` | `<FlatList>`, `<SectionList>` |

## Описание проекта

Простое мобильное приложение-визитка, демонстрирующее работу базовых компонентов React Native. Включает в себя:
- **ProfileCard:** Статичная карточка профиля пользователя с изображением и текстом.
- **ContactSection:** Интерактивная форма обратной связи с проверкой на заполненность полей. Кнопка отправки заблокирована до тех пор, пока не будут введены Email, Телефон и Сообщение.

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev сервера Expo
npx expo start

# После запуска отсканируйте QR-код в приложении Expo Go на вашем телефоне
# Или нажмите 'a' для запуска Android эмулятора / 'i' для iOS симулятора
```
## Технологии
- React Native
- Expo
- TypeScript