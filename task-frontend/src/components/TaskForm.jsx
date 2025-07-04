import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

const TaskForm = ({ form, onChange, onSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ mb: 4, p: 3, border: '1px solid #ccc', borderRadius: 2 }}
    >
      <Typography variant="h6" gutterBottom>
        Create a Task
      </Typography>
      <TextField
        label="Title"
        name="title"
        value={form.title}
        onChange={onChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Description"
        name="description"
        value={form.description}
        onChange={onChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Deadline"
        name="deadline"
        type="datetime-local"
        value={form.deadline}
        onChange={onChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
