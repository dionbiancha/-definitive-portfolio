import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false)
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  const { modal, setModal } = context

  return { modal, setModal }
}
