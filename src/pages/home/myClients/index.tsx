import React from 'react'

const MyClients: React.FC = () => {
  return (
    <div>
      <h2 className="text-white text-2xl mb-16 pt-10">
        <span className="text-base text-green_1 align-middle">02. </span> Work
        Experience
      </h2>
      <div className="flex flex-row sm:justify-start justify-center flex-wrap">
        <div className="flex items-center justify-center p-5 sm:w-36 w-24 sm:h-36 h-24 bg-gray_3 sm:mr-10 mr-5 mb-5 mb-5 rounded-md">
          <a
            href="https://www.facebook.com/Reacta-331471204001737"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-500 ease-in-out hover:opacity-100 opacity-30 cursor-pointer"
              src="assets/images/reacta.png"
              alt="Logo Reacta"
            />
          </a>
        </div>
        <div className="flex items-center justify-center p-5 sm:w-36 w-24 sm:h-36 h-24 bg-gray_3 sm:mr-10 mr-5 mb-5 mb-5 rounded-md">
          <a href="https://sovaga.com.br/" target="_blank" rel="noreferrer">
            <img
              className="transition duration-500 ease-in-out hover:opacity-100 opacity-30 cursor-pointer"
              src="assets/images/sovaga.png"
              alt="Logo So Vaga"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyClients
