import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Work');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create the new task object
        const newTask = {
            title,
            description,
            category,
            dueDate,
            priority,
        };
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
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Due Date:</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Priority:</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
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

export default TaskForm;
