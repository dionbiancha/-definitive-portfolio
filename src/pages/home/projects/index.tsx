import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Repository = [
  {
    title: 'mature-portfolio',
    description: 'Portfolio version for the year 2021',
    tech: 'NextJS - TypeScript',
    link: 'https://github.com/dionbiancha/mature-portfolio'
  },
  {
    title: 'portfolio-illuminight',
    description: 'Fictional portfolio made with react.',
    tech: 'ReactJS - React Lottie',
    link: 'https://github.com/dionbiancha/portfolio-illuminight'
  },
  {
    title: 'personal-landing-page',
    description: 'Data capture page prototype',
    tech: 'Javascript - HTML5 - CSS3',
    link: 'https://github.com/dionbiancha/personal-landing-page'
  },
  {
    title: 'd-web',
    description: 'My personal website 🤘',
    tech: 'Javascript - Sass - Flickity ',
    link: 'https://github.com/dionbiancha/d-web'
  },
  {
    title: 'n33dful-frontend',
    description: 'Online store for buying and selling new or used items 🏪',
    tech: 'ReactJS - Redux',
    link: 'https://github.com/dionbiancha/n33dful-frontend'
  },
  {
    title: 'devsapp',
    description: 'Developer chat app 🤓',
    tech: 'React Native - Redux',
    link: 'https://github.com/dionbiancha/devsapp'
  }
]

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-white text-2xl mb-16 pt-20">
        <span className="text-base text-green_1 align-middle">03. </span>
        My Projects
      </h2>
      <div className="flex flex-row lg:justify-between justify-center flex-wrap">
        {Repository.map((i, key) => (
          <a
            href={i.link}
            target="_blank"
            rel="noreferrer"
            key={key}
            className="border hover:border-green_1  hover:border-opacity-40 flex flex-col justify-between lg:mr-0 sm:mr-5 flex p-5 lg:w-80 md:w-5/12 w-11/12 h-44 bg-gray_3 mb-5 rounded-md cursor-pointer transition duration-500 ease-in-out"
          >
            <div className="text-xl text-gray_2 flex flex-row justify-between w-full">
              <h3>{i.title}</h3>
              <div className="ml-3">
                <AiFillGithub />
              </div>
            </div>
            <div>
              <p className="text-white font-thin">{i.description}</p>
              <p className="text-yellow font-thin mt-2 text-sm">{i.tech}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
