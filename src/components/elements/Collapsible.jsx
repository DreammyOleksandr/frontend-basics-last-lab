import React, { useState } from 'react'

const Collapsible = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='container mt-4'>
      <div class='card'>
        <button
          className={`card-header rounded-1 border-0 d-flex justify-content-between w-100 ${
            isOpen ? 'bg-purple' : 'bg-light-gray'
          }`}
          data-bs-toggle='collapse'
          href={`#collapse-${name}`}
          onClick={handleToggle}
        >
          <div className={`${isOpen ? 'text-light' : ''}`}>{name}</div>
          <div>
            <i className={`bi ${isOpen ? 'bi-arrow-down text-light' : 'bi-arrow-right'}`}></i>
          </div>
        </button>
        <div id={`collapse-${name}`} className='collapse'>
          <div className='card-body'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi deserunt, deleniti sint
            accusantium corrupti omnis facere amet fugit ab velit temporibus itaque quia aut tenetur
            maiores sequi numquam. Deleniti veniam in rerum cum dolore ullam, error maxime odit
            adipisci atque consequuntur sunt, quae iure aliquid corrupti incidunt? Similique
            repellendus commodi corrupti, enim facere expedita nisi illo molestiae hic, officiis
            deleniti!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collapsible
