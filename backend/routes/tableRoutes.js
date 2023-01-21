const express = require('express')

const router = express.Router()
const {
  getTables,
  addTable,
  fireTable,
  deleteTable
} = require('../controllers/tableController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTables).post(protect, addTable)
router.route('/:id').put(protect, fireTable).delete(protect, deleteTable)

module.exports = router
