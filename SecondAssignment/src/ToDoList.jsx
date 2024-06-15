// src/components/ToDoList.js
import React, { useState, useEffect } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (task.trim() === '') return;
        setTasks([...tasks, { text: task, completed: false }]);
        setTask('');
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleTask = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'incomplete') {
            return !task.completed;
        } else {
            return true;
        }
    });

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                    className="border rounded w-full py-2 px-3 mr-2"
                />
                <button
                    onClick={addTask}
                    className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
                >
                    Add Task
                </button>
            </div>
            <div className="mb-4">
                <label className="mr-2">
                    <input
                        type="radio"
                        value="all"
                        checked={filter === 'all'}
                        onChange={handleFilterChange}
                        className="mr-1"
                    />
                    All
                </label>
                <label className="mr-2">
                    <input
                        type="radio"
                        value="completed"
                        checked={filter === 'completed'}
                        onChange={handleFilterChange}
                        className="mr-1"
                    />
                    Completed
                </label>
                <label>
                    <input
                        type="radio"
                        value="incomplete"
                        checked={filter === 'incomplete'}
                        onChange={handleFilterChange}
                        className="mr-1"
                    />
                    Incomplete
                </label>
            </div>
            <ul className="list-none p-0">
                {filteredTasks.map((task, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-gray-100 rounded p-2 mb-2"
                    >
                        <span
                            className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
                            onClick={() => toggleTask(index)}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => removeTask(index)}
                            className="bg-red-500 text-white rounded py-1 px-2 hover:bg-red-700"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
