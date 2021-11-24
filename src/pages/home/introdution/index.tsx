import React from 'react'

const Introdution: React.FC = () => {
  return (
    <div>
      <h2 className="text-white text-2xl mb-16">
        <span className="text-base text-green_1 align-middle">01. </span>
        About Me
      </h2>
      <div className="flex lg:flex-row flex-col mb-20 text-lg items-center">
        <div className="lg:w-2/5 w-full">
          <img
            className="w-72 h-72 mb-10 rounded-md m-auto"
            src="assets/images/me-focus.png"
            alt="Foto de Dionei Bianchati"
          />
        </div>
        <div className="flex flex-col lg:w-3/5 w-full">
          <p className="text-center text-white italic font-thin text-xl mb-10">
            “It's not about having ideas, it's about taking those ideas into
            real life...”
          </p>
          <p className="text-gray_2 text-center">
            Since the beginning of my journey as a developer, I have worked
            remotely for agencies and collaborated with talented people to
            create digital products. Quietly confident and naturally curious, I
            work perpetually to improve my professional skills, always looking
            for new learning opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introdution
