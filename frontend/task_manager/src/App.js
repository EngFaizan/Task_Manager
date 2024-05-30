import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskForm from './components/Task_Creation_Form';
import TaskListView from './components/Task_List_View';
import TaskDetailView from './components/Task_Detail_View';

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Router>
        <Routes>
          <Route path="/" element={<TaskListView />} />
          <Route path="/taskform" element={<TaskForm />} />
          <Route path="/taskform/:taskId" element={<TaskForm />} />
          <Route path="/taskdetail/:id" element={<TaskDetailView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
