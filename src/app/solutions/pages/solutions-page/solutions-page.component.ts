import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

import {
  PortfolioService
} from '../../../core/services/portfolio.service';

import {
  SeoService
} from '../../../core/services/seo.service';

import {
  RevealDirective
} from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-solutions-page',
  standalone: true,
  imports: [
    RevealDirective
  ],
  templateUrl: './solutions-page.component.html',
  styleUrl: './solutions-page.component.scss'
})
export class SolutionsPageComponent implements OnInit {

  readonly contactUrl: string;

  constructor(
    private portfolioService: PortfolioService,
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.contactUrl =
      this.portfolioService.getWhatsappUrl();
  }

  ngOnInit(): void {

    this.seoService.setPage({

      title:
        'Soluções de Branding, Estratégia e Identidade | Henrique Coltri',

      description:
        'Diagnóstico, estratégia de marca, identidade visual e verbal, branding, rebranding, presença digital, sites e consultoria para construir marcas mais claras e coerentes.',

      path:
        '/solucoes',

      image:
        'assets/images/projects/escola-livre-porto/15.webp',

      imageAlt:
        'Soluções de branding e estratégia de marca por Henrique Coltri',

      structuredData: {

        '@context':
          'https://schema.org',

        '@type':
          'CollectionPage',

        '@id':
          'https://www.henriquecoltri.com.br/solucoes#page',

        url:
          'https://www.henriquecoltri.com.br/solucoes',

        name:
          'Soluções de Branding, Estratégia e Identidade',

        description:
          'Soluções para entender, construir, colocar no mundo e acompanhar marcas em diferentes momentos do negócio.',

        inLanguage:
          'pt-BR',

        author: {
          '@id':
            'https://www.henriquecoltri.com.br/#person'
        },

        mainEntity: {

          '@type':
            'ItemList',

          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Diagnóstico de Marca'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Estratégia de Marca'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Identidade Visual'
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Identidade Verbal'
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Branding Completo'
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'Rebranding'
            },
            {
              '@type': 'ListItem',
              position: 7,
              name: 'Desdobramentos de Marca'
            },
            {
              '@type': 'ListItem',
              position: 8,
              name: 'Presença de Marca nas Redes'
            },
            {
              '@type': 'ListItem',
              position: 9,
              name: 'Site de Marca'
            },
            {
              '@type': 'ListItem',
              position: 10,
              name: 'Consultoria de Branding'
            }
          ]
        }
      }
    });

    if (isPlatformBrowser(this.platformId)) {

      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    window.history.replaceState(
      null,
      '',
      `/solucoes#${sectionId}`
    );
  }
}