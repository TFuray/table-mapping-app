import '../css/table.css'
import { useState } from 'react'

const Table = ({ tableNum, color, onClick }) => {

  return (
    <div style={{ background: color }} className='table' onClick={onClick}>
      <p className='tableNum'>{tableNum}</p>
    </div>
  )
}

export default Table
