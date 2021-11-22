import React from 'react'
import { BsArrowBarDown } from 'react-icons/bs'

const Faq: React.FC = () => {
  return (
    <div id="FAQ" className="flex flex-col mb-20">
      <div className="flex sm:flex-row flex-col items-center mt-32 mb-6">
        <h2 className="text-white text-2xl">
          <span className="text-base text-green_1 align-middle">04. </span>
          Frequently Asked Questions
        </h2>
      </div>
      <section className="text-white mt-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between sm:mx-auto sm:mb-2  sm:text-base text-sm">
            <div className="w-full lg:w-1/2 px-4">
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Is this site open source?
                </summary>

                <span>
                  Yes! You can find the code{' '}
                  <a href="https://github.com/dionbiancha/mature-portfolio">
                    <b className="text-yellow">HERE</b>
                  </a>
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  How can I contact you?
                </summary>

                <span>
                  Contact us by email{' '}
                  <b className="text-yellow">contact@dionei.com </b>
                  or click{' '}
                  <a href="https://twitter.com/dionbiancha">
                    <b className="text-yellow">HERE</b>
                  </a>{' '}
                  and i will return within 24 hours.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq
