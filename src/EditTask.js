// EditTask.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TaskForm.css"; // Reuse TaskForm styles

const EditTask = ({ tasks, updateTask }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const foundTask = tasks.find((t) => t.id === parseInt(id));
        if (foundTask) {
            setTask(foundTask);
        } else {
            navigate("/"); // Redirect if task not found
        }
    }, [id, tasks, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(task); // Update task using passed function
        navigate("/"); // Navigate back to home after editing
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    if (!task) return null; // Render nothing while loading

    return (
        <div className="task-form">
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select
                        name="category"
                        value={task.category}
                        onChange={handleChange}
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
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Priority:</label>
                    <select
                        name="priority"
                        value={task.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="form-buttons">
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default EditTask;
