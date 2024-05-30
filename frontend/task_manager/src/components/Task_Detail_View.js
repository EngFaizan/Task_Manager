import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styling/Task_Detail.css';

const TaskDetailView = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/tasks/${id}`)
      .then(response => {
        setTask(response.data);
      })
      .catch(error => {
        console.error('Error fetching task:', error);
      });
  }, [id]);

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div className="task-detail-container"> {/* Apply the CSS class */}
      <h2>Task Detail View</h2>
      <div className="task-detail">
        <p><span>Title:</span> {task.title}</p>
        <p><span>Description:</span> {task.description}</p>
        <p><span>Status:</span> {task.status}</p>
        <p><span>Due Date:</span> {task.due_date}</p>
      </div>
    </div>
  );
};

export default TaskDetailView;
