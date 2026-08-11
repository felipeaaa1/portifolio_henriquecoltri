# Portfólio Henrique Coltri

SPA institucional do publicitário e estrategista de marcas Henrique Coltri, construída com Angular 21, componentes standalone, rotas lazy-loaded, SCSS e RxJS.

## Requisitos

- Node.js 24.x
- npm 11.x ou compatível

## Desenvolvimento

```bash
nvm use 24
npm install
npm start
```

A aplicação estará em `http://localhost:4200`.

## Build

```bash
npm run build
```

O resultado é gerado em `dist/henrique-coltri-portfolio/browser`.

## Testes

```bash
npm test
```

## Deploy na Vercel

O arquivo `vercel.json` configura o build, o diretório de saída e o fallback de todas as rotas para `index.html`, necessário para a SPA.

## Estrutura

- `core`: models e serviços de conteúdo.
- `layout`: header e footer standalone.
- `shared`: componentes e diretivas reutilizáveis.
- `home`: seções da página inicial.
- `cases`: listagem de cases.

Os conteúdos e contatos provisórios continuam documentados em `src/assets/README.md`.
