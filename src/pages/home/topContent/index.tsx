import React from 'react'
import Typist from 'react-typist'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { useModal } from '../../../context/Modal'

const TopContent: React.FC = () => {
  const { setModal } = useModal()
  return (
    <div className="flex flex-col justify-center sm:items-start items-center sm:text-left text-center h-screen">
      <div className="flex sm:flex-row flex-col">
        <h1
          style={{ lineHeight: '65px' }}
          className="text-white sm:text-5xl text-3xl font-light mb-5"
        >
          Hi there, I&apos;m <br />
          <span className="sm:text-6xl text-4xl font-semibold">
            Dionei Bianchati
          </span>
        </h1>
        <div className="flex flex-row sm:self-end m-auto text-3xl text-gray_1 mb-9">
          <a
            className="transition duration-500 ease-in-out hover:text-yellow cursor-pointer ml-3"
            href="https://github.com/dionbiancha"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="transition duration-500 ease-in-out hover:text-yellow cursor-pointer ml-3"
            href="https://www.linkedin.com/in/dionbiancha/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="transition duration-500 ease-in-out hover:text-yellow cursor-pointer ml-3"
            href="https://twitter.com/dionbiancha"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
      <p className="text-white text-xl font-extralight mb-10">
        <Typist cursor={{ hideWhenDone: true }}>
          <Typist.Delay ms={1250} />I{' '}
          <span className="text-yellow">{'<study and write /> '}</span>
          <Typist.Delay ms={500} />
          bugs
          <Typist.Backspace count={4} delay={1000} />
          <Typist.Delay ms={750} />
          codes
          <Typist.Delay ms={1250} />
        </Typist>
      </p>
      <div className="flex sm:flex-row flex-col">
        <button
          className="transition duration-500 ease-in-out hover:bg-yellow justify-center inline-flex text-black bg-green_1 border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-pointer"
          type="button"
          onClick={() => setModal(true)}
        >
          Get In Touch
        </button>
        <button className="transition duration-500 ease-in-out hover:text-yellow sm:mt-0 mt-3 justify-center ml-4 inline-flex text-green_1 border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-pointer">
          <Link activeClass="active" to="FAQ" spy={true} smooth={true}>
            FAQ
          </Link>
        </button>
      </div>
    </div>
  )
}

export default TopContent
