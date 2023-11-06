import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import RegistrationForm from './Components/RegistrationForm'; // Import the RegistrationForm component
import LoginForm from './Components/LoginForm'; // Import the LoginForm component
import StudentForm from './Components/StudentForm'; // Import the StudentForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Registration and Student App</h1>
      </header>
      <RegistrationForm/>
      <LoginForm/>
      <StudentForm/>
      <AppRouter />
    </div>
  );
}

export default App;
