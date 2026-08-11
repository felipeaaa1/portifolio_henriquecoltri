# Portfólio Henrique Coltri

SPA institucional do publicitário e estrategista de marcas Henrique Coltri. O projeto apresenta posicionamento, soluções, método, cases, perfil, manifesto, marcas, depoimentos e contato em uma experiência editorial responsiva.

O uso de Angular 8 é deliberado: além do portfólio, esta base serve para estudar a arquitetura legada baseada em `NgModule` encontrada em aplicações como o `pje-front`. Por isso, as dependências não devem ser atualizadas sem uma decisão específica de migração.

## Stack preservada

- Node.js 10.24.1 e npm 6.14.12
- Angular 8.2.14 e Angular CLI 8.3.x
- TypeScript 3.5.3 e RxJS 6.4.0
- Angular Router, SCSS, Karma e Jasmine

## Executar localmente

Com o NVM instalado:

```bash
nvm install 10.24.1
nvm use 10.24.1
npm install
npm start
```

A aplicação fica disponível em `http://localhost:4200/`.

```bash
npm test
npm run lint
npm run build
```

O Angular 8/Webpack desta base pode falhar em versões modernas do Node por incompatibilidade com OpenSSL. Use o Node 10.24.1 indicado pelo projeto.

## Arquitetura

- `core`: models e services singleton com os conteúdos tipados.
- `layout`: header e footer persistentes.
- `shared`: título de seção, links sociais e botão de contato reutilizáveis.
- `home`: página inicial e suas seções.
- `cases`: listagem de cases preparada para uma futura rota de detalhes.

Rotas carregadas sob demanda:

- `/` — Home
- `/cases` — listagem de cases

## Conteúdo pendente do cliente

Os dados demonstrativos estão centralizados em `PortfolioService` e `CaseService`. Antes da publicação, confirmar:

- logotipo ou assinatura, paleta e fonte oficiais;
- foto e imagem ou vídeo do hero;
- textos definitivos das seis atuações e do método;
- conteúdo e imagens dos cases reais;
- manifesto, marcas e depoimentos autorizados;
- WhatsApp, e-mail, Instagram, LinkedIn e Behance.

Consulte também `src/assets/README.md` para a organização dos arquivos visuais.
