import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import List from './components/List';
import Filter from './components/Filter';
import { fetchTasks, createTask, updateTask, deleteTask } from './api/api';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = async (id, status) => {
    const updatedTask = await updateTask(id, { status });
    setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
  };

  const deleteTaskById = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const filteredTasks = tasks.filter((task) => filter === 'All' || task.status === filter);

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <Task onSubmit={addTask} />
      <Filter status={filter} onChange={setFilter} />
      <List tasks={filteredTasks} onDelete={deleteTaskById} onStatusChange={updateTaskStatus} />
    </div>
  );
};

export default App;
