import { useId } from 'react';

// Importando as imagens
import erpSystemImg from '../assets/images/projects/erp-system.svg';
import ecommerceImg from '../assets/images/projects/ecommerce.svg';
import chatbotImg from '../assets/images/projects/chatbot.svg';

const Portfolio = () => {
    const portfolioId = useId();
    const projects = [
        {
            id: 1,
            title: "Sistema ERP Corporativo",
            category: "Sistema Web",
            description: "Sistema completo de gestão empresarial com módulos financeiro, vendas e estoque.",
            image: erpSystemImg,
            technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
            link: "#"
        },
        {
            id: 2,
            title: "E-commerce Fashion Store",
            category: "Site",
            description: "Loja virtual moderna com catálogo dinâmico, carrinho e sistema de pagamento.",
            image: ecommerceImg,
            technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
            link: "#"
        },
        {
            id: 3,
            title: "Chatbot Atendimento IA",
            category: "Automação IA",
            description: "Agente inteligente para atendimento ao cliente com processamento de linguagem natural.",
            image: chatbotImg,
            technologies: ["Python", "OpenAI", "FastAPI", "WebSocket"],
            link: "#"
        },
        {
            id: 4,
            title: "App Gestão de Projetos",
            category: "Sistema Web",
            description: "Plataforma colaborativa para gestão de equipes e projetos com dashboards em tempo real.",
            image: erpSystemImg, // Reutilizando até criar mais imagens
            technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
            link: "#"
        },
        {
            id: 5,
            title: "Landing Page Corporativa",
            category: "Site",
            description: "Site institucional responsivo com animações modernas e otimização para conversão.",
            image: ecommerceImg, // Reutilizando até criar mais imagens
            technologies: ["React", "GSAP", "Netlify", "CMS"],
            link: "#"
        },
        {
            id: 6,
            title: "Automação de Marketing",
            category: "Automação IA",
            description: "Sistema automatizado para campanhas de email marketing e análise de engajamento.",
            image: chatbotImg, // Reutilizando até criar mais imagens
            technologies: ["Node.js", "TensorFlow", "Redis", "AWS"],
            link: "#"
        }
    ];

    const categories = ["Todos", "Sistema Web", "Site", "Automação IA"];

    return (
        <section id={`portfolio-${portfolioId}`} className="py-20 bg-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                        Nossos Projetos
                    </h2>
                    <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                        Conheça alguns dos projetos que desenvolvemos para nossos clientes
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 
                       bg-white text-secondary-700 border border-secondary-300
                       hover:bg-primary-600 hover:text-white hover:border-primary-600
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-secondary-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* View Project Link */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                                >
                                    Ver projeto
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-label="Ícone seta para direita"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                            Gostou dos nossos projetos?
                        </h3>
                        <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
                            Entre em contato conosco e vamos desenvolver uma solução personalizada
                            para o seu negócio
                        </p>
                        <a
                            href="#contato"
                            className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Solicitar Orçamento
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-label="Ícone seta para direita"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
