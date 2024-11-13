import React from 'react'
import wrench from '../../images/wrench.png'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-light' data-bs-theme='light'>
        <div className='container-fluid'>
          <a className='navbar-brand px-5' href='/'>
            <b>
              <img style={{ width: 30 }} src={wrench} alt='Ooops...' /> Repair
            </b>
          </a>
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
                <a className='nav-link active' href='/'>
                  Home
                  <span className='visually-hidden'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Service
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Feedback
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Blog
                </a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='/'>
                    Action
                  </a>
                  <a className='dropdown-item' href='/'>
                    Another action
                  </a>
                  <a className='dropdown-item' href='/'>
                    Something else here
                  </a>
                  <div className='dropdown-divider'></div>
                  <a className='dropdown-item' href='/'>
                    Separated link
                  </a>
                </div>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Elements
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
