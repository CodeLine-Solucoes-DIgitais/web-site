const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Sobre a CodeLine
            </h2>
            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              Somos uma empresa especializada em soluções tecnológicas
              inovadoras, com foco em sistemas web, desenvolvimento de sites e
              automações inteligentes usando agentes de IA.
            </p>
            <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
              Nossa missão é transformar ideias em realidade digital, oferecendo
              soluções personalizadas que impulsionam o crescimento do seu
              negócio.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="Ícone de qualidade"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">
                    Qualidade
                  </h3>
                  <p className="text-secondary-600">Código limpo e testado</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="Ícone de inovação"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Inovação</h3>
                  <p className="text-secondary-600">Tecnologias de ponta</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="Ícone de agilidade"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">
                    Agilidade
                  </h3>
                  <p className="text-secondary-600">Entregas rápidas</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="Ícone de suporte"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Suporte</h3>
                  <p className="text-secondary-600">
                    Atendimento especializado
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Por que escolher a CodeLine?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Experiência Comprovada
                    </h4>
                    <p className="text-primary-100">
                      Anos de experiência em projetos complexos
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tecnologia Avançada</h4>
                    <p className="text-primary-100">
                      Utilizamos as mais modernas tecnologias
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Resultados Mensuráveis
                    </h4>
                    <p className="text-primary-100">
                      Foco em ROI e métricas de sucesso
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Atendimento Especializado
                    </h4>
                    <p className="text-primary-100">
                      Suporte ágil e personalizado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
