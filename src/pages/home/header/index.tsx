import React from 'react'
import { useModal } from '../../../context/Modal'

const Header: React.FC = () => {
  const { setModal } = useModal()
  return (
    <nav className="flex justify-end">
      <a className="text-green_1 transition duration-500 ease-in-out hover:text-yellow underline cursor-pointer">
        <button
          className="focus:outline-none"
          type="button"
          onClick={() => setModal(true)}
        >
          blog
        </button>
      </a>
    </nav>
  )
}

export default Header
