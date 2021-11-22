import React, { useState } from 'react'

const items = [
  {
    text:
      'Participamos de alguns projetos em hackatons, e pode perceber-se como evolui rápido para aprender uma  nova tecnologia, além de trabalhar muito bem em equipe auxiliando colegas iniciantes ou que não entendem muito bem de tal tecnologia. Me ajudou muito para entender todos conceitos e evoluir para tornar-se um desenvolvedor FullStack, nunca me deixou na mão, impossivel falar algo ruim de um pessoa que consegue ser profissional, interpessoal e empático!',
    ranking: 5.0
  },
  {
    text:
      'Baseado na experiencia que tivemos em projetos, Dionei é uma pessoa que trabalha muito bem em equipe, está sempre disposto a aprender e debater ideias, se dedica 100% aos projetos e sempre prezando pela qualidade das entregas.',
    ranking: 4.7
  },
  {
    text:
      'Entrei em contato com o Dionei após algumas pesquisas no Instagram, se demonstrou super prestativo e ajudou em todas as etapas da criação do meu Blog.',
    ranking: 4.5
  }
]

const Depositions: React.FC = () => {
  const [deposition, setDeposition] = useState(0)
  return (
    <div className="flex flex-col">
      <div className="flex sm:flex-row flex-col items-center mt-32">
        <h2 className="text-white text-2xl">Depoimentos</h2>
        <h3 className="text-gray_2 italic text-sm sm:ml-10">
          O que os clientes falam sobre mim
        </h3>
      </div>
      <section>
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full sm:h-64 bg-gray_3 sm:p-12 p-5 rounded">
              <div className="flex flex-row">
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill={
                        items[deposition].ranking >= 1.0
                          ? 'currentColor'
                          : 'none'
                      }
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-green_1 mr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill={
                        items[deposition].ranking >= 2.0
                          ? 'currentColor'
                          : 'none'
                      }
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-green_1 mr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill={
                        items[deposition].ranking >= 3.0
                          ? 'currentColor'
                          : 'none'
                      }
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-green_1 mr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill={
                        items[deposition].ranking >= 4.0
                          ? 'currentColor'
                          : 'none'
                      }
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-green_1 mr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill={
                        items[deposition].ranking === 5.0
                          ? 'currentColor'
                          : 'none'
                      }
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-green_1 mr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray_2 text-sm italic ml-3">
                      Avaliação {items[deposition].ranking}
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <p className="leading-relaxed p-5 w w-4/5 text-white text-sm ">
                  {items[deposition].text}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block sm:w-16 sm:h-16 w-8 h-8 text-gray_4 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row w-full justify-between">
        <button
          className="flex flex-row items-center mb-5 cursor-pointer focus:outline-none"
          onClick={() => setDeposition(0)}
        >
          <img
            className="w-16 h-16 rounded-full sm:block hidden"
            src="assets/images/laercio.jfif"
            alt="Foto de Laercio Bubiak"
          />
          <div className="flex flex-col sm:ml-5">
            <h4 className="italic text-white">Laercio Bubiak</h4>
            <p className="text-sm text-gray_2 italic">
              Co-founder,{' '}
              <span className="text-green_1 font-bold not-italic">RAM</span>
            </p>
          </div>
        </button>
        <button
          className="flex flex-row items-center mb-5 cursor-pointer focus:outline-none"
          onClick={() => setDeposition(1)}
        >
          <img
            className="w-16 h-16 rounded-full sm:block hidden"
            src="assets/images/alan.jpg"
            alt="Foto de Alan Nascimento"
          />
          <div className="flex flex-col sm:mr-0 sm:ml-5 ml-3 mr-3">
            <h4 className="italic text-white">Alan Nascimento</h4>
            <p className="text-sm text-gray_2 italic">
              Academic,{' '}
              <span className="text-green_1 font-bold not-italic">
                Uniamérica
              </span>
            </p>
          </div>
        </button>
        <button
          className="flex flex-row items-center mb-5 cursor-pointer focus:outline-none"
          onClick={() => setDeposition(2)}
        >
          <img
            className="w-16 h-16 rounded-full sm:block hidden"
            src="assets/images/amanda.jpg"
            alt="Foto de Amanda Baldocchi"
          />
          <div className="flex flex-col sm:ml-5">
            <h4 className="italic text-white">Amanda Baldocchi</h4>
            <p className="text-sm text-gray_2 italic">
              Blogger,{' '}
              <span className="text-green_1 font-bold not-italic">
                Baldocchi Fashion
              </span>
            </p>
          </div>
        </button>
      </div>
      <div className="w-full h-1 rounded bg-gray_3 mt-2">
        <div
          style={{
            transition: 'all 0.2s linear',
            marginLeft:
              deposition === 1 ? '33.333%' : deposition === 2 ? '66.666%' : '0%'
          }}
          className="w-1/3 h-1 rounded bg-green_1"
        />
      </div>
    </div>
  )
}

export default Depositions
