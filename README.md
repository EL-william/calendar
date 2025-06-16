# Calendorny - Task Calendar Application

A modern task calendar application built with React, TypeScript, and SCSS modules, featuring Google-inspired design language.

## 🚀 Current Features

### Authentication Pages

- **Login Page**: Clean, professional login form with Google Material Design elements
- **Registration Page**: User-friendly registration form with validation
- **Google-Style UI**: Modern buttons, inputs, and layout inspired by Google's design language
- **Form Validation**: Real-time validation with clear error messages
- **Responsive Design**: Optimized for all screen sizes

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
├── app/              # Application configuration and entry point
├── entities/         # Business entities (auth, user, etc.)
├── features/         # Feature-specific logic (LoginForm, RegisterForm)
├── pages/            # Page components (LoginPage, RegisterPage)
├── shared/           # Shared utilities, components, and styles
│   ├── ui/           # Reusable UI components (Button, Input, AuthLayout)
│   └── styles/       # Global styles and SCSS variables
└── widgets/          # Complex UI widgets (planned for future)
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
