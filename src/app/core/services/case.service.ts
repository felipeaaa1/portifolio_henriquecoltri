import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Case } from '../models/case.model';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  // Conteúdo demonstrativo: substituir pelos cases aprovados pelo cliente.
  private readonly cases: Case[] = [
    { id: 1, title: 'Projeto Horizonte', slug: 'projeto-horizonte',
      summary: 'Estratégia e linguagem para uma marca em transformação.', featured: true, accent: '#ff6b45' },
    { id: 2, title: 'Projeto Origem', slug: 'projeto-origem',
      summary: 'Uma direção de marca construída para ganhar clareza e presença.', featured: true, accent: '#b9d96f' },
    { id: 3, title: 'Projeto Pulso', slug: 'projeto-pulso',
      summary: 'Posicionamento e comunicação conectados em um sistema reconhecível.', featured: true, accent: '#8aa7ff' },
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
