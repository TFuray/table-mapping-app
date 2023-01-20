const asyncHandler = require('express-async-handler')
const Table = require('../models/tableModel')


// @desc   Get tables
// @route  GET /api/tables
const getTables = asyncHandler(async (req, res) => {
  const tables = await Table.find()

  res.status(200).json(tables)
})

// @desc    Add table
// @route   POST /api/tables 
const addTable = asyncHandler(async (req, res) => {
  if(!req.body.tableNum || !req.body.seats) {
    res.status(400)
    throw new Error('Please add table number and seats')
  }

  const table = await Table.create({
    server: req.user.id,
    tableNum: req.body.tableNum,
    seats: req.body.seats,
    status: req.body.status,
  })

  res.status(200).json(table)
})


// @desc   Fire Table
// @route  PUT /api/tables/:id
const fireTable = asyncHandler(async (req, res) => {
  const table = await Table.findById(req.params.id)

  if(!table){
    res.status(400)
    throw new Error('Table not found')
  }
  const firedTable = await Table.findByIdAndUpdate(
    req.params.id,
    req.body, {
      status: 'Fire'
    }
  )
  
  res.status(200).json(firedTable)
})

// @desc   Delete table
// @route  DELETE /api/tables/:id
const deleteTable = asyncHandler(async (req, res) =>{
  const table = await Table.findById(req,params.id)
   if (!table) {
    res.status(400)
    throw new Error('Table not found')
  }

  //check for user
  if (!req.user) {
    res.status(400)
    throw new Error('User not found')
  }

  // Make sure logged in user matches table user
  if (table.user.toString() !== req.user.id) {
    res.status(400)
    throw new Error('User not authorized')
  }

  await table.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTables,
  addTable,
  fireTable,
  deleteTable
}