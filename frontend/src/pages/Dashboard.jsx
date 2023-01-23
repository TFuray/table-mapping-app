import { useState } from 'react'
import Table from '../components/Table'
import '../css/dashboard.css'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true)

  const onClick = () => setIsOpen(!isOpen)

  return (
    <div className='layout grid grid-cols-5 gap-4'>
      <div>
        <Table
          id
          tableNum={101}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={102}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={103}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={104}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
      </div>
      <div>
        <Table
          id
          tableNum={201}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={202}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={203}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={204}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
      </div>
      <div>
        <Table
          id
          tableNum={301}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={302}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={303}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={304}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
      </div>
      <div>
        <Table
          id
          tableNum={401}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={402}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={403}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={404}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
      </div>
      <div>
        <Table
          id
          tableNum={501}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={502}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={503}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
        <Table
          id
          tableNum={504}
          color={isOpen ? 'green' : 'red'}
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default Dashboard
