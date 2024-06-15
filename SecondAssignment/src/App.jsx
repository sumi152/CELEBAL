// src/App.js
import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen flex items-center justify-center">
      <header className="App-header">
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
