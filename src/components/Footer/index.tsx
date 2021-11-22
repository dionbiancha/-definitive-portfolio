import React from 'react'

import Container from '../Container'

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-gray_5 absolute left-0">
      <Container>
        <div className="flex flex-col items-center justify-center p-16">
          <p className="text-white font-bold sm:text-4xl text-base mb-10 text-center">
            ready to work with me?
          </p>
          <p className="text-sm text-gray_2 mb-3">Missal, PR, Brasil</p>
          <p className="text-green_1 font-bold sm:text-4xl text-2xl mb-5">
            contact@dionei.com
          </p>
        </div>
      </Container>
      <div className="flex w-full justify-center">
        <p className="text-sm text-gray_2 mb-3 mr-5">
          Made with 💚 by{' '}
          <a
            className="text-white"
            href="https://www.linkedin.com/in/dionbiancha/"
          >
            Dionei Bianchati
          </a>{' '}
        </p>
      </div>
    </div>
  )
}

export default Footer
