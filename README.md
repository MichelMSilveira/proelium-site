# Proelium — site institucional

Site institucional da Proelium Serviços, criado para apresentar soluções de automação residencial, redes, segurança, áudio e vídeo, infraestrutura e gestão de obras.

O projeto funciona como a porta de entrada pública da empresa: traduz a proposta da Proelium em uma experiência visual clara, apresenta áreas de atuação e organiza imagens de serviços e projetos reais.

## Stack

- Next.js 16 com App Router;
- React 19 e TypeScript;
- Tailwind CSS 4 via PostCSS;
- `lucide-react` para ícones;
- deploy documentado em [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Executar localmente

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para validar a versão de produção:

```bash
npm run lint
npm run build
npm start
```

## Organização

- `app/`: páginas, layout, estilos e componentes da experiência institucional;
- `public/images/`: marca, serviços e projetos;
- `docs/`: estado, operação e deploy;
- `PROJECT.md`: identidade, escopo e limites do projeto.

## Direção do produto

O site deve comunicar tecnologia com confiança, mostrar o cuidado técnico da Proelium e facilitar o próximo contato comercial. Conteúdo, imagens e chamadas devem permanecer coerentes com os serviços efetivamente oferecidos pela empresa.

## Segurança e publicação

Segredos, tokens, credenciais e configurações privadas não devem ser versionados. Consulte [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) antes de publicar alterações.

## Status

Projeto público em evolução contínua. O estado de retomada está em [`docs/STATUS.md`](docs/STATUS.md).
