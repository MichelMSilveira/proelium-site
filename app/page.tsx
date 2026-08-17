const solutions = [
  {
    number: "01",
    title: "Automação Residencial",
    description:
      "Integração de iluminação, climatização, persianas, cenas e controle total dos ambientes.",
  },
  {
    number: "02",
    title: "Home Cinema e Áudio",
    description:
      "Projetos de áudio e vídeo de alta performance integrados ao ambiente com excelência.",
  },
  {
    number: "03",
    title: "Redes e Wi-Fi",
    description:
      "Infraestrutura de rede profissional e cobertura Wi-Fi estável em toda a residência.",
  },
  {
    number: "04",
    title: "Segurança",
    description:
      "CFTV, controle de acesso e monitoramento para proteger o que realmente importa.",
  },
  {
    number: "05",
    title: "Elétrica e Infraestrutura",
    description:
      "Projetos elétricos, quadros, cabeamento estruturado, racks e infraestrutura técnica.",
  },
  {
    number: "06",
    title: "Gestão de Obras",
    description:
      "Planejamento, acompanhamento e integração entre todas as etapas do projeto.",
  },
];

const differentials = [
  {
    number: "01",
    title: "Integração com inteligência",
    text: "Sistemas que conversam entre si para entregar uma experiência simples e integrada.",
  },
  {
    number: "02",
    title: "Execução com precisão",
    text: "Padrões técnicos elevados e atenção aos detalhes em cada etapa da obra.",
  },
  {
    number: "03",
    title: "Soluções personalizadas",
    text: "Projetos únicos para cada cliente, espaço e necessidade.",
  },
  {
    number: "04",
    title: "Suporte e continuidade",
    text: "Acompanhamento técnico e suporte especializado após a entrega.",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Entendimento das necessidades e avaliação do projeto.",
  },
  {
    number: "02",
    title: "Projeto",
    text: "Planejamento técnico e definição das melhores soluções.",
  },
  {
    number: "03",
    title: "Infraestrutura",
    text: "Execução da base técnica com organização e qualidade.",
  },
  {
    number: "04",
    title: "Instalação",
    text: "Implementação dos sistemas com precisão e acabamento.",
  },
  {
    number: "05",
    title: "Integração",
    text: "Configuração, testes e integração total dos sistemas.",
  },
  {
    number: "06",
    title: "Suporte",
    text: "Acompanhamento contínuo e suporte especializado.",
  },
];

const projects = [
  {
    title: "Residência Integrada",
    category: "AUTOMAÇÃO",
    image: "/images/projeto-residencia.jpg",
  },
  {
    title: "Cinema Residencial",
    category: "ÁUDIO E VÍDEO",
    image: "/images/projeto-cinema.jpg",
  },
  {
    title: "Ambientes Inteligentes",
    category: "INTEGRAÇÃO",
    image: "/images/projeto-interiores.jpg",
  },
  {
    title: "Infraestrutura Técnica",
    category: "REDES E TECNOLOGIA",
    image: "/images/projeto-rack.jpg",
  },
];

function BrandSymbol() {
  return (
    <svg
      className="brand-symbol"
      viewBox="0 0 80 90"
      aria-hidden="true"
    >
      <path d="M40 5 70 23v44L40 85 10 67V23Z" />
      <path d="M40 5v38L10 67" />
      <path d="m40 43 30 24" />
      <circle cx="40" cy="43" r="6" />
      <circle cx="10" cy="67" r="5" />
      <circle cx="70" cy="67" r="5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Proelium Serviços">
            <BrandSymbol />

            <div className="brand-text">
              <strong>PROELIUM</strong>
              <span>SERVIÇOS</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
            <a href="#projetos">Projetos</a>
            <a href="#metodo">Método</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <a href="#contato" className="button button-primary header-cta">
            Falar com a Proelium
          </a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">
              <span>INFRAESTRUTURA</span>
              <b>•</b>
              AUTOMAÇÃO
              <b>•</b>
              TECNOLOGIA
            </p>

            <h1>
              Tecnologia que conecta projeto, espaço e{" "}
              <span>experiência.</span>
            </h1>

            <p className="hero-description">
              Da infraestrutura à automação, criamos soluções integradas
              para residências e obras que exigem planejamento, precisão
              e execução.
            </p>

            <div className="hero-actions">
              <a href="#solucoes" className="button button-primary">
                Conhecer soluções <span>→</span>
              </a>

              <a href="#contato" className="button button-outline">
                Falar com a Proelium
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image" />

            <div className="hero-line hero-line-one" />
            <div className="hero-line hero-line-two" />

            <div className="hero-badge">
              <BrandSymbol />
              <span>
                TECNOLOGIA
                <br />
                INTEGRADA
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="section solutions-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">NOSSAS SOLUÇÕES</p>
              <h2>
                Um ecossistema.
                <br />
                Várias soluções.
              </h2>
            </div>

            <p>
              Tecnologia, infraestrutura e execução reunidas em um único
              projeto.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.number}>
                <span className="card-number">{solution.number}</span>

                <div className="solution-icon">
                  <span>⌂</span>
                </div>

                <h3>{solution.title}</h3>

                <p>{solution.description}</p>

                <a href="#contato">
                  Saiba mais <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section" id="sobre">
        <div className="container dark-grid">
          <div className="dark-intro">
            <p className="section-kicker">NOSSA FILOSOFIA</p>

            <h2>
              Tecnologia que
              <br />
              trabalha em <span>silêncio.</span>
            </h2>

            <p>
              A tecnologia deve simplificar o ambiente, não chamar
              atenção para si.
            </p>
          </div>

          <div className="differentials-grid">
            {differentials.map((item) => (
              <article key={item.number} className="differential">
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="section method-section">
        <div className="container">
          <div className="method-heading">
            <div>
              <p className="section-kicker">NOSSO MÉTODO</p>

              <h2>
                Do projeto
                <br />à entrega.
              </h2>
            </div>

            <p>
              Planejar <span>•</span> Conectar <span>•</span> Executar{" "}
              <span>•</span> Entregar resultados
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-top">
                  <span>{step.number}</span>
                  <BrandSymbol />
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="section projects-section">
        <div className="container">
          <div className="projects-heading">
            <div>
              <p className="section-kicker">PROJETOS</p>

              <h2>
                Soluções reais.
                <br />
                Resultados reais.
              </h2>
            </div>

            <a href="#contato">
              Ver todos os projetos <span>→</span>
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `linear-gradient(
                      to top,
                      rgba(20, 25, 22, 0.72),
                      rgba(20, 25, 22, 0.05)
                    ), url("${project.image}")`,
                  }}
                >
                  <div className="project-info">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="numbers-section">
        <div className="container numbers-grid">
          <div className="numbers-brand">
            <BrandSymbol />
          </div>

          <div className="number-item">
            <strong>20+</strong>
            <span>Anos de experiência</span>
          </div>

          <div className="number-item">
            <strong>Projeto</strong>
            <span>Do planejamento à entrega</span>
          </div>

          <div className="number-item">
            <strong>100%</strong>
            <span>Comprometimento</span>
          </div>

          <div className="number-item">
            <strong>Suporte</strong>
            <span>Pós-venda especializado</span>
          </div>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="contact-content">
          <div className="contact-copy">
            <p className="section-kicker">VAMOS CONVERSAR</p>

            <h2>
              Seu projeto merece
              <br />
              uma infraestrutura
              <br />à altura.
            </h2>

            <p>
              Conte com a Proelium para transformar tecnologia em
              conforto, segurança e praticidade.
            </p>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="button button-accent"
            >
              Falar com a Proelium <span>→</span>
            </a>
          </div>
        </div>

        <div className="contact-image">
          <div className="contact-brand-card">
            <BrandSymbol />

            <div>
              <strong>PROELIUM</strong>
              <span>SERVIÇOS</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <BrandSymbol />

              <div className="brand-text">
                <strong>PROELIUM</strong>
                <span>SERVIÇOS</span>
              </div>
            </div>

            <p>
              Tecnologia integrada ao seu projeto, com precisão em cada
              detalhe.
            </p>
          </div>

          <div className="footer-column">
            <strong>Soluções</strong>
            <a href="#solucoes">Automação residencial</a>
            <a href="#solucoes">Home cinema e áudio</a>
            <a href="#solucoes">Redes e Wi-Fi</a>
            <a href="#solucoes">Segurança</a>
            <a href="#solucoes">Infraestrutura</a>
          </div>

          <div className="footer-column">
            <strong>Institucional</strong>
            <a href="#sobre">Sobre nós</a>
            <a href="#metodo">Nosso método</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footer-column">
            <strong>Contato</strong>
            <span>São Paulo • SP</span>
            <a href="mailto:contato@proelium.com.br">
              contato@proelium.com.br
            </a>
          </div>

          <div className="footer-column">
            <strong>Siga-nos</strong>

            <div className="social-links">
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="LinkedIn">
                IN
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 PROELIUM SERVIÇOS. TODOS OS DIREITOS RESERVADOS.
          </span>

          <span>PLANEJAR • CONECTAR • EXECUTAR • ENTREGAR</span>
        </div>
      </footer>
    </main>
  );
}