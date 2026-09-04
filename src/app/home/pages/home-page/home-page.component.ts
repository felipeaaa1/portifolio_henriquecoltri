import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../core/services/seo.service';

import { AboutComponent } from '../../components/about/about.component';
import { BrandMarqueeComponent } from '../../components/brand-marquee/brand-marquee.component';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta.component';
import { FeaturedCasesComponent } from '../../components/featured-cases/featured-cases.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ManifestoComponent } from '../../components/manifesto/manifesto.component';
import { MethodStepsComponent } from '../../components/method-steps/method-steps.component';
import { PositioningComponent } from '../../components/positioning/positioning.component';
import { ServicesGridComponent } from '../../components/services-grid/services-grid.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    PositioningComponent,
    ServicesGridComponent,
    MethodStepsComponent,
    FeaturedCasesComponent,
    AboutComponent,
    ManifestoComponent,
    BrandMarqueeComponent,
    TestimonialsComponent,
    ContactCtaComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit(): void {

    this.seoService.setPage({

      title:
        'Henrique Coltri | Branding, Estratégia e Identidade Visual',

      description:
        'Branding estratégico, posicionamento e identidade visual para negócios que precisam transformar essência em uma marca clara, coerente e reconhecível.',

      path: '/',

      image:
        'assets/images/projects/escola-livre-porto/15.webp',

      imageAlt:
        'Portfólio de branding e identidade visual de Henrique Coltri',

      structuredData: {

        '@context':
          'https://schema.org',

        '@graph': [

          {
            '@type': 'Person',

            '@id':
              'https://henriquecoltri.com.br/#person',

            name:
              'Henrique Coltri',

            url:
              'https://henriquecoltri.com.br/',

            image:
              'https://henriquecoltri.com.br/assets/images/henrique-coltri-portrait.webp',

            jobTitle:
              'Estrategista de Marcas e Brand Designer',

            sameAs: [
              'https://instagram.com/henriquecoltri',
              'https://br.linkedin.com/in/henriquecoltri',
              'https://behance.com/henriquecoltri'
            ],

            knowsAbout: [
              'Branding',
              'Estratégia de marca',
              'Posicionamento de marca',
              'Identidade visual',
              'Identidade verbal',
              'Rebranding',
              'Direção criativa'
            ]
          },

          {
            '@type': 'WebSite',

            '@id':
              'https://henriquecoltri.com.br/#website',

            url:
              'https://henriquecoltri.com.br/',

            name:
              'Henrique Coltri',

            inLanguage:
              'pt-BR',

            publisher: {
              '@id':
                'https://henriquecoltri.com.br/#person'
            }
          }

        ]
      }

    });
  }
}