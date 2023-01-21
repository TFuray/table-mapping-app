import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const Login = () => {
const [formdata, setFormdata] = useState({
  email: '',
  password: ''
})
const {email, password } = formdata
const navigate = useNavigate()

const API_URL = '/api/users'
// Login
const login = async userData => {
  const response = await axios.post(API_URL, userData)
  return response.data
}

const onSubmit = e => {
  e.preventDefault()
  const userData = {
    email,
    password
  }
  dis
}
const onChange = e => {
  setFormdata(prevState => ({
    ...prevState,
    [e.target.name]: e.target.value
  }))
}

  return (
    <>
      <section className='heading'>
        <h1>Login</h1>
        <p>Be Part of a Team</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
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
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
