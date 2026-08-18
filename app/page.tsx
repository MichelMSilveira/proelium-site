const solutions = [
  {
    number: "01",
    title: "Automação residencial",
    description:
      "Cenas, iluminação, climatização, persianas, áudio, vídeo e controle centralizado para ambientes de alto padrão.",
  },
  {
    number: "02",
    title: "Home cinema e áudio",
    description:
      "Projetos de áudio e vídeo com performance, integração estética e experiência imersiva.",
  },
  {
    number: "03",
    title: "Redes e Wi‑Fi",
    description:
      "Cabeamento estruturado, racks, access points e cobertura sem falhas para residências e escritórios.",
  },
  {
    number: "04",
    title: "Segurança e CFTV",
    description:
      "Câmeras, controle de acesso, monitoramento e infraestrutura para proteger o que importa.",
  },
  {
    number: "05",
    title: "Elétrica e infraestrutura",
    description:
      "Quadros, circuitos, passagem técnica, organização de racks e base elétrica para tecnologia confiável.",
  },
  {
    number: "06",
    title: "Gestão técnica de obras",
    description:
      "Acompanhamento, compatibilização e execução integrada com arquitetura, interiores e engenharia.",
  },
];

const principles = [
  {
    number: "01",
    title: "Planejamento antes da obra",
    text: "Entramos cedo para prever infraestrutura, evitar retrabalho e proteger o acabamento final.",
  },
  {
    number: "02",
    title: "Tecnologia invisível",
    text: "A automação aparece na experiência. A técnica fica organizada, documentada e discreta.",
  },
  {
    number: "03",
    title: "Execução limpa",
    text: "Cuidado com passagem, identificação, rack, testes e padrão de entrega em cada detalhe.",
  },
  {
    number: "04",
    title: "Continuidade",
    text: "Depois da entrega, o projeto precisa seguir funcionando com suporte e evolução planejada.",
  },
];

const steps = [
  { number: "01", title: "Diagnóstico", text: "Leitura do projeto, necessidades do cliente e pontos críticos da obra." },
  { number: "02", title: "Projeto técnico", text: "Definição de soluções, infraestrutura, rede, automação e pontos de integração." },
  { number: "03", title: "Infraestrutura", text: "Execução da base elétrica, lógica, caixas, passagem, racks e organização técnica." },
  { number: "04", title: "Instalação", text: "Montagem dos equipamentos com acabamento, identificação e padrão de serviço." },
  { number: "05", title: "Integração", text: "Configuração, testes, cenas, acessos, conectividade e validação com o cliente." },
  { number: "06", title: "Entrega e suporte", text: "Orientação de uso, documentação, ajustes finos e acompanhamento pós-obra." },
];

const projects = [
  {
    title: "Residência conectada",
    category: "AUTOMAÇÃO",
    description: "Controle integrado de iluminação, climatização, cenas e segurança.",
  },
  {
    title: "Cinema residencial",
    category: "ÁUDIO E VÍDEO",
    description: "Experiência imersiva com áudio, imagem, acústica e operação simples.",
  },
  {
    title: "Rede de alta cobertura",
    category: "REDES",
    description: "Wi‑Fi estável, cabeamento estruturado e rack organizado.",
  },
  {
    title: "Infraestrutura de obra",
    category: "EXECUÇÃO",
    description: "Base técnica planejada antes do acabamento para evitar retrabalho.",
  },
];

const checkpoints = [
  "compatibilização com arquitetura e interiores",
  "infraestrutura preparada antes do acabamento",
  "racks identificados e organizados",
  "testes de rede, áudio, vídeo, segurança e automação",
];

function BrandSymbol() {
  return (
    <svg className="brand-symbol" viewBox="0 0 80 90" aria-hidden="true">
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
            <a href="#metodo">Método</a>
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <a href="#contato" className="button button-primary header-cta">
            Iniciar projeto
          </a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">
              <span>Infraestrutura</span>
              <b>•</b>
              Automação
              <b>•</b>
              Tecnologia
            </p>

            <h1>
              Tecnologia que conecta projeto, espaço e <span>experiência.</span>
            </h1>

            <p className="hero-description">
              Projetamos e executamos a base técnica para residências, escritórios
              e obras que exigem automação, conectividade, segurança e acabamento
              em alto padrão.
            </p>

            <div className="hero-actions">
              <a href="#solucoes" className="button button-primary">
                Conhecer soluções <span>→</span>
              </a>
              <a href="#metodo" className="button button-outline">
                Ver método
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-panel">
              <div className="hero-panel-top">
                <span>PROELIUM</span>
                <span>TECNOLOGIA INTEGRADA</span>
              </div>
              <div className="hero-diagram">
                <BrandSymbol />
                <span className="node node-one" />
                <span className="node node-two" />
                <span className="node node-three" />
                <span className="node node-four" />
              </div>
              <div className="hero-panel-bottom">
                <span>Planejar</span>
                <span>Conectar</span>
                <span>Executar</span>
              </div>
            </div>
            <div className="hero-line hero-line-one" />
            <div className="hero-line hero-line-two" />
            <div className="hero-badge">
              <BrandSymbol />
              <span>
                PROJETO
                <br />
                + EXECUÇÃO
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="section solutions-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Nossas soluções</p>
              <h2>
                Um ecossistema.
                <br />
                Várias camadas técnicas.
              </h2>
            </div>
            <p>
              Da entrada de energia ao aplicativo no celular, cada camada precisa
              ser pensada como parte do mesmo sistema.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.number}>
                <span className="card-number">{solution.number}</span>
                <div className="solution-icon"><span>⌂</span></div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <a href="#contato">Solicitar análise <span>→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section" id="sobre">
        <div className="container dark-grid">
          <div className="dark-intro">
            <p className="section-kicker">Nossa filosofia</p>
            <h2>
              Tecnologia que trabalha em <span>silêncio.</span>
            </h2>
            <p>
              O melhor sistema é aquele que simplifica o uso do espaço sem disputar
              atenção com arquitetura, rotina ou experiência do cliente.
            </p>
          </div>

          <div className="differentials-grid">
            {principles.map((item) => (
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
              <p className="section-kicker">Nosso método</p>
              <h2>
                Do projeto
                <br />à entrega.
              </h2>
            </div>
            <p>Planejar <span>•</span> Conectar <span>•</span> Executar <span>•</span> Sustentar</p>
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
              <p className="section-kicker">Portfólio técnico</p>
              <h2>
                Soluções reais.
                <br />
                Ambientes preparados.
              </h2>
            </div>
            <a href="#contato">Planejar um projeto <span>→</span></a>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-card-${index + 1}`} key={project.title}>
                <div className="project-image">
                  <div className="project-mark"><BrandSymbol /></div>
                  <div className="project-info">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="numbers-section">
        <div className="container numbers-grid">
          <div className="numbers-brand"><BrandSymbol /></div>
          <div className="number-item"><strong>Projeto</strong><span>Da leitura técnica à entrega</span></div>
          <div className="number-item"><strong>Integração</strong><span>Redes, áudio, vídeo, segurança e automação</span></div>
          <div className="number-item"><strong>Precisão</strong><span>Execução limpa e documentação</span></div>
          <div className="number-item"><strong>Suporte</strong><span>Continuidade depois da obra</span></div>
        </div>
      </section>

      <section className="checklist-section">
        <div className="container checklist-grid">
          <div>
            <p className="section-kicker">Antes do acabamento</p>
            <h2>O que precisa estar previsto para a tecnologia funcionar bem?</h2>
          </div>
          <ul>
            {checkpoints.map((item) => (
              <li key={item}><span>✓</span>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="contact-content">
          <div className="contact-copy">
            <p className="section-kicker">Vamos conversar</p>
            <h2>
              Seu projeto merece uma infraestrutura à altura.
            </h2>
            <p>
              A próxima etapa é conectar os canais oficiais da Proelium: WhatsApp,
              e-mail corporativo e redes sociais. Enquanto isso, o site segue em
              acabamento visual e técnico.
            </p>
            <a href="#inicio" className="button button-accent">
              Voltar ao topo <span>↑</span>
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
            <p>Tecnologia integrada ao projeto, com precisão em cada detalhe.</p>
          </div>

          <div className="footer-column">
            <strong>Soluções</strong>
            <a href="#solucoes">Automação residencial</a>
            <a href="#solucoes">Home cinema e áudio</a>
            <a href="#solucoes">Redes e Wi‑Fi</a>
            <a href="#solucoes">Segurança e CFTV</a>
            <a href="#solucoes">Infraestrutura técnica</a>
          </div>

          <div className="footer-column">
            <strong>Institucional</strong>
            <a href="#sobre">Sobre</a>
            <a href="#metodo">Método</a>
            <a href="#projetos">Portfólio</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footer-column">
            <strong>Contato</strong>
            <span>São Paulo • SP</span>
            <span>Canais oficiais em configuração</span>
            <span>proeliumservicos.com.br</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 PROELIUM SERVIÇOS. TODOS OS DIREITOS RESERVADOS.</span>
          <span>PLANEJAR • CONECTAR • EXECUTAR • SUSTENTAR</span>
        </div>
      </footer>
    </main>
  );
}
