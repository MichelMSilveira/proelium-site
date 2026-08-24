import Image from "next/image";

const solutions = [
  {
    title: "Automação Residencial",
    description:
      "Integração de iluminação, climatização, persianas, cenas e controle total dos ambientes.",
    image: "/images/solucoes/automacao/automacao-residencial.jpg",
  },
  {
    title: "Home Cinema e Áudio",
    description:
      "Projetos de áudio e vídeo de alta performance integrados ao ambiente com excelência.",
    image: "/images/solucoes/home-cinema/home-cinema.jpg",
  },
  {
    title: "Redes e Wi-Fi",
    description:
      "Infraestrutura de rede profissional e cobertura Wi-Fi estável para toda a residência.",
    image: "/images/solucoes/redes-wifi/redes-wifi.jpg",
  },
  {
    title: "Segurança",
    description:
      "CFTV, controle de acesso e monitoramento inteligente para proteger o que importa.",
    image: "/images/solucoes/seguranca/seguranca-cftv.jpg",
  },
  {
    title: "Elétrica e Infraestrutura",
    description:
      "Projetos elétricos, quadros, cabeamento estruturado, racks e infraestrutura técnica.",
    image: "/images/solucoes/eletrica-infraestrutura/infraestrutura-eletrica.jpg",
  },
  {
    title: "Gestão de Obras",
    description:
      "Planejamento, acompanhamento e integração entre todas as etapas do projeto.",
    image: "/images/solucoes/gestao-obras/gestao-obras.jpg",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Nossas Soluções
          </h2>

          <p className="mt-4 text-gray-600">
            Tecnologia, engenharia e integração para ambientes inteligentes.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
            >

              <div className="relative h-64">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>


              <div className="p-6">

                <h3 className="text-xl font-semibold text-gray-900">
                  {solution.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {solution.description}
                </p>

                <button className="mt-5 text-sm font-semibold text-orange-600">
                  SAIBA MAIS →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}