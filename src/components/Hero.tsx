import { useId } from 'react';

const Hero = () => {
    const heroId = useId();

    return (
        <section id={`inicio-${heroId}`} className="relative pt-16 pb-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-100"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-8 mt-12">
                        Transformamos Ideias em{' '}
                        <br></br>
                        <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                            Soluções Digitais
                        </span>
                    </h1>

                    <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Especialistas em sistemas web, desenvolvimento de sites e automações inteligentes
                        com agentes de IA. Levamos sua empresa para o próximo nível tecnológico.
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
                            Nossos Serviços
                        </a>
                    </div>
                </div>

                {/* Feature cards */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <title>Ícone sistemas web</title>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l4-2 5 5v11M9 19v3h10v-3M9 19h10M7 6V4a1 1 0 011-1h8a1 1 0 011 1v2M7 6l4-2v13M7 6v13h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">Sistemas Web</h3>
                        <p className="text-secondary-600">Desenvolvemos sistemas web robustos e escaláveis para sua empresa.</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <title>Ícone sites modernos</title>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 0L9 12l3 3" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">Sites Modernos</h3>
                        <p className="text-secondary-600">Sites responsivos e otimizados para melhor experiência do usuário.</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <title>Ícone IA e automação</title>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">IA & Automação</h3>
                        <p className="text-secondary-600">Agentes de IA inteligentes para automatizar processos do seu negócio.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
