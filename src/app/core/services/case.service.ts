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
      imageUrl: 'assets/images/projects/escola-livre-porto/01.webp', detailAvailable: true, featured: true, accent: '#ff7452' },
    { id: 2, title: 'JCELL Imports', slug: 'jcell-imports',
      summary: 'Uma identidade que combina tecnologia, modernidade e atendimento acessível em uma expressão marcante.',
      imageUrl: 'assets/images/projects/jcell-imports/01.webp', detailAvailable: true, featured: true, accent: '#8aa7ff' },
    { id: 3, title: 'Hardcore Game Channel', slug: 'hardcore-game-channel',
      summary: 'Branding e identidade visual para uma produtora de conteúdo sobre jogos, reality shows e entretenimento.',
      imageUrl: 'assets/images/projects/hardcore-game-channel/01.webp', detailAvailable: true, featured: true, accent: '#31b7d4' },
    { id: 4, title: 'Bahniuk Supermercados', slug: 'bahniuk-supermercados',
      summary: 'Branding que traduz proximidade, confiança e orgulho regional em uma identidade contemporânea.',
      imageUrl: 'assets/images/projects/bahniuk-supermercados/01.webp', detailAvailable: true, featured: false, accent: '#ef7d22' },
    { id: 5, title: 'Projeto Norte', slug: 'projeto-norte',
      summary: 'Diagnóstico e direção criativa para orientar escolhas consistentes.', featured: false, accent: '#e3c565' },
    { id: 6, title: 'Projeto Matéria', slug: 'projeto-materia',
      summary: 'Uma expressão visual flexível para uma marca em movimento.', featured: false, accent: '#76c6b0' }
  ];

  constructor() { }

  getCases(): Observable<Case[]> { return of(this.cases.slice()); }

  getFeaturedCases(): Observable<Case[]> {
    return of(this.cases.filter(item => item.featured).slice(0, 3));
  }
}
