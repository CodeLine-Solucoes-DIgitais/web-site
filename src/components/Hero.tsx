import { useId } from "react";
import proj1 from "../assets/images/projects/erp.png";
import proj2 from "../assets/images/projects/e-commerce.png";
import proj3 from "../assets/images/projects/chatIA.png";

const Hero = () => {
  const heroId = useId();

  return (
    <section
      id="inicio"
      className="relative pt-44 pb-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-100"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-8 mt-12">
            Transformamos Ideias em <br></br>
            <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Soluções Digitais
            </span>
          </h1>

          <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Especialistas em desenvolvimento de software de alta performance.
            Crie o futuro da sua empresa com a CodeLine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contato"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Iniciar Projeto
            </a>
            <a
              href="#servicos"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              Ver Portfólio
            </a>
          </div>
        </div>

        {/* Feature cards - PROJETOS REAIS DA CODELINE */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {/* CARD 1 - SaaS */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={proj1}
              alt="Projeto SaaS"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              Plataformas SaaS
            </h3>
            <p className="text-secondary-600">
              Desenvolvimento de softwares como serviço (SaaS) escaláveis para
              gestão empresarial.
            </p>
          </div>

          {/* CARD 2 - E-commerce */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={proj2}
              alt="E-commerce"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              E-commerce & Catálogos
            </h3>
            <p className="text-secondary-600">
              Lojas virtuais de alta conversão e catálogos digitais para exibir
              seus produtos.
            </p>
          </div>

          {/* CARD 3 - IA (Mantido e atualizado) */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={proj3}
              alt="Agentes de IA"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              Agentes de IA
            </h3>
            <p className="text-secondary-600">
              Automação de atendimento e processos com Inteligência Artificial
              avançada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
