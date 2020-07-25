import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const SignIn = () => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [passwordError, setPasswordError] = useState('')
  const [showErrors, setShowErrors] = useState(false)

  const handleInputChange = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
    name === 'password' && value.length < 6 ? setPasswordError('Minimum 6 characters') : setPasswordError('')
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (passwordError.length > 0) {
      setShowErrors(true)
    } else {
      console.log('Sign in form data', data)
      setData({ ...data, email: '', password: '' })
      setShowErrors(false)
    }
  }

  return (
    <div className='col-12 col-md-6 col-lg-8 p-4'>
      <form className='form-sign py-5 p-lg-5' onSubmit={handleSubmit}>
        <div className='form-toggle text-muted small'>Don't have an account?
        <NavLink to='/'> Sign up</NavLink>
        </div>
        <div className='mb-4'>
          <h1 className='h2 mb-3 font-weight-normal'>Sign in</h1>
        </div>

        <div className='form-row text-center'>
          <div className='col-8'>
            <a className='btn btn-lg btn-primary btn-image-wrap' href='#' role='button'>
              <img src='google.svg' className='btn-image' alt='Sign with Google' />
              Sign in with Google
            </a>
          </div>
          <div className='col d-flex justify-content-end'>
            <a className='btn btn-lg btn-light btn-social' href='#' role='button'>
              <img src='twitter.svg' alt='Sign with Twitter' />
            </a>
          </div>
          <div className='col d-flex justify-content-end'>
            <a className='btn btn-lg btn-light btn-social' href='#' role='button'>
              <img src='fb.svg' alt='Sign with Facebook' />
            </a>
          </div>
        </div>
        <div className=' divider my-4 text-muted'>Or</div>

        <div className='form-label-group mt-3'>
          <label htmlFor='inputEmail'>Email Address</label>
          <input
            type='email'
            id='inputEmail'
            name='email'
            className='form-control bg-light'
            required
            value={data.email}
            onChange={handleInputChange}
            autoFocus
          />
        </div>

        <div className='form-label-group mt-3'>
          <label htmlFor='inputPassword'>Password</label>
          <input
            type='password'
            id='inputPassword'
            name='password'
            className='form-control bg-light'
            required
            value={data.password}
            onChange={handleInputChange}
          />
          {showErrors && <div className='small text-danger'>{passwordError}</div>}
        </div>

        <div className='col-12 col-md-6 px-0 mt-4'>
          <button className='btn btn-danger btn-block' type='submit'>
            Submit
        </button>
        </div>
      </form>
    </div>
  )
}