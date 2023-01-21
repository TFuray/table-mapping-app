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
  const API_URL = '/api/users'
  const { name, email, password, password2 } = FormData

  const navigate = useNavigate()

  const registerUser = userData => {
    axios.post(API_URL, userData)

  }

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    if (password !== password2) {
      throw new Error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }
    }
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
