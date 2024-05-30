import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/Task_List.css';

const TaskListView = () => {
  const [tasks, setTasks] = useState([
    { title: 'Sample Task 1', description: 'This is a sample task', status: 'pending', dueDate: '2024-06-01' },
    // { title: 'Sample Task 2', description: 'This is another sample task', status: 'in progress', dueDate: '2024-06-15' },
  ]);
  const navigate = useNavigate();

  const handleEdit = (index) => {
    alert(`Edit task at index: ${index}`);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleAddNewTaskClick = () => {
    navigate('/taskform');
  };

  return (
    <div className="task-list-container">
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} className="task-item">
              <div className="task-info">
                <h3>{task.title}</h3>
              </div>
              <div id='buttons' className="task-actions">
                <button id='editButton' onClick={() => handleEdit(index)}>Edit</button>
                <button id='deleteButton' onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
        <button onClick={handleAddNewTaskClick}>Add New Task</button>
      </div>
    </div>
  );
};

export default TaskListView;
