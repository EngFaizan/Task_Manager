import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TaskListView from './components/Task_List_View';
import TaskForm from './components/Task_Creation_Form';
import TaskDetailView from './components/Task_Detail_View';
import About from './components/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/tasks" element={<TaskListView />} />
            <Route path="/taskform" element={<TaskForm />} />
            <Route path="/taskform/:taskId" element={<TaskForm />} />
            <Route path="/taskdetail/:id" element={<TaskDetailView />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
