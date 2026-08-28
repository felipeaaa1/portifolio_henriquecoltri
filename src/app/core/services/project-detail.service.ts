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
      author: 'Henrique Coltri & Danilo Rondinelli',
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
