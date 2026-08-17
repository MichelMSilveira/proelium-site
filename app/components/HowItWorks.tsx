import React from "react";

const steps = [
  {
    number: "01",
    title: "Cadastro de Clientes",
    description: "Organize seus clientes com dados completos: contatos, endereços, histórico de relacionamento e preferências.",
  },
  {
    number: "02",
    title: "Pipeline Comercial",
    description: "Registre oportunidades e acompanhe desde o primeiro contato até o orçamento aprovado.",
  },
  {
    number: "03",
    title: "Preparação Operacional",
    description: "Levantamentos técnicos, cronograma de execução e alocação de recursos com agenda integrada.",
  },
  {
    number: "04",
    title: "Execução e Acompanhamento",
    description: "Monitore a obra em tempo real, presença de equipe e próximas ações - tudo sincronizado.",
  },
  {
    number: "05",
    title: "Relatórios e BI",
    description: "Análise de desempenho, margem por obra, evolução de carteira e métricas operacionais.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um fluxo de trabalho limpo que leva seu negócio do conceito à execução.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex gap-6 sm:gap-0 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 pt-2 ${
                    index % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="text-sm font-semibold text-blue-600 mb-1">
                      ETAPA {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Circle */}
                <div className="flex justify-center sm:absolute sm:left-1/2 transform sm:-translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden sm:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
