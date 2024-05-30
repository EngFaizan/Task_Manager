import React, { useState } from 'react';
import TaskForm from './Task_Creation_Form';
import '../styling/Task_List.css';

const TaskListView = () => {
  const [tasks, setTasks] = useState([
    { title: 'Sample Task 1', description: 'This is a sample task', status: 'pending', dueDate: '2024-06-01' },
    { title: 'Sample Task 2', description: 'This is another sample task', status: 'in progress', dueDate: '2024-06-15' },
  ]);
  const [showTaskForm, setShowTaskForm] = useState(false);

  const handleEdit = (index) => {
    // Implement your edit functionality here
    alert(`Edit task at index: ${index}`);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleAddNewTaskClick = () => {
    setShowTaskForm(true);
  };

  const handleFormSubmit = (task) => {
    setTasks([...tasks, task]);
    setShowTaskForm(false);
  };

  return (
    <div className="task-list-container">
      {showTaskForm ? (
        <TaskForm onSubmit={handleFormSubmit} />
      ) : (
        <>
          <div className="task-list">
            {tasks.length === 0 ? (
              <p>No tasks added yet.</p>
            ) : (
              tasks.map((task, index) => (
                <div key={index} className="task-item">
                  <div className="task-info">
                    <h3>{task.title}</h3>
                    <p>Due Date: {task.dueDate}</p>
                    <p>Status: {task.status}</p>
                  </div>
                  <div className="task-actions">
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
          <button onClick={handleAddNewTaskClick}>Add New Task</button>
        </>
      )}
    </div>
  );
};

export default TaskListView;
