import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const { name, email, password, password2 } = formData

  const navigate = useNavigate()

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async e => {
    e.preventDefault()

    const newUser = { ...formData }

    await fetch('http://localhost:5001/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).catch(error => {
      window.alert(error)
      return
    })
    setFormData({ name: '', email: '', password: '', password2: '' })
    navigate('/dashboard')
  }

  return (
    <>
      <section className='heading'>
        <h1></h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <input
              type='password2'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
