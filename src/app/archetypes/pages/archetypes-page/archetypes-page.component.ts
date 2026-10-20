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

type Archetype = {
  number: string;
  name: string;
  desire: string;
  promise: string;
  shadow: string;
};

type ArchetypeGroup = {
  index: string;
  title: string;
  tension: string;
  description: string;
  archetypes: Archetype[];
};

@Component({
  selector: 'app-archetypes-page',
  standalone: true,
  imports: [
    RevealDirective
  ],
  templateUrl: './archetypes-page.component.html',
  styleUrl: './archetypes-page.component.scss'
})
export class ArchetypesPageComponent implements OnInit {

  readonly contactUrl: string;

  readonly groups: ArchetypeGroup[] = [
    {
      index: '01',
      title: 'Independência & Realização',
      tension: 'Encontrar a si mesmo',
      description:
        'Arquétipos movidos pela busca de liberdade, verdade e uma vida vivida de forma autêntica.',
      archetypes: [
        {
          number: '01',
          name: 'Inocente',
          desire: 'Ser feliz e fazer o que é certo.',
          promise: 'Simplicidade, confiança, esperança e leveza.',
          shadow: 'Ingenuidade, negação ou excesso de idealização.'
        },
        {
          number: '02',
          name: 'Explorador',
          desire: 'Viver com liberdade e descobrir novos caminhos.',
          promise: 'Autonomia, descoberta, autenticidade e aventura.',
          shadow: 'Inquietação constante, fuga ou dificuldade de pertencer.'
        },
        {
          number: '03',
          name: 'Sábio',
          desire: 'Compreender o mundo e encontrar a verdade.',
          promise: 'Clareza, conhecimento, análise e inteligência.',
          shadow: 'Distanciamento, excesso de racionalização ou paralisia pela análise.'
        }
      ]
    },
    {
      index: '02',
      title: 'Risco & Maestria',
      tension: 'Deixar uma marca no mundo',
      description:
        'Arquétipos que encontram significado no desafio, na transformação e na capacidade de produzir impacto.',
      archetypes: [
        {
          number: '04',
          name: 'Herói',
          desire: 'Provar seu valor por meio da coragem e da superação.',
          promise: 'Força, competência, conquista e evolução.',
          shadow: 'Arrogância, obsessão por desempenho ou necessidade permanente de vencer.'
        },
        {
          number: '05',
          name: 'Rebelde',
          desire: 'Romper aquilo que já não serve.',
          promise: 'Libertação, ruptura, provocação e mudança.',
          shadow: 'Rebeldia sem propósito, destruição ou oposição automática.'
        },
        {
          number: '06',
          name: 'Mago',
          desire: 'Transformar a realidade e tornar possível o que parecia improvável.',
          promise: 'Visão, transformação, imaginação e mudança de perspectiva.',
          shadow: 'Manipulação, promessas irreais ou distanciamento da realidade.'
        }
      ]
    },
    {
      index: '03',
      title: 'Pertencimento & Prazer',
      tension: 'Conectar-se aos outros',
      description:
        'Arquétipos que constroem significado por meio da proximidade, da experiência compartilhada e da alegria de pertencer.',
      archetypes: [
        {
          number: '07',
          name: 'Pessoa Comum',
          desire: 'Pertencer e ser aceito como é.',
          promise: 'Proximidade, igualdade, simplicidade e identificação.',
          shadow: 'Conformismo, apagamento da individualidade ou medo de se destacar.'
        },
        {
          number: '08',
          name: 'Amante',
          desire: 'Criar intimidade, conexão e experiências de valor.',
          promise: 'Paixão, beleza, vínculo, prazer e cuidado com os detalhes.',
          shadow: 'Dependência de aprovação, excesso de sedução ou perda de identidade.'
        },
        {
          number: '09',
          name: 'Bobo da Corte',
          desire: 'Viver o momento e trazer alegria.',
          promise: 'Leveza, humor, espontaneidade e diversão.',
          shadow: 'Superficialidade, irresponsabilidade ou dificuldade de sustentar assuntos sérios.'
        }
      ]
    },
    {
      index: '04',
      title: 'Estabilidade & Controle',
      tension: 'Criar ordem e permanência',
      description:
        'Arquétipos orientados a proteger, construir e organizar algo capaz de permanecer no tempo.',
      archetypes: [
        {
          number: '10',
          name: 'Cuidador',
          desire: 'Proteger e cuidar dos outros.',
          promise: 'Acolhimento, serviço, segurança e generosidade.',
          shadow: 'Paternalismo, autossacrifício ou controle disfarçado de cuidado.'
        },
        {
          number: '11',
          name: 'Criador',
          desire: 'Dar forma a algo novo e significativo.',
          promise: 'Originalidade, expressão, imaginação e construção.',
          shadow: 'Perfeccionismo, excesso de complexidade ou criação sem direção.'
        },
        {
          number: '12',
          name: 'Governante',
          desire: 'Criar ordem, estrutura e prosperidade.',
          promise: 'Liderança, controle, excelência, status e estabilidade.',
          shadow: 'Rigidez, autoritarismo ou necessidade excessiva de controle.'
        }
      ]
    }
  ];

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
        'Arquétipos de Marca: os 12 arquétipos no Branding | Henrique Coltri',

      description:
        'Entenda o que são arquétipos de marca, conheça os quatro grupos e os 12 arquétipos e veja como eles ajudam a construir marcas mais coerentes e reconhecíveis.',

      path:
        '/arquetipos',

      image:
        'assets/images/brand/icon-512.png',

      imageAlt:
        'Arquétipos de marca por Henrique Coltri',

      structuredData: {

        '@context':
          'https://schema.org',

        '@type':
          'Article',

        '@id':
          'https://www.henriquecoltri.com.br/arquetipos#article',

        url:
          'https://www.henriquecoltri.com.br/arquetipos',

        headline:
          'Arquétipos de Marca: significado, estratégia e os 12 arquétipos',

        description:
          'Uma introdução aos arquétipos aplicados ao branding, aos quatro territórios motivacionais e aos 12 arquétipos popularizados no marketing por Margaret Mark e Carol S. Pearson.',

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
}
