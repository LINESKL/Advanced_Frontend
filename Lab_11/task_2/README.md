# Lab 11.2 — Lists, Navigation, and Platform-Specific Code

**Student Name:** Нурканат Алиар  
**Date:** 04.04.2026  

## Navigation Setup Explanation

В мобильных приложениях навигация отличается от веб-маршрутизации. В данном проекте используется библиотека `@react-navigation/native-stack`.
Настройка выполнена в файле `App.tsx`:
1. **`NavigationContainer`**: Главная обертка, управляющая деревом навигации приложения и состоянием истории (аналог `BrowserRouter` в вебе).
2. **`Stack.Navigator`**: Управляет переходами между экранами по принципу "стека" (каждый новый экран кладется поверх предыдущего).
3. **`Stack.Screen`**: Определяет конкретный экран и привязывает к нему React-компонент. 
4. **Передача данных**: При клике на товар (`onPress`) вызывается метод `navigation.navigate('ProductDetail', { product })`. Данные принимаются на другом экране через хук `route.params`.

## Описание проекта

Каталог товаров, демонстрирующий работу сложных мобильных списков и навигации:
- **ProductListScreen:** Главный экран, использующий `<FlatList>` для оптимизированного вывода моковых продуктов. Включает функцию "Pull-to-refresh" (`RefreshControl`).
- **ProductDetailScreen:** Экран подробной информации о товаре, принимающий параметры маршрута.
- **Platform-specific code:** Кнопка "Add to Cart" стилизована по-разному с помощью `Platform.select`: на iOS используется свойство `shadowColor`, а на Android — `elevation`.

## Установка и запуск

```bash
# Установка зависимостей проекта и пакетов навигации
npm install
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context

# Запуск приложения
npx expo start
# После запуска отсканируйте QR-код в приложении Expo Go на вашем телефоне
```
## Технологии
- React Native & Expo
- React Navigation (Native Stack)
- TypeScript