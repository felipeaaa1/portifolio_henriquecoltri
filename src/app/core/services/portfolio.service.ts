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
    { id: 1, title: 'Branding', description: 'Construção estratégica e criativa da marca, conectando essência, posicionamento, identidade e presença em um sistema único.' },
    { id: 2, title: 'Posicionamento', description: 'Definição do lugar que a marca deseja ocupar, do que precisa representar e das razões pelas quais deve ser escolhida.' },
    { id: 3, title: 'Identidade Visual', description: 'Criação de sistemas visuais capazes de traduzir estratégia em formas, símbolos, cores, tipografia e aplicações consistentes.' },
    { id: 4, title: 'Identidade Verbal', description: 'Definição do tom de voz, mensagens, linguagem e princípios que orientam a maneira como a marca fala e se relaciona.' },
    { id: 5, title: 'Rebranding', description: 'Revisão estratégica e visual de marcas que mudaram, cresceram ou já não se reconhecem na forma como se apresentam.' },
    { id: 6, title: 'Direção Criativa', description: 'Construção de critérios e caminhos criativos para manter linguagem, expressão e experiência alinhadas à estratégia da marca.' }
  ];
  private readonly methodSteps: MethodStep[] = [
    { number: '01', title: 'Absorção', description: 'Escuta, contexto, pesquisa e diagnóstico para compreender o negócio, as pessoas e tudo aquilo que a marca já carrega.' },
    { number: '02', title: 'Direção', description: 'Definição de propósito, posicionamento, personalidade e estratégia para encontrar um caminho claro.' },
    { number: '03', title: 'Forma', description: 'Transformação da estratégia em identidade visual, identidade verbal e sistemas de comunicação reconhecíveis.' },
    { number: '04', title: 'Presença', description: 'Aplicação e orientação da marca para que estratégia e identidade continuem coerentes em seus diferentes pontos de contato.' }
  ];
  private readonly brands: Brand[] = [
    { name: 'Marca Norte' }, { name: 'Estúdio Um' }, { name: 'Coletivo Forma' },
    { name: 'Casa Horizonte' }, { name: 'Projeto Vértice' }, { name: 'Marca Pulso' }
  ];
  private readonly testimonials: Testimonial[] = [
    {
      id: 1,
      author: 'Rafael',
      role: 'Garanhuns/PE',
      text: 'Falar do trabalho de Henrique é fácil, ele simplesmente foi fantástico, cumpriu com os prazos, os valores foram excelentes e bem pagos pela qualidade que ele nos entregou! A experiência foi das melhores, desde o momento da venda, até as entregas de todo o material! Recomendo!'
    },
    {
      id: 2,
      author: 'Carolina Fabri',
      role: 'São Paulo/SP',
      text: 'Tive a oportunidade de trabalhar com o Henrique e a experiência foi excelente. Além de entregar um trabalho de alta qualidade, ele sempre foi muito proativo, trouxe ideias criativas e esteve atento às tendências do mercado. É um profissional comprometido, confiável e que faz a diferença em cada projeto. Recomendo o trabalho dele com total confiança.'
    },
    {
      id: 3,
      author: 'Rodrigo Camara',
      role: 'São Paulo/SP',
      text: 'Grande Henrique! Tranquilidade, conhecimento técnico e entendimento do que foi solicitado são características que um bom profissional de Design precisa ter. Isso aliado à experiência sempre trouxe ótimas execuções dos trabalhos realizados. Um "detalhe" muito importante sempre foi sua a preocupação com o cumprimento de prazos! Grande profissional!'
    },
    {
      id: 4,
      author: 'Danilo Ganzert e Magda Ganzert',
      role: 'Cuiabá/MT',
      text: 'O Henrique Coltri conseguiu traduzir perfeitamente o que imaginávamos para a identidade da Santa Imagem Cuiabá: uma marca que une o religioso e o tradicional a uma linguagem contemporânea, sofisticada e alinhada ao universo de casamentos, festas e eventos.\n\nAlém da criatividade e originalidade, destacamos a atenção e o suporte durante todo o processo, desde as aplicações da marca até os materiais para redes sociais e futuros desdobramentos.\n\nO resultado superou nossas expectativas. Recomendamos muito o trabalho do Henrique pela qualidade, cuidado e, principalmente, pela capacidade de transformar uma ideia em uma identidade que realmente representa a nossa marca.'
    }
  ];
  private readonly socialLinks: SocialLink[] = [
    { label: 'Instagram', url: 'https://instagram.com/henriquecoltri' }, { label: 'LinkedIn', url: 'https://br.linkedin.com/in/henriquecoltri' }, { label: 'Behance', url: 'https://behance.com/henriquecoltri' }
  ];
  private readonly contact: ContactConfig = {
    whatsappNumber: '5511996243271', whatsappMessage: 'Olá, Henrique! Cheguei até você pelo seu site e gostaria de conversar sobre um projeto de branding. Quero entender melhor como funciona seu processo e contar um pouco sobre o que estou buscando.', email: 'henriquecoltri@hotmail.com'
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
