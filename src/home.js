import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Home = ({ tasks, onEditTask, onDeleteTask, onToggleCompletion }) => {
    const navigate = useNavigate();

    const handleAddTaskClick = () => {
        navigate("/add-task");
    };

    const handleEditTask = (id) => {
        navigate(`/edit-task/${id}`); // Navigate to edit page with task ID
    };

    const handleViewDetails = (id) => {
        navigate(`/task-details/${id}`); // Navigate to task details page
    };

    return (
        <div className="app">
            <h2 className="alltasktxt">All tasks</h2>
            <div className="all-tasks">
                {tasks.map((task) => (
                    <div key={task.id} className="task">
                        <h3>{task.title}</h3>
                        <p>Due Date: {task.dueDate}</p>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleCompletion(task.id)}
                        />
                        <button onClick={() => handleEditTask(task.id)} className="edit-btn">Edit</button>
                        <button onClick={() => onDeleteTask(task.id)} className="delete-btn">Delete</button>
                        <button onClick={() => handleViewDetails(task.id)} className="details-btn">View Details</button> 
                    </div>
                ))}
                <div className="addtask" onClick={handleAddTaskClick}>
                    <h2>
                        Add Task <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
