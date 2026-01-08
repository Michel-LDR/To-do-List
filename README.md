# To-Do List - Task Manager

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A modern and intuitive task management application, built with React and following frontend development best practices.

## About the Project

This project was developed as part of my learning journey in React.js, focusing on componentization, state management with hooks, and professional code organization. The application allows users to create, edit, complete, and organize their daily tasks efficiently.

## Features

- Add tasks - Create new tasks quickly
- Edit tasks - Modify existing task text
- Delete tasks - Remove tasks individually
- Mark as completed - Track your progress
- Smart filters - View all, active, or completed tasks
- Task counter - See real-time statistics
- Clear completed - Remove all finished tasks at once
- Data persistence - Your tasks are saved automatically
- Responsive design - Works perfectly on mobile and desktop
- Keyboard shortcuts - Press Enter to add tasks

## Technologies Used

### Core
- **React** 18+ - JavaScript library for interfaces
- **React Hooks** - useState, useEffect for state management
- **JavaScript ES6+** - Arrow functions, destructuring, spread operator

### Styling
- **CSS Modules** - Isolated styles without conflicts
- **CSS3** - Flexbox, Grid, Transitions, Gradients
- **Responsive Design** - Mobile-first approach

### Tools
- **CodeSandbox** - Development environment
- **Git & GitHub** - Version control
- **Storage API** - Local data persistence

## Project Structure

```
src/
├── App.js                          # Main component with state logic
├── components/
│   ├── TodoInput.jsx              # Input to add tasks
│   ├── TodoFilters.jsx            # Filter buttons
│   ├── TodoStats.jsx              # Statistics and counter
│   ├── TodoList.jsx               # Task list
│   └── TodoItem.jsx               # Individual task item
├── styles/
│   ├── App.module.css             # Main container styles
│   ├── TodoInput.module.css       # Input styles
│   ├── TodoFilters.module.css     # Filter styles
│   ├── TodoStats.module.css       # Statistics styles
│   ├── TodoList.module.css        # List styles
│   └── TodoItem.module.css        # Item styles
└── index.js                        # Application entry point
```

## How to Run the Project

### Prerequisites
- Node.js installed (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Michel-LDR/todo-list-react.git
```

2. Enter the project folder
```bash
cd todo-list-react
```

3. Install dependencies
```bash
npm install
```

4. Run the project
```bash
npm start
```

5. Access in browser
```
http://localhost:3000
```

## Design and UX

The design was created to be:
- **Minimalist** - Clean interface without distractions
- **Intuitive** - Easy to use, even for beginners
- **Modern** - Gradients, shadows, and smooth animations
- **Accessible** - Good contrast and appropriate font sizes

### Color Palette
- **Primary**: `#667eea` (Vibrant purple)
- **Secondary**: `#764ba2` (Dark purple)
- **Success**: `#4CAF50` (Green)
- **Error**: `#ff5252` (Red)
- **Neutral**: `#f8f9fa` (Light gray)

## Applied Concepts

### React Fundamentals
- Functional components
- Props and component communication
- Lifting state up
- Component composition

### React Hooks
- **useState** - Local state management
- **useEffect** - Side effects and data persistence

### Modern JavaScript
- Array methods (map, filter, some)
- Ternary operators
- Template literals
- Destructuring

### Advanced CSS
- CSS Modules for isolated scope
- Flexbox for layouts
- Transitions and transforms
- Pseudo-classes (:hover, :focus)

## Key Learnings

During the development of this project, I learned:

1. **Efficient componentization** - How to divide an application into reusable components
2. **State management** - Using hooks to control application data
3. **Props drilling** - Passing data between parent and child components
4. **CSS Modules** - Avoiding style conflicts in larger applications
5. **Data persistence** - Saving information locally
6. **Clean Code** - Writing clean, readable, and maintainable code
7. **Best practices** - Following industry standards

## Future Improvements

- [ ] Add drag and drop to reorder tasks
- [ ] Implement categories/tags for tasks
- [ ] Add due dates
- [ ] Dark mode
- [ ] Notifications for important tasks
- [ ] Export tasks to PDF
- [ ] Sync with backend (API)
- [ ] User authentication
- [ ] List sharing

## Author

**Michel Röhrig**

- GitHub: [@Michel-LDR](https://github.com/Michel-LDR)
- LinkedIn: [Michel Röhrig](https://www.linkedin.com/in/michel-r%C3%B6hrig-870528242/)

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---
