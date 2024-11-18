import React from 'react'
import wrench from '../../images/wrench.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-light' data-bs-theme='light'>
        <div className='container-fluid'>
          <Link className='navbar-brand px-5' to='/'>
            <b>
              <img style={{ width: 30 }} src={wrench} alt='Ooops...' /> Repair
            </b>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor03'
            aria-controls='navbarColor03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarColor03'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link active' to='/'>
                  Home
                  <span className='visually-hidden'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Service
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Feedback
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                  to='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Blog
                </Link>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/'>
                    Action
                  </Link>
                  <Link className='dropdown-item' to='/'>
                    Another action
                  </Link>
                  <Link className='dropdown-item' to='/'>
                    Something else here
                  </Link>
                  <div className='dropdown-divider'></div>
                  <Link className='dropdown-item' to='/'>
                    Separated link
                  </Link>
                </div>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Elements
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
