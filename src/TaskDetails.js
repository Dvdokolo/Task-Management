// TaskDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css'; // Optional CSS for styling

const TaskDetails = ({ tasks }) => {
    const { id } = useParams(); // Get the task ID from the URL
    const task = tasks.find(task => task.id === parseInt(id)); // Find the task by ID
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/'); // Navigate back to the home page
    };

    if (!task) {
        return <h2>Task not found!</h2>; // Handle case where task is not found
    }

    return (
        <div className="task-details">
            <h2>{task.title}</h2>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Category:</strong> {task.category}</p>
            <p><strong>Due Date:</strong> {task.dueDate}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Completed:</strong> {task.completed ? 'Yes' : 'No'}</p>
            <button onClick={handleBack}>Cancel</button> 
        </div>
    );
};

export default TaskDetails;
