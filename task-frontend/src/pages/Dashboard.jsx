import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Divider,
  Stack,
  Alert,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Pagination,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';

const Dashboard = ({ setMode, mode}) => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', deadline: '' });
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [filterBy, setFilterBy] = useState('all');
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchTasks();
    }
  }, [navigate]);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [search, sortBy, filterBy]);

  const fetchTasks = async () => {
    try {
      const res = await API.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      setError('Failed to fetch tasks');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      await API.post('/tasks', form);
      setForm({ title: '', description: '', deadline: '' });
      fetchTasks();
    } catch (err) {
      setError('Failed to add task');
    }
  };

  const handleClearFilters = () => {
    setSearch('');
    setSortBy('default');
    setFilterBy('all');
    setCurrentPage(1);
  };  

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      (task.description && task.description.toLowerCase().includes(search.toLowerCase()))
    )
    .filter((task) => {
      if (filterBy === 'completed') return task.completed;
      if (filterBy === 'incomplete') return !task.completed;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'deadline-asc':
          return new Date(a.deadline) - new Date(b.deadline);
        case 'deadline-desc':
          return new Date(b.deadline) - new Date(a.deadline);
        case 'completed':
          return b.completed - a.completed;
        case 'incomplete':
          return a.completed - b.completed;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );
  const startIndex = (currentPage - 1) * tasksPerPage + 1;
  const endIndex = Math.min(startIndex + paginatedTasks.length - 1, filteredTasks.length);


  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Navbar setMode={setMode} mode={mode} />
      <TaskForm form={form} onChange={handleChange} onSubmit={handleAddTask} />
      <Divider sx={{ mb: 3 }} />

      {/* Search / Sort / Filter */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Search tasks"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="sort-label">Sort by</InputLabel>
            <Select
              labelId="sort-label"
              value={sortBy}
              label="Sort by"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="title-asc">Title (A-Z)</MenuItem>
              <MenuItem value="title-desc">Title (Z-A)</MenuItem>
              <MenuItem value="deadline-asc">Deadline (Soonest)</MenuItem>
              <MenuItem value="deadline-desc">Deadline (Latest)</MenuItem>
              <MenuItem value="completed">Status: Completed First</MenuItem>
              <MenuItem value="incomplete">Status: Incomplete First</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="filter-label">Filter</InputLabel>
            <Select
              labelId="filter-label"
              value={filterBy}
              label="Filter"
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <MenuItem value="all">All Tasks</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="incomplete">Incomplete</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} textAlign="right">
          <Button variant="outlined" color="secondary" onClick={handleClearFilters}  disabled={search === '' && sortBy === 'default' && filterBy === 'all'}>
            Clear Filters
          </Button>
        </Grid>
      </Grid>

      {/* Task List */}
      <Typography variant="h6" gutterBottom>
        Your Tasks
      </Typography>
      {filteredTasks.length === 0 ? (
        <Typography color="text.secondary">
          No tasks match your search or filter.
        </Typography>
      ) : (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Showing {startIndex}–{endIndex} of {filteredTasks.length} tasks
          </Typography>
          <Stack spacing={2}>
            {paginatedTasks.map((task) => (
              <TaskCard key={task.id} task={task} onRefresh={fetchTasks} />
            ))}
          </Stack>

          <Stack alignItems="center" mt={3}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(e, value) => setCurrentPage(value)}
              color="primary"
            />
          </Stack>
        </>
      )}

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default Dashboard;
