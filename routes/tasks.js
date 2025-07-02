// routes/tasks.js
const express = require('express');
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskControllers');

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

module.exports = router;
