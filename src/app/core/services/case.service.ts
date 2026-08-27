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
      summary: 'Branding e comunicação para uma escola orientada por educação humanizada, pertencimento e movimento.', featured: true, accent: '#ff7452' },
    { id: 2, title: 'JCELL Imports', slug: 'jcell-imports',
      summary: 'Case selecionado para apresentar estratégia, identidade visual e aplicações da marca.', featured: true, accent: '#8aa7ff' },
    { id: 3, title: 'Novo case', slug: 'novo-case',
      summary: 'Um novo projeto será apresentado aqui com contexto, processo, sistema e aplicações.', featured: true, accent: '#b9d96f' },
    { id: 4, title: 'Projeto Encontro', slug: 'projeto-encontro',
      summary: 'Narrativa e identidade preparadas para novos pontos de contato.', featured: false, accent: '#e7a8ce' },
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
