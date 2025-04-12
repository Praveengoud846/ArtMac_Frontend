import axios from 'axios';

// Base URL for your task API
const BASE_URL = 'http://localhost:8080/tasks';

// Fetch all tasks
const getTasks = () => axios.get(BASE_URL);

// Add a new task
const addTask = (task) => axios.post(`${BASE_URL}/addTask`, task);
const getTaskById = (id) => axios.get(`${BASE_URL}/${id}`);
const updateTask = (id, task) => axios.put(`${BASE_URL}/${id}`, task);
const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`);
const getTasksByStatus = (status) => axios.get(`${BASE_URL}/status/${status.toUpperCase()}`);

const TaskService = {
  getTasks,
  addTask,
  getTaskById,
  updateTask,
  deleteTask,
  getTasksByStatus
};

export default TaskService;
