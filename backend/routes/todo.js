const router = require('express').Router()
const {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require('../controllers/todo')

router.route('/').get(getTodos).post(createTodo)
router.route('/:id').put(updateTodo).delete(deleteTodo).get(getTodo)

module.exports = router
