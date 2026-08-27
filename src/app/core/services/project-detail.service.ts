import { Injectable } from '@angular/core';
import { ProjectDetail } from '../models/project-detail.model';

@Injectable({ providedIn: 'root' })
export class ProjectDetailService {
  private readonly imagePath = 'assets/images/projects/hardcore-game-channel';

  private readonly projects: ProjectDetail[] = [
    {
      slug: 'hardcore-game-channel',
      title: 'Hardcore Game Channel',
      category: 'Branding e identidade visual',
      summary: 'Identidade criada para uma produtora de conteúdo sobre jogos e reality shows, conectando intensidade, entretenimento e a linguagem visual dos e-sports.',
      projectType: 'Branding',
      segment: 'Produção audiovisual',
      author: 'Henrique Coltri',
      period: 'Julho de 2021',
      gallery: [
        { src: `${this.imagePath}/01.webp`, alt: 'Capa do projeto com a marca Hardcore Game Channel sobre textura azul', width: 1400, height: 788 },
        { src: `${this.imagePath}/02.webp`, alt: 'Apresentação do contexto e dos dados do projeto Hardcore Game Channel', width: 1400, height: 788 },
        { src: `${this.imagePath}/03.webp`, alt: 'Direcionamento visual baseado em e-sports, coroa e diamante', width: 1400, height: 788 },
        { src: `${this.imagePath}/04.webp`, alt: 'Versões principal e monocromática da marca Hardcore Game Channel', width: 1400, height: 788 },
        { src: `${this.imagePath}/05.webp`, alt: 'Paleta cromática da identidade visual Hardcore Game Channel', width: 1400, height: 788 },
        { src: `${this.imagePath}/06.webp`, alt: 'Aplicação da marca Hardcore Game Channel em ambiente de evento', width: 1400, height: 788 },
        { src: `${this.imagePath}/07.webp`, alt: 'Cenário de transmissão com aplicações da identidade Hardcore Game Channel', width: 1400, height: 788 },
        { src: `${this.imagePath}/08.webp`, alt: 'Moletons personalizados com a identidade Hardcore Game Channel', width: 1400, height: 788 },
        { src: `${this.imagePath}/09.webp`, alt: 'Camisas esportivas nas cores da marca Hardcore Game Channel', width: 1400, height: 977 },
        { src: `${this.imagePath}/10.webp`, alt: 'Caneca e troféu personalizados com a identidade do projeto', width: 1400, height: 788 },
        { src: `${this.imagePath}/11.webp`, alt: 'Cartões de visita da identidade Hardcore Game Channel', width: 1400, height: 788 },
        { src: `${this.imagePath}/12.webp`, alt: 'Bonés personalizados com a marca Hardcore Game Channel', width: 1400, height: 788 },
        { src: `${this.imagePath}/13.webp`, alt: 'Fones de ouvido com aplicações da identidade Hardcore Game Channel', width: 1400, height: 830 },
        { src: `${this.imagePath}/14.webp`, alt: 'Estojo de fones e copo personalizados com grafismos da marca', width: 1400, height: 788 },
        { src: `${this.imagePath}/15.webp`, alt: 'Identidade Hardcore Game Channel aplicada em dispositivos digitais', width: 1400, height: 788 },
        { src: `${this.imagePath}/16.webp`, alt: 'Adesivo e interface de áudio da Hardcore Game Channel em smartphone', width: 1400, height: 788 },
        { src: `${this.imagePath}/17.webp`, alt: 'Painel urbano divulgando uma temporada de conteúdo da Hardcore Game Channel', width: 1400, height: 788 }
      ]
    }
  ];

  getProjectBySlug(slug: string): ProjectDetail | undefined {
    return this.projects.find(project => project.slug === slug);
  }
}
