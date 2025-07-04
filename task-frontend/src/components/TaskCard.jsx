import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Stack } from '@mui/material';
import API from '../services/api';
import EditTaskModal from './EditTaskModal';

const TaskCard = ({ task, onRefresh }) => {
  const [openEdit, setOpenEdit] = useState(false);

  const handleToggleComplete = async () => {
    const route = task.completed ? 'incomplete' : 'complete';
    await API.put(`/tasks/${task.id}/${route}`);
    onRefresh();
  };

  const handleDelete = async () => {
    await API.delete(`/tasks/${task.id}`);
    onRefresh();
  };

  const handleSaveEdit = async (id, updatedData) => {
    await API.put(`/tasks/${id}`, updatedData);
    onRefresh();
  };

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">{task.title}</Typography>
          {task.description && (
            <Typography variant="body2" color="text.secondary">
              {task.description}
            </Typography>
          )}
          {task.deadline && (
            <Typography variant="body2" color="text.secondary" mt={1}>
              🕒 {new Date(task.deadline).toLocaleString()}
            </Typography>
          )}
        </CardContent>

        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Typography>
            {task.completed ? '✅ Completed' : '❌ Not Completed'}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button size="small" onClick={handleToggleComplete}>
              {task.completed ? 'Mark Incomplete' : 'Mark Done'}
            </Button>
            <Button size="small" onClick={() => setOpenEdit(true)}>
              Edit
            </Button>
            <Button size="small" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Stack>
        </CardActions>
      </Card>

      <EditTaskModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        task={task}
        onSave={handleSaveEdit}
      />
    </>
  );
};

export default TaskCard;
