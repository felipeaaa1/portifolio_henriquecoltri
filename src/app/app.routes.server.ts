import {
  PrerenderFallback,
  RenderMode,
  ServerRoute
} from '@angular/ssr';

const projectSlugs = [
  'escola-livre-porto',
  'hardcore-game-channel',
  'jcell-imports',
  'bahniuk-supermercados',
  'herois-da-galaxia',
  'o-jardineiro',
  'equipa',
  'deon'
];

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'cases',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'solucoes',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'metodo',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'metodo',
    renderMode: RenderMode.Prerender
  },

  {
    path: 'metodo',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'metodo',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'metodo',
    renderMode: RenderMode.Prerender
  },{
    path: 'projetos/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    async getPrerenderParams() {
      return projectSlugs.map(slug => ({ slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];