import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./nav";
import Home from "./home";
import TaskForm from "./TaskForm"; 
import TaskDetails from "./TaskDetails"; 
import EditTask from "./EditTask"; 
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
});

     // Load tasks from localStorage when the app initializes
     useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]); 
    };

    const updateTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id)); 
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )); 
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <Home tasks={tasks}   onDeleteTask={handleDeleteTask} onToggleCompletion={toggleTaskCompletion} />
                } />
                <Route path="/add-task" element={<TaskForm onAddTask={handleAddTask} />} />
                <Route path="/task-details/:id" element={<TaskDetails tasks={tasks} />} />
                <Route path="/edit-task/:id" element={<EditTask tasks={tasks} updateTask={updateTask} />} />
            </Routes>
        </Router>
    );
};

export default App;
