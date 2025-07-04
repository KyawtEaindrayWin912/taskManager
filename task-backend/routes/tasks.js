const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const authenticate = require('../middleware/authMiddleware');

// Get all tasks for a logged-in user
router.get('/', authenticate, async (req, res) => {
  const userId = req.user.id;

  try {
    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { deadline: 'asc' },
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Create a new task
router.post('/', authenticate, async (req, res) => {
  const { title, description, deadline } = req.body;

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        deadline: deadline ? new Date(deadline) : null,
        user: { connect: { id: req.user.id } },
      },
    });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Update a task
router.put('/:id', authenticate, async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, deadline, completed } = req.body;

  try {
    const updatedTask = await prisma.task.updateMany({
      where: {
        id: taskId,
        userId: req.user.id, // ensure user owns the task
      },
      data: {
        title,
        description,
        deadline: deadline ? new Date(deadline) : null,
        completed,
      },
    });

    if (updatedTask.count === 0) {
      return res.status(404).json({ error: 'Task not found or unauthorized' });
    }

    res.json({ message: 'Task updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete a task
router.delete('/:id', authenticate, async (req, res) => {
  const taskId = parseInt(req.params.id);

  try {
    const deletedTask = await prisma.task.deleteMany({
      where: {
        id: taskId,
        userId: req.user.id, // ensure user owns the task
      },
    });

    if (deletedTask.count === 0) {
      return res.status(404).json({ error: 'Task not found or unauthorized' });
    }

    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

//update completed task
router.put('/:id/complete', async (req, res) => {
  const taskId = parseInt(req.params.id);
  try {
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { completed: true },
    });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark task as complete' });
  }
});

// Mark task as incomplete
router.put('/:id/incomplete', async (req, res) => {
  const taskId = parseInt(req.params.id);
  try {
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { completed: false },
    });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark task as incomplete' });
  }
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);
  try {
    await prisma.task.delete({
      where: { id: taskId },
    });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

//edit a task
router.put('/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, deadline } = req.body;

  try {
    const updated = await prisma.task.update({
      where: { id: taskId },
      data: { title, description, deadline },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

module.exports = router;
