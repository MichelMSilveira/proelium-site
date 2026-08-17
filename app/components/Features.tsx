import React from "react";

const features = [
  {
    icon: "👥",
    title: "Gestão de Clientes",
    description: "Cadastre e gerencie todos os dados de clientes em um único lugar. Histórico completo de interações e documentos.",
  },
  {
    icon: "💼",
    title: "Pipeline Comercial",
    description: "Acompanhe oportunidades desde o primeiro contato até o fechamento. Etapas claras e automação de workflows.",
  },
  {
    icon: "📊",
    title: "Orçamentos",
    description: "Crie orçamentos estruturados por ambiente. Aprovações integradas e rastreamento completo.",
  },
  {
    icon: "🎯",
    title: "Operações",
    description: "Agenda operacional, levantamentos técnicos e acompanhamento de execução em tempo real.",
  },
  {
    icon: "📱",
    title: "Multi-Plataforma",
    description: "Acesse de qualquer lugar. PWA, Android, Windows e navegadores - tudo sincronizado.",
  },
  {
    icon: "🔄",
    title: "Sincronização",
    description: "Dados sincronizados em tempo real entre todos os dispositivos e usuários autorizados.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tudo que você precisa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proelium integra todas as áreas do seu negócio em uma plataforma moderna e fácil de usar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
