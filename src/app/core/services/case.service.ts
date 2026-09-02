import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Case } from '../models/case.model';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  // Conteúdo em preparação: completar os cases com imagens e informações aprovadas.
  private readonly cases: Case[] = [
    { id: 1, title: 'Escola Livre Porto', slug: 'escola-livre-porto',
      summary: 'Identidade para uma escola Waldorf que transforma educação integral, criatividade e natureza em uma marca viva.',
      imageUrl: 'assets/images/projects/escola-livre-porto/15.webp', detailAvailable: true, featured: true, accent: '#ff7452' },
    { id: 2, title: 'Hardcore Game Channel', slug: 'hardcore-game-channel',
      summary: 'Branding e identidade visual para uma produtora de conteúdo sobre jogos, reality shows e entretenimento.',
      imageUrl: 'assets/images/projects/hardcore-game-channel/01.webp', detailAvailable: true, featured: true, accent: '#31b7d4' },
    { id: 3, title: 'JCELL Imports', slug: 'jcell-imports',
      summary: 'Uma identidade que combina tecnologia, modernidade e atendimento acessível em uma expressão marcante.',
      imageUrl: 'assets/images/projects/jcell-imports/08.webp', detailAvailable: true, featured: true, accent: '#8aa7ff' },
    { id: 4, title: 'Bahniuk Supermercados', slug: 'bahniuk-supermercados',
      summary: 'Branding que traduz proximidade, confiança e orgulho regional em uma identidade contemporânea.',
      imageUrl: 'assets/images/projects/bahniuk-supermercados/01.webp', detailAvailable: true, featured: false, accent: '#ef7d22' },
    { id: 5, title: 'Heróis da Galáxia', slug: 'herois-da-galaxia',
      summary: 'Branding e identidade visual desenvolvido para uma pizzaria.',
      imageUrl: 'assets/images/projects/herois-da-galaxia/01.png', detailAvailable: true, featured: false, accent: '#ff7452' },
    { id: 6, title: 'O Jardineiro', slug: 'o-jardineiro',
      summary: 'Branding que conecta natureza, sofisticação e uma expressão visual contemporânea.',
      imageUrl: 'assets/images/projects/o-jardineiro/01.png', detailAvailable: true, featured: false, accent: '#76a174' },
    { id: 7, title: 'Equipa', slug: 'equipa',
      summary: 'Branding para uma marca de artigos de camping, caça e pesca que une aventura, segurança e conexão com a vida ao ar livre.',
      imageUrl: 'assets/images/projects/equipa/01.png', detailAvailable: true, featured: false, accent: '#38463d' },
    { id: 8, title: 'Deon', slug: 'deon',
      summary: 'Branding para uma loja de calçados, construindo uma identidade contemporânea, marcante e alinhada ao universo da moda.',
      imageUrl: 'assets/images/projects/deon/01.png', detailAvailable: true, featured: false, accent: '#171717' }
  ];

  constructor() { }

  getCases(): Observable<Case[]> { return of(this.cases.slice()); }

  getFeaturedCases(): Observable<Case[]> {
    return of(this.cases.filter(item => item.featured).slice(0, 3));
  }
}
