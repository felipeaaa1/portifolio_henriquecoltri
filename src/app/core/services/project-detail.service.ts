import { Injectable } from '@angular/core';
import { ProjectDetail } from '../models/project-detail.model';

@Injectable({ providedIn: 'root' })
export class ProjectDetailService {
  private readonly projects: ProjectDetail[] = [
    {
      slug: 'hardcore-game-channel',
      title: 'Hardcore Game Channel',
      coverImage: 'assets/images/projects/hardcore-game-channel/01.webp',
      category: 'Branding e identidade visual',
      summary: 'Identidade criada para uma produtora de conteúdo sobre jogos e reality shows, conectando intensidade, entretenimento e a linguagem visual dos e-sports.',
      projectType: 'Branding',
      segment: 'Produção audiovisual',
      author: 'Henrique Coltri',
      period: 'Julho de 2021',
      gallery: [
        { src: 'assets/images/projects/hardcore-game-channel/01.webp', alt: 'Capa do projeto com a marca Hardcore Game Channel sobre textura azul', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/02.webp', alt: 'Apresentação do contexto e dos dados do projeto Hardcore Game Channel', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/03.webp', alt: 'Direcionamento visual baseado em e-sports, coroa e diamante', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/04.webp', alt: 'Versões principal e monocromática da marca Hardcore Game Channel', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/05.webp', alt: 'Paleta cromática da identidade visual Hardcore Game Channel', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/06.webp', alt: 'Aplicação da marca Hardcore Game Channel em ambiente de evento', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/07.webp', alt: 'Cenário de transmissão com aplicações da identidade Hardcore Game Channel', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/08.webp', alt: 'Moletons personalizados com a identidade Hardcore Game Channel', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/09.webp', alt: 'Camisas esportivas nas cores da marca Hardcore Game Channel', width: 1400, height: 977 },
        { src: 'assets/images/projects/hardcore-game-channel/10.webp', alt: 'Caneca e troféu personalizados com a identidade do projeto', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/11.webp', alt: 'Cartões de visita da identidade Hardcore Game Channel', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/12.webp', alt: 'Bonés personalizados com a marca Hardcore Game Channel', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/13.webp', alt: 'Fones de ouvido com aplicações da identidade Hardcore Game Channel', width: 1400, height: 830 },
        { src: 'assets/images/projects/hardcore-game-channel/14.webp', alt: 'Estojo de fones e copo personalizados com grafismos da marca', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/15.webp', alt: 'Identidade Hardcore Game Channel aplicada em dispositivos digitais', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/16.webp', alt: 'Adesivo e interface de áudio da Hardcore Game Channel em smartphone', width: 1400, height: 788 },
        { src: 'assets/images/projects/hardcore-game-channel/17.webp', alt: 'Painel urbano divulgando uma temporada de conteúdo da Hardcore Game Channel', width: 1400, height: 788 }
      ]
    },
    {
      slug: 'escola-livre-porto',
      title: 'Escola Livre Porto',
      coverImage: 'assets/images/projects/escola-livre-porto/01.webp',
      category: 'Branding e identidade visual',
      summary: 'Identidade para uma escola Waldorf de Cuiabá que transforma educação integral, criatividade e conexão com a natureza em uma marca viva e acolhedora.',
      projectType: 'Branding',
      segment: 'Educação infantojuvenil',
      author: 'Henrique Coltri',
      period: 'Junho de 2024',
      gallery: this.createGallery('escola-livre-porto', [
        'Fachada da Escola Livre Porto com a nova identidade visual',
        'Apresentação da escola e dos dados do projeto',
        'Conceito visual inspirado em educação, natureza e desenvolvimento',
        'Versões principal e reduzida da marca Escola Livre Porto',
        'Paleta cromática da identidade visual Escola Livre Porto',
        'Marca Escola Livre Porto aplicada em composição audiovisual',
        'Publicidade externa da Escola Livre Porto',
        'Caneca e garrafa com grafismos da identidade',
        'Materiais institucionais da Escola Livre Porto',
        'Mochila saco com a identidade da escola',
        'Cartazes institucionais da Escola Livre Porto',
        'Caderno e caneca personalizados da escola',
        'Calendário institucional da Escola Livre Porto',
        'Sacola e painel urbano com aplicações da identidade',
        'Cartazes da Escola Livre Porto em ambiente urbano',
        'Garrafa e camiseta com a identidade visual',
        'Banner de evento da Escola Livre Porto',
        'Uniformes da Escola Livre Porto',
        'Papelaria institucional da escola',
        'Ecobag com grafismos da Escola Livre Porto'
      ], { 13: 830 })
    },
    {
      slug: 'jcell-imports',
      title: 'JCELL Imports',
      coverImage: 'assets/images/projects/jcell-imports/01.webp',
      category: 'Branding e identidade visual',
      summary: 'Identidade para uma loja de celulares e importados que combina tecnologia, modernidade e atendimento acessível em uma expressão marcante e confiável.',
      projectType: 'Branding',
      segment: 'Celulares e acessórios',
      author: 'Henrique Coltri',
      period: 'Maio de 2025',
      gallery: this.createGallery('jcell-imports', [
        'Capa do projeto de identidade visual JCELL Imports',
        'Apresentação da empresa e dos dados do projeto JCELL Imports',
        'Conceito visual baseado em tecnologia, inovação e conexão',
        'Versões principal e reduzida da marca JCELL Imports',
        'Paleta cromática da identidade visual JCELL Imports',
        'Aplicação digital da marca JCELL Imports',
        'Embalagem de entrega e uniforme da JCELL Imports',
        'Anúncios urbanos com a identidade JCELL Imports',
        'Caneca e cartões de visita da JCELL Imports',
        'Smartwatch com aplicação da identidade JCELL Imports',
        'Copos e embalagem de produto personalizados',
        'Sacola de compras da JCELL Imports',
        'Crachá e sacolas com grafismos da marca',
        'Copos de café personalizados da JCELL Imports',
        'Mousepad e camiseta com a identidade visual',
        'Envelope e cartão institucional da JCELL Imports',
        'Ícone de aplicativo e sinalização da loja',
        'Anúncio da JCELL Imports em tablet',
        'Fachada da loja JCELL Imports'
      ])
    },
    {
      slug: 'bahniuk-supermercados',
      title: 'Bahniuk Supermercados',
      coverImage: 'assets/images/projects/bahniuk-supermercados/01.webp',
      category: 'Branding e identidade visual',
      summary: 'Branding para uma rede de supermercados do Paraná, traduzindo proximidade, confiança e orgulho regional em uma identidade contemporânea e acolhedora.',
      projectType: 'Branding',
      segment: 'Supermercado',
      author: 'Henrique Coltri & Total Varejo',
      period: 'Junho de 2025',
      gallery: this.createGallery('bahniuk-supermercados', [
        'Fachada do Bahniuk Supermercados com a nova identidade visual',
        'Apresentação da marca e dos dados do projeto Bahniuk',
        'Conceito visual inspirado em proximidade e orgulho regional',
        'Versões principal e reduzida da marca Bahniuk',
        'Paleta cromática da identidade visual Bahniuk',
        'Sistema de grafismos da marca Bahniuk Supermercados',
        'Painel urbano com campanha do Bahniuk Supermercados',
        'Uniformes da equipe Bahniuk Supermercados',
        'Estampa gráfica da identidade Bahniuk',
        'Embalagens de leite e pão da marca Bahniuk',
        'Veículo de entrega com a identidade Bahniuk',
        'Copo e sacola personalizados do supermercado',
        'Peças publicitárias da marca Bahniuk',
        'Embalagem de ovos e cartão da identidade Bahniuk',
        'Linha de embalagens do Bahniuk Supermercados',
        'Folheto promocional da marca Bahniuk',
        'Campanhas aplicadas na fachada do supermercado',
        'Fachada completa do Bahniuk Supermercados'
      ], { 7: 840, 9: 977, 11: 851, 13: 860, 15: 919, 16: 860, 17: 860, 18: 860 })
    },
    {
      slug: 'herois-da-galaxia',
      title: 'Heróis da Galáxia',
      coverImage: 'assets/images/projects/herois-da-galaxia/01.png',
      category: 'Branding e identidade visual',
      summary: 'Branding e identidade visual desenvolvido para a pizzaria Heróis da Galáxia.',
      projectType: 'Branding',
      segment: 'Pizzaria',
      author: 'Henrique Coltri & Total Varejo',
      period: 'Dezembro de 2023',
      gallery: [
        { src: 'assets/images/projects/herois-da-galaxia/01.png', alt: 'Apresentação visual 1 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/02.png', alt: 'Apresentação visual 2 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/03.png', alt: 'Apresentação visual 3 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/04.png', alt: 'Apresentação visual 4 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/05.png', alt: 'Apresentação visual 5 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/06.png', alt: 'Apresentação visual 6 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/07.png', alt: 'Apresentação visual 7 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/08.png', alt: 'Apresentação visual 8 do projeto Heróis da Galáxia', width: 1400, height: 977 },
        { src: 'assets/images/projects/herois-da-galaxia/09.png', alt: 'Apresentação visual 9 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/10.png', alt: 'Apresentação visual 10 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/11.png', alt: 'Apresentação visual 11 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/12.png', alt: 'Apresentação visual 12 do projeto Heróis da Galáxia', width: 1400, height: 919 },
        { src: 'assets/images/projects/herois-da-galaxia/13.png', alt: 'Apresentação visual 13 do projeto Heróis da Galáxia', width: 1400, height: 788 },
        { src: 'assets/images/projects/herois-da-galaxia/14.png', alt: 'Apresentação visual 14 do projeto Heróis da Galáxia', width: 1400, height: 788 }
      ]
    },
    {
      slug: 'o-jardineiro',
      title: 'O Jardineiro',
      coverImage: 'assets/images/projects/o-jardineiro/01.png',
      category: 'Branding e identidade visual',
      summary: 'Identidade visual criada para O Jardineiro, conectando natureza, sofisticação e uma linguagem contemporânea.',
      projectType: 'Branding',
      segment: 'Paisagismo',
      author: 'Henrique Coltri & Total Varejo',
      period: 'Abril de 2024',
      gallery: [
        { src: 'assets/images/projects/o-jardineiro/01.png', alt: 'Apresentação visual 1 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/02.png', alt: 'Apresentação visual 2 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/03.png', alt: 'Apresentação visual 3 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/04.png', alt: 'Apresentação visual 4 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/05.png', alt: 'Apresentação visual 5 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/06.png', alt: 'Apresentação visual 6 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/07.png', alt: 'Apresentação visual 7 do projeto O Jardineiro', width: 1400, height: 840 },
        { src: 'assets/images/projects/o-jardineiro/08.png', alt: 'Apresentação visual 8 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/09.png', alt: 'Apresentação visual 9 do projeto O Jardineiro', width: 1400, height: 977 },
        { src: 'assets/images/projects/o-jardineiro/10.png', alt: 'Apresentação visual 10 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/11.png', alt: 'Apresentação visual 11 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/12.png', alt: 'Apresentação visual 12 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/13.png', alt: 'Apresentação visual 13 do projeto O Jardineiro', width: 1400, height: 919 },
        { src: 'assets/images/projects/o-jardineiro/14.png', alt: 'Apresentação visual 14 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/15.png', alt: 'Apresentação visual 15 do projeto O Jardineiro', width: 1400, height: 788 },
        { src: 'assets/images/projects/o-jardineiro/16.png', alt: 'Apresentação visual 16 do projeto O Jardineiro', width: 1400, height: 817 },
        { src: 'assets/images/projects/o-jardineiro/17.png', alt: 'Apresentação visual 17 do projeto O Jardineiro', width: 1400, height: 883 }
      ]
    },
    {
      slug: 'equipa',
      title: 'Equipa',
      coverImage: 'assets/images/projects/equipa/01.png',
      category: 'Branding e identidade visual',
      summary: 'Identidade criada para uma marca de Cuiabá voltada a quem vive a natureza, unindo aventura, segurança e confiança em produtos de camping, caça e pesca.',
      projectType: 'Branding',
      segment: 'Artigos de Camping, Caça e Pesca',
      author: 'Henrique Coltri & Total Varejo',
      period: 'Setembro de 2023',
      gallery: [
        { src: 'assets/images/projects/equipa/01.png', alt: 'Apresentação visual 1 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/02.png', alt: 'Apresentação visual 2 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/03.png', alt: 'Apresentação visual 3 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/04.png', alt: 'Apresentação visual 4 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/05.png', alt: 'Apresentação visual 5 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/06.png', alt: 'Apresentação visual 6 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/07.png', alt: 'Apresentação visual 7 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/08.png', alt: 'Apresentação visual 8 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/09.png', alt: 'Apresentação visual 9 do projeto Equipa', width: 1400, height: 977 },
        { src: 'assets/images/projects/equipa/10.png', alt: 'Apresentação visual 10 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/11.png', alt: 'Apresentação visual 11 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/12.png', alt: 'Apresentação visual 12 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/13.png', alt: 'Apresentação visual 13 do projeto Equipa', width: 1400, height: 919 },
        { src: 'assets/images/projects/equipa/14.png', alt: 'Apresentação visual 14 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/15.png', alt: 'Apresentação visual 15 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/16.png', alt: 'Apresentação visual 16 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/17.png', alt: 'Apresentação visual 17 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/18.png', alt: 'Apresentação visual 18 do projeto Equipa', width: 1400, height: 788 },
        { src: 'assets/images/projects/equipa/19.png', alt: 'Apresentação visual 19 do projeto Equipa', width: 1400, height: 788 }
      ]
    },
    {
      slug: 'deon',
      title: 'Deon',
      coverImage: 'assets/images/projects/deon/01.png',
      category: 'Branding e identidade visual',
      summary: 'Identidade desenvolvida para uma loja de calçados, traduzindo moda, personalidade e contemporaneidade em uma marca consistente e reconhecível.',
      projectType: 'Branding',
      segment: 'Loja de calçados',
      author: 'Henrique Coltri & Total Varejo',
      period: 'Abril de 2023',
      gallery: [
        { src: 'assets/images/projects/deon/01.png', alt: 'Apresentação visual 1 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/02.png', alt: 'Apresentação visual 2 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/03.png', alt: 'Apresentação visual 3 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/04.png', alt: 'Apresentação visual 4 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/05.png', alt: 'Apresentação visual 5 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/06.png', alt: 'Apresentação visual 6 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/07.png', alt: 'Apresentação visual 7 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/08.png', alt: 'Apresentação visual 8 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/09.png', alt: 'Apresentação visual 9 do projeto Deon', width: 1400, height: 977 },
        { src: 'assets/images/projects/deon/10.png', alt: 'Apresentação visual 10 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/11.png', alt: 'Apresentação visual 11 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/12.png', alt: 'Apresentação visual 12 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/13.png', alt: 'Apresentação visual 13 do projeto Deon', width: 1400, height: 919 },
        { src: 'assets/images/projects/deon/14.png', alt: 'Apresentação visual 14 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/15.png', alt: 'Apresentação visual 15 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/16.png', alt: 'Apresentação visual 16 do projeto Deon', width: 1400, height: 788 },
        { src: 'assets/images/projects/deon/17.png', alt: 'Apresentação visual 17 do projeto Deon', width: 1400, height: 788 }
      ]
    }
  ];

  getProjectBySlug(slug: string): ProjectDetail | undefined {
    return this.projects.find(project => project.slug === slug);
  }

  getRelatedProjects(slug: string): ProjectDetail[] {
    return this.projects.filter(project => project.slug !== slug).slice(0, 3);
  }

  private createGallery(projectPath: string, alts: string[], customHeights: Record<number, number> = {}) {
    return alts.map((alt, index) => {
      const position = index + 1;
      const fileName = position.toString().padStart(2, '0');

      return {
        src: `assets/images/projects/${projectPath}/${fileName}.webp`,
        alt,
        width: 1400,
        height: customHeights[position] ?? 788
      };
    });
  }
}
