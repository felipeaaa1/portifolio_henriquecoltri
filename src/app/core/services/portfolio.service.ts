import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceItem } from '../models/service-item.model';
import { Brand, ContactConfig, MethodStep, SocialLink, Testimonial, WorkPreview } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // Conteúdo provisório: validar textos e endereços com o cliente antes da publicação.
  private readonly services: ServiceItem[] = [
    { id: 1, title: 'Estratégia de Marca', description: 'Diagnóstico, posicionamento e direção antes de qualquer decisão visual.' },
    { id: 2, title: 'Posicionamento', description: 'Uma proposta clara para orientar escolhas e construir diferenciação.' },
    { id: 3, title: 'Identidade verbal', description: 'Tom, mensagens e narrativa para uma marca falar com coerência.' },
    { id: 4, title: 'Comunicação', description: 'Sistemas e caminhos para transformar estratégia em presença.' },
    { id: 5, title: 'Conteúdo', description: 'Direção editorial provisória para conectar ideias e públicos.' },
    { id: 6, title: 'Direção criativa', description: 'Critérios para alinhar linguagem, forma e experiência de marca.' }
  ];
  private readonly methodSteps: MethodStep[] = [
    { number: '01', title: 'Absorção', description: 'Escuta, briefing, pesquisa e diagnóstico do negócio, do público e do contexto.' },
    { number: '02', title: 'Direção', description: 'Propósito, posicionamento, personalidade e estratégia definidos com clareza.' },
    { number: '03', title: 'Forma', description: 'Identidade visual, identidade verbal e sistemas de comunicação aplicáveis.' },
    { number: '04', title: 'Presença', description: 'Implantação, lançamento e orientação de uso nos pontos de contato.' }
  ];
  private readonly brands: Brand[] = [
    { name: 'Marca Norte' }, { name: 'Estúdio Um' }, { name: 'Coletivo Forma' },
    { name: 'Casa Horizonte' }, { name: 'Projeto Vértice' }, { name: 'Marca Pulso' }
  ];
  private readonly testimonials: Testimonial[] = [
    { id: 1, author: 'Depoimento a validar', role: 'Cliente / empresa',
      text: 'Espaço reservado para um relato real sobre clareza, processo e resultado do projeto.' },
    { id: 2, author: 'Depoimento a validar', role: 'Cliente / empresa',
      text: 'Este conteúdo provisório será substituído após aprovação e autorização de publicação.' },
    { id: 3, author: 'Depoimento a validar', role: 'Cliente / empresa',
      text: 'Um terceiro relato poderá mostrar outra perspectiva da parceria e do trabalho realizado.' }
  ];
  private readonly socialLinks: SocialLink[] = [
    { label: 'Instagram', url: '#' }, { label: 'LinkedIn', url: '#' }, { label: 'Behance', url: '#' }
  ];
  private readonly contact: ContactConfig = {
    whatsappNumber: '5511996243271', whatsappMessage: 'Olá, Henrique! Cheguei até você pelo seu site e gostaria de conversar sobre um projeto de branding. Quero entender melhor como funciona seu processo e contar um pouco sobre o que estou buscando.', email: 'contato@confirmar.com.br'
  };
  private readonly workPreviews: WorkPreview[] = [
    { label: 'Estratégia', accent: '#ff6b45' }, { label: 'Branding', accent: '#b9d96f' },
    { label: 'Direção', accent: '#8aa7ff' }, { label: 'Comunicação', accent: '#e7a8ce' }
  ];

  constructor() { }

  getServices(): Observable<ServiceItem[]> { return of(this.services.slice()); }
  getMethodSteps(): Observable<MethodStep[]> { return of(this.methodSteps.slice()); }
  getBrands(): Observable<Brand[]> { return of(this.brands.slice()); }
  getTestimonials(): Observable<Testimonial[]> { return of(this.testimonials.slice()); }
  getSocialLinks(): Observable<SocialLink[]> { return of(this.socialLinks.slice()); }
  getWorkPreviews(): Observable<WorkPreview[]> { return of(this.workPreviews.slice()); }
  getContact(): ContactConfig { return this.contact; }

  getWhatsappUrl(): string {
    if (!this.contact.whatsappNumber) {
      return 'mailto:' + this.contact.email + '?subject=' + encodeURIComponent('Novo projeto');
    }
    return 'https://wa.me/' + this.contact.whatsappNumber + '?text=' + encodeURIComponent(this.contact.whatsappMessage);
  }
}
