import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskForm.css';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Work');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { title, description, category, dueDate, priority };
        onAddTask(newTask); // Pass the new task to the parent component
        navigate('/'); // Navigate back to home after adding task
    };

    const handleCancel = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="task-form">
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                {/* ... (same form fields as before) ... */}
                <div className="form-buttons">
                    <button type="submit">Add Task</button>
                    <button type="button" onClick={handleCancel} className="cancel-button">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
