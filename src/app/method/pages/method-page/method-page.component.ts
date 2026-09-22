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
  selector: 'app-method-page',
  standalone: true,
  imports: [
    RevealDirective
  ],
  templateUrl: './method-page.component.html',
  styleUrl: './method-page.component.scss'
})
export class MethodPageComponent implements OnInit {

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
        'Método de Branding e Construção de Marca | Henrique Coltri',

      description:
        'Conheça o método de Henrique Coltri para transformar contexto e essência em direção estratégica, identidade e presença de marca.',

      path:
        '/metodo',

      image:
        'assets/images/projects/escola-livre-porto/15.webp',

      imageAlt:
        'Método de branding e estratégia de marca de Henrique Coltri',

      structuredData: {

        '@context':
          'https://schema.org',

        '@type':
          'WebPage',

        '@id':
          'https://www.henriquecoltri.com.br/metodo#page',

        url:
          'https://www.henriquecoltri.com.br/metodo',

        name:
          'Método de Branding e Construção de Marca',

        description:
          'Um processo de branding dividido em absorção, direção, forma e presença.',

        inLanguage:
          'pt-BR',

        author: {
          '@id':
            'https://www.henriquecoltri.com.br/#person'
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

  scrollToStage(
    event: Event,
    sectionId: string
  ): void {

    event.preventDefault();

    const target =
      document.getElementById(sectionId);

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
      `/metodo#${sectionId}`
    );
  }

}