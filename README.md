# Calculator Web App

A calculator web application built with React. Features a clean, intuitive interface with calculation history tracking.

## 🚀 Live Demo

[View the live application](https://olegani4.github.io/calculator-web-app/)

## ✨ Features

### Core Calculator Functionality
- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Advanced Functions**: 
  - Percentage calculations
  - Sign toggle (+/-)
  - Decimal point support
  - Clear all (AC) functionality
- **Real-time Display**: Shows current calculation and result simultaneously
- **Precision Handling**: Results are rounded to 3 decimal places for better readability

### History Management
- **Calculation History**: Automatically saves all completed calculations
- **History Toggle**: Click the history icon to show/hide calculation history
- **Load More**: View more history entries with pagination (3 entries at a time)
- **Clear History**: Option to clear all saved calculations
- **Reverse Chronological Order**: Most recent calculations appear first

### User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Intuitive Layout**: Standard calculator button arrangement
- **Visual Feedback**: Button hover and click effects

## 🛠️ Technologies Used

### Frontend
- **React 19.1.0** - JavaScript library for building user interfaces
- **Vite 7.0.0** - Build tool
- **SASS/SCSS** - Advanced CSS preprocessor

### Development Tools
- **GitHub Pages** - Static site hosting and deployment

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Olegani4/calculator-web-app.git
   cd calculator-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run compile:sass` | Compile SASS to CSS with watch mode |
| `npm run deploy` | Deploy to GitHub Pages |

## 📁 Project Structure

```
calculator-web-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── Header/            # Header component
│   ├── Footer/            # Footer component
│   ├── Main/              # Main application logic
│   │   ├── Calculator/    # Calculator component
│   │   └── CalculationsHistory/  # History component
│   ├── sass/              # SASS/SCSS files
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Application entry point
├── package.json           # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🎯 How to Use

### Basic Calculator Operations
1. **Number Input**: Click number buttons (0-9) to input values
2. **Decimal Point**: Use the `.` button for decimal numbers
3. **Operators**: Click `+`, `-`, `*`, `/` to perform operations
4. **Equals**: Press `=` to calculate the result
5. **Clear**: Use `AC` to reset the calculator

### Advanced Functions
- **Percentage**: Click `%` to convert the current number to a percentage
- **Sign Toggle**: Click `+/-` to change the sign of the current number
- **History**: Click the history icon to view calculation history

### History Management
- **View History**: Click the history icon to toggle the history panel
- **Load More**: Click "Load More" to see additional calculations
- **Clear History**: Click "Clear History" to remove all saved calculations


## 🚀 Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Olegani4**
- GitHub: [@Olegani4](https://github.com/Olegani4)
- Project: [Calculator Web App](https://github.com/Olegani4/calculator-web-app)
