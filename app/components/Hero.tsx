import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="text-sm text-white/90">Plataforma de Gestão em Tempo Real</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Gestão Operacional <br />
          <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-transparent bg-clip-text">
            Simplificada
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Proelium oferece uma plataforma integrada para gerenciar clientes, 
          oportunidades, orçamentos e operações em tempo real. Do primeiro contato 
          à execução, tudo sincronizado e acessível de qualquer lugar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
            Comece Agora
          </button>
          <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm">
            Ver Demo
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-white/80">
          <div>
            <div className="text-3xl font-bold text-white">1000+</div>
            <p className="text-sm">Usuários Ativos</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">99.9%</div>
            <p className="text-sm">Disponibilidade</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <p className="text-sm">Sincronização</p>
          </div>
        </div>
      </div>
    </section>
  );
}
