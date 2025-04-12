import React, { useEffect, useState } from 'react';
import TaskService from './TaskService';
import './TaskManager.css';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const fetchTasks = () => {
    TaskService.getTasks()
      .then((res) => setTasks(res.data))
      .catch((err) => console.error('Error fetching tasks:', err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {
    if (!title.trim()) return;

    TaskService.addTask({ title, status: 'PENDING' })
      .then(() => {
        setTitle('');
        fetchTasks();
      })
      .catch((err) => console.error('Error adding task:', err));
  };

  const deleteTask = (id) => {
    TaskService.deleteTask(id)
      .then(fetchTasks)
      .catch((err) => console.error('Error deleting task:', err));
  };

  const markDone = (id) => {
    TaskService.updateTask(id, { status: 'DONE' })
      .then(fetchTasks)
      .catch((err) => console.error('Error updating task:', err));
  };

  const filterTasks = (status) => {
    setStatusFilter(status);
    if (status === '') {
      fetchTasks();
    } else {
      TaskService.getTasksByStatus(status)
        .then((res) => setTasks(res.data))
        .catch((err) => console.error('Error filtering tasks:', err));
    }
  };

  return (
    <div className="task-container">
      <h1>Task Tracker</h1>

      <div className="task-input">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-filter">
        <label>Filter:</label>
        <select
          value={statusFilter}
          onChange={(e) => filterTasks(e.target.value)}
        >
          <option value="">All</option>
          <option value="PENDING">Pending</option>
          <option value="DONE">Done</option>
        </select>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className={`task-title ${task.status === 'DONE' ? 'done' : ''}`}>
              {task.title} <span>({task.status})</span>
            </div>
            <div className="task-actions">
              {task.status === 'PENDING' && (
                <button onClick={() => markDone(task.id)}>Mark Done</button>
              )}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
