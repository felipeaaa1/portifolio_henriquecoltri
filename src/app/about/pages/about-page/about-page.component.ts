import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../core/services/seo.service';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { ContactCtaComponent } from '../../../home/components/contact-cta/contact-cta.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    RevealDirective,
    ContactCtaComponent
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {

  readonly contactUrl: string;

  constructor(
    private seoService: SeoService,
    portfolioService: PortfolioService
  ) {
    this.contactUrl = portfolioService.getWhatsappUrl();
  }

  ngOnInit(): void {

    this.seoService.setPage({

      title:
        'Quem sou | Henrique Coltri — Estrategista de Marcas e Brand Designer',

      description:
        'Conheça a trajetória de Henrique Coltri, publicitário e brand designer, sua formação, visão sobre marcas, manifesto e experiências construídas ao longo da carreira.',

      path:
        '/quem-sou',

      image:
        'assets/images/henrique-coltri-portrait.webp',

      imageAlt:
        'Retrato de Henrique Coltri, estrategista de marcas e brand designer',

      structuredData: {

        '@context':
          'https://schema.org',

        '@type':
          'ProfilePage',

        mainEntity: {

          '@type':
            'Person',

          '@id':
            'https://www.henriquecoltri.com.br/#person',

          name:
            'Henrique Coltri',

          url:
            'https://www.henriquecoltri.com.br/quem-sou',

          image:
            'https://www.henriquecoltri.com.br/assets/images/henrique-coltri-portrait.webp',

          jobTitle:
            'Estrategista de Marcas e Brand Designer',

          alumniOf: {
            '@type':
              'CollegeOrUniversity',

            name:
              'Universidade Presbiteriana Mackenzie'
          },

          knowsAbout: [
            'Branding',
            'Estratégia de marca',
            'Posicionamento de marca',
            'Identidade visual',
            'Identidade verbal',
            'Direção criativa'
          ]
        }
      }
    });
  }
}