import { useNavigate } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl'>Table Map</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a href='#'>Take Order</a>
            </li>
            <li>
             <a href="#">All Tickets</a> 
            </li>
            <li>
              <a href='#'>All Tables</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
