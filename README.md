# Сервис генерации текстового контента

## Описание

Сервис генерации текстового контента предназначен для автоматизации создания текстов для сайтов различных тематик от текстового блога до интернет магазина Он использует передовые алгоритмы искусственного интеллекта, чтобы создавать уникальные, релевантные и читабельные тексты, которые могут быть адаптированы под различные нужды пользователей.

## Функциональность

- **Генерация контента:** Сервис способен генерировать текст на основе предварительно заданных вопросов, таких как тема.

## Запуск проекта
```
npm install - устанавливаем зависимости
npm run start - frontend проекта
Так же для запуска проекта нужно создать файл `.env` где нужно добавить API ключ со значением `APIKEY=<мой ключ>`
Может потребоваться использование VPN для полноценного тестирования сервиса
```

## Ссылка на проект и публикация в сети

Для публикации проекта в сети используется сервис [Netlify](https://www.netlify.com/).

Сервис доступен в по ссылке [контент генератор](https://content-generator-hackaton.netlify.app/)

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме(не минимизирован)

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

## Запуск линтеров (реализован только в ветке linters)
- `npm run lint` - Проверка ts, scss файлов линтером
- `npm run lint:tsx` - Проверка ts файлов линтером
- `npm run lint:tsx:fix` - Исправление ts файлов линтером
- `npm run lint:css` - Проверка scss файлов style линтером
- `npm run lint:css:fix` - Исправление scss файлов style линтером

----

## Конфигурация проекта

Для разработки проект содержит конфигурацию

`Webpack - ./config/build`

Cборщик адаптирован под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/build - конфигурция webpack

----

## Работа с данными

Взаимодействие с данными осуществляется с помощью mobx.

