# 🎯 Next-bio

Это мой тестовый проект, созданный на Next.js 15 для понимания современных концепций React-фреймворков. Простой сайт-визитка, который показывает мой профиль разработчика

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)

## 🛠 Технологический стек

| 🚀 Технология | 📝 Назначение | 📦 Версия |
|:-------------:|:-------------:|:---------:|
| **Next.js** | React фреймворк | `16.0+` |
| **TypeScript** | Статическая типизация | `5.0+` |
| **React** | UI библиотека | `19.0+` |

## 📁 Структура проекта

```
next-bio/
├── app/                    # App Router директория
│   ├── components/         # React компоненты
│   │   ├── Header.tsx     # Шапка с аватаркой
│   │   ├── About.tsx      # Обо мне
│   │   ├── Skills.tsx     # Навыки и технологии
│   │   └── Contact.tsx    # Контакты
│   ├── hooks/             # Кастомные хуки
│   │   └── useScrollAnimation.ts
│   ├── layout.tsx         # Корневой layout
│   ├── page.tsx           # Главная страница
│   └── globals.css        # Глобальные стили
└── public/                # Статические файлы
    └── avatar.jpg         # Аватарка
```

## 🚀 Быстрый старт

### Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/woookle/next-bio.git

# Переход в директорию
cd next-bio

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Скрипты

```bash
npm run dev          # Разработка
npm run build        # Сборка
npm run start        # Продакшен
npm run lint         # Проверка кода
```

---

<br />

<div>
  <p align='center'>
    <img src='https://media1.tenor.com/m/oKZVauJ1LWEAAAAd/anime-fern.gif' />
  </p>
  <h2 align='center'>хорошего дня 😊</h2>
</div>