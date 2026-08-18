# Implantacao e status do projeto

Ultima atualizacao: 17/08/2026

## Situacao atual

- Repositorio GitHub publicado e conectado a Vercel.
- Projeto em Next.js com deploy de producao concluido com sucesso na Vercel.
- Endereco temporario funcional: `https://proelium-site.vercel.app`
- Dominio registrado: `proeliumservicos.com.br`
- Dominio tambem adicionado na Vercel com redirecionamento do dominio raiz para `www`.
- DNS ainda pendente de configuracao no Registro.br porque o dominio esta em periodo de transicao dos servidores DNS.

## Proximo passo de DNS

Quando o Registro.br liberar a edicao da zona DNS:

1. Abrir `proeliumservicos.com.br` no Registro.br.
2. Entrar em **DNS > Configurar zona DNS**.
3. Adicionar o registro solicitado pela Vercel para o dominio raiz:
   - Tipo: `A`
   - Nome: `@`
   - Dados: `216.198.79.1`
4. Salvar.
5. Voltar a Vercel e abrir a configuracao DNS de `www.proeliumservicos.com.br`.
6. Copiar exatamente o registro solicitado pela Vercel para o `www` e cadastrar no Registro.br.
7. Aguardar a propagacao DNS.
8. Confirmar na Vercel que ambos os dominios aparecem como configuracao valida.

> Nao alterar os servidores DNS do dominio. O projeto esta usando os servidores DNS do Registro.br e apenas os registros da zona precisam ser configurados.

## Deploy

O deploy atual foi concluido pela Vercel a partir da branch `main` do repositorio GitHub.

Fluxo esperado daqui para frente:

1. Alteracao no projeto.
2. Commit no GitHub.
3. Push para `main`.
4. Vercel gera automaticamente uma nova implantacao de producao.

## Pendencias antes de considerar o site 100%

- Adicionar imagens reais do hero, contato e projetos em `public/images`.
- Confirmar e inserir WhatsApp oficial.
- Confirmar e inserir e-mail oficial.
- Inserir Instagram e LinkedIn corretos.
- Confirmar a regiao/cidade exibida no rodape.
- Substituir projetos demonstrativos por projetos reais autorizados.
- Revisar logo e identidade visual final.
- Revisar experiencia mobile e responsividade.
- Configurar SEO, Open Graph e imagem de compartilhamento.
- Confirmar favicon final.
- Validar dominio `proeliumservicos.com.br` e `www.proeliumservicos.com.br`.
- Avaliar posteriormente a integracao do sistema operacional em `/app` sem comprometer o site institucional.

## Observacoes importantes do codigo atual

O site ainda possui alguns dados temporarios que nao devem ser tratados como definitivos em producao:

- Link do WhatsApp ainda precisa do numero oficial.
- Links sociais ainda precisam dos enderecos oficiais.
- Imagens de portfolio referenciadas pelo codigo ainda precisam ser adicionadas.
- Dados institucionais e contatos devem ser confirmados antes da versao final.

## Retomada do trabalho

Ao voltar ao projeto, a prioridade e:

1. Finalizar DNS do dominio.
2. Verificar o site no dominio proprio.
3. Corrigir contatos e links oficiais.
4. Adicionar imagens e portfolio reais.
5. Fazer revisao final visual, mobile e SEO.
