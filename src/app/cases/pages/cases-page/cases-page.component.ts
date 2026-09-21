import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Case } from '../../../core/models/case.model';
import { CaseService } from '../../../core/services/case.service';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SeoService } from '../../../core/services/seo.service';

import { CaseCardComponent } from '../../components/case-card/case-card.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-cases-page',
  standalone: true,
  imports: [
    NgFor,
    CaseCardComponent,
    RevealDirective
  ],
  templateUrl: './cases-page.component.html',
  styleUrl: './cases-page.component.scss'
})
export class CasesPageComponent implements OnInit {

  cases: Case[] = [];

  readonly contactUrl: string;

  constructor(
    private caseService: CaseService,
    private portfolioService: PortfolioService,
    private seoService: SeoService
  ) {
    this.contactUrl =
      this.portfolioService.getWhatsappUrl();
  }

  ngOnInit(): void {

    this.seoService.setPage({

      title:
        'Cases de Branding e Identidade Visual | Henrique Coltri',

      description:
        'Conheça projetos de branding, posicionamento e identidade visual desenvolvidos por Henrique Coltri para marcas de diferentes segmentos.',

      path:
        '/cases',

      image:
        'assets/images/projects/bahniuk-supermercados/17.webp',

      imageAlt:
        'Cases de branding e identidade visual de Henrique Coltri',

      structuredData: {

        '@context':
          'https://schema.org',

        '@type':
          'CollectionPage',

        '@id':
          'https://www.henriquecoltri.com.br/cases#collection',

        url:
          'https://www.henriquecoltri.com.br/cases',

        name:
          'Cases de Branding e Identidade Visual',

        description:
          'Projetos de branding, posicionamento e identidade visual desenvolvidos por Henrique Coltri.',

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
              url: 'https://www.henriquecoltri.com.br/projetos/escola-livre-porto',
              name: 'Escola Livre Porto'
            },

            {
              '@type': 'ListItem',
              position: 2,
              url: 'https://www.henriquecoltri.com.br/projetos/hardcore-game-channel',
              name: 'Hardcore Game Channel'
            },

            {
              '@type': 'ListItem',
              position: 3,
              url: 'https://www.henriquecoltri.com.br/projetos/jcell-imports',
              name: 'JCELL Imports'
            },

            {
              '@type': 'ListItem',
              position: 4,
              url: 'https://www.henriquecoltri.com.br/projetos/bahniuk-supermercados',
              name: 'Bahniuk Supermercados'
            },

            {
              '@type': 'ListItem',
              position: 5,
              url: 'https://www.henriquecoltri.com.br/projetos/herois-da-galaxia',
              name: 'Heróis da Galáxia'
            },

            {
              '@type': 'ListItem',
              position: 6,
              url: 'https://www.henriquecoltri.com.br/projetos/o-jardineiro',
              name: 'O Jardineiro'
            },

            {
              '@type': 'ListItem',
              position: 7,
              url: 'https://www.henriquecoltri.com.br/projetos/equipa',
              name: 'Equipa'
            },

            {
              '@type': 'ListItem',
              position: 8,
              url: 'https://www.henriquecoltri.com.br/projetos/deon',
              name: 'Deon'
            }

          ]
        }
      }
    });

    this.caseService
      .getCases()
      .subscribe(
        items => this.cases = items
      );
  }
}