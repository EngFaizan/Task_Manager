import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/Task_Form.css';

const TaskForm = ({ onSubmit }) => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (taskId) {
      axios.get(`http://localhost:8000/api/tasks/${taskId}`)
        .then(response => {
          const { title, description, status, due_date } = response.data;
          setTitle(title);
          setDescription(description);
          setStatus(status);
          setDueDate(due_date);
        })
        .catch(error => {
          console.error('Error fetching task:', error);
        });
    }
  }, [taskId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, status, due_date: dueDate };

    const request = taskId ? axios.put(`http://localhost:8000/api/tasks/${taskId}/`, task) : axios.post('http://localhost:8000/api/tasks/', task);

    request
      .then(response => {
        console.log(taskId ? 'Task Updated Successfully' : 'Task Submitted Successfully:', response.data);
        setTitle('');
        setDescription('');
        setStatus('pending');
        setDueDate('');
        setErrors({});
        if (onSubmit) {
          onSubmit(response.data);
        }
        navigate(-1); // Navigate back to previous page
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setErrors(error.response.data);
        } else {
          console.error('Error submitting task:', error);
        }
      });
  };

  return (
    <div className='main'>
      <form className="task-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors.title && <p className="error">{errors.title[0]}</p>}
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="error">{errors.description[0]}</p>}
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          {errors.status && <p className="error">{errors.status[0]}</p>}
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          {errors.due_date && <p className="error">{errors.due_date[0]}</p>}
        </label>
        <button type="submit">{taskId ? 'Update' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;