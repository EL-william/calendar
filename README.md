# Calendorny - Task Calendar Application

Современное приложение-календарь задач, построенное на React, TypeScript и SCSS модулях с минималистичным дизайном.

## 🚀 Текущий функционал

### Страницы аутентификации

- **Страница входа**: Чистая, профессиональная форма входа с русским интерфейсом
- **Страница регистрации**: Удобная форма регистрации с валидацией
- **Минималистичный UI**: Современные кнопки, поля ввода и макет
- **Валидация форм**: Валидация в реальном времени с понятными сообщениями об ошибках
- **Адаптивный дизайн**: Оптимизировано для всех размеров экранов

## 🛠 Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **SCSS Modules** for component-scoped styling
- **React Router 6** for client-side routing
- **React Query** for data fetching
- **Google Fonts** (Google Sans & Roboto)

## 📁 Project Structure

The project follows Feature-Sliced Design (FSD) architecture:

```
src/
├── app/              # Конфигурация приложения и точка входа
├── entities/         # Бизнес-сущности (auth, user, и т.д.)
├── features/         # Логика функций (LoginForm, RegisterForm)
├── pages/            # Компоненты страниц (LoginPage, RegisterPage)
├── shared/           # Общие утилиты, компоненты и стили
│   ├── ui/           # Переиспользуемые UI компоненты (Button, Input, AuthLayout)
│   └── styles/       # Глобальные стили и SCSS переменные
└── widgets/          # Сложные UI виджеты (планируются в будущем)
```

## 🎨 Design System

The application uses a Google Material Design-inspired design system with:

- **Color Palette**: Google Blue primary color with semantic colors for success, error, etc.
- **Typography**: Google Sans and Roboto font families
- **Spacing**: Consistent spacing scale from 4px to 48px
- **Components**: Modern, accessible UI components with hover and focus states
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Development

### Prerequisites

- Node.js 16+
- npm, yarn, or pnpm

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Run type checking:

```bash
npm run typecheck
```

### Available Routes

- `/` - Redirects to login page
- `/login` - User login page
- `/register` - User registration page
- `/dashboard` - Dashboard placeholder (coming soon)

### Demo Credentials

For testing the login functionality:

- **Email**: demo@calendorny.com
- **Password**: Demo123!

## 🎯 Next Steps

The current implementation includes only the authentication pages. Planned features include:

1. **Dashboard**: Main application dashboard
2. **Calendar View**: Monthly/weekly calendar with task management
3. **Task Management**: Create, edit, and organize tasks
4. **State Management**: Redux/Zustand for application state
5. **API Integration**: Backend integration for authentication and data persistence
6. **Testing**: Unit and integration tests
7. **PWA Features**: Offline support and installability

## 🏗 Architecture Decisions

- **SCSS Modules**: Chosen for component-scoped styling and better maintainability
- **Feature-Sliced Design**: Provides clear separation of concerns and scalability
- **TypeScript**: Ensures type safety and better developer experience
- **React Query**: Ready for future API integration
- **Modern CSS**: Flexbox, CSS Grid, and CSS custom properties for responsive design

## 📝 Notes

- The application is currently in development phase with placeholder authentication
- All forms include comprehensive validation and error handling
- The design is fully responsive and accessible
- SCSS variables are automatically imported in all module files via Vite configuration
