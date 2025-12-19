const Services = () => {
  const services = [
    {
      id: "sistemas-web",
      title: "Sistemas Web",
      description:
        "Desenvolvemos sistemas web completos, desde ERPs empresariais até plataformas de e-commerce.",
      features: [
        "Arquitetura escalável",
        "Interface intuitiva",
        "Segurança avançada",
        "Integração com APIs",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Ícone sistemas web</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      id: "sites",
      title: "Desenvolvimento de Sites",
      description:
        "Sites modernos, responsivos e otimizados para conversão e experiência do usuário.",
      features: [
        "Design responsivo",
        "SEO otimizado",
        "Carregamento rápido",
        "Analytics integrado",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Ícone desenvolvimento sites</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 0L9 12l3 3"
          />
        </svg>
      ),
    },
    {
      id: "automacao-ia",
      title: "Automações com IA",
      description:
        "Agentes inteligentes que automatizam processos complexos e melhoram a eficiência.",
      features: [
        "Processamento de linguagem natural",
        "Análise de dados automatizada",
        "Chatbots inteligentes",
        "Integração personalizada",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Ícone automação IA</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para transformar seu
            negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-secondary-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-600 text-white rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                {service.title}
              </h3>

              <p className="text-secondary-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-secondary-700"
                  >
                    <svg
                      className="w-5 h-5 text-primary-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-label="Ícone de check"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#contato"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Saiba mais
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="Seta para direita"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
