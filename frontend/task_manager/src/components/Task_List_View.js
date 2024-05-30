import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styling/Task_List.css';

const TaskListView = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks/')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleEdit = (index) => {
    alert(`Edit task at index: ${index}`);
  };

  const handleDelete = (taskId) => {
    axios.delete(`http://localhost:8000/api/tasks/${taskId}/`)
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
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
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <div className="task-info">
                <h3>{task.title}</h3>
              </div>
              <div id='buttons' className="task-actions">
                <button id='editButton' onClick={() => handleEdit(task.id)}>Edit</button>
                <button id='deleteButton' onClick={() => handleDelete(task.id)}>Delete</button>
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
