import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

interface HomeSolution {
  id: number;
  moment: string;
  title: string;
  description: string;
  anchor: string;
}

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RevealDirective
  ],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss'
})
export class ServicesGridComponent {

  services: HomeSolution[] = [
    {
      id: 1,
      moment: 'Entender',
      title: 'Diagnóstico<br>de Marca',
      description: 'Descobrir o que está acontecendo antes de decidir o que mudar.',
      anchor: 'entender'
    },
    {
      id: 2,
      moment: 'Construir',
      title: 'Estratégia,<br>identidade e<br>branding',
      description: 'Definir o que a marca representa e transformar isso em um sistema reconhecível.',
      anchor: 'construir'
    },
    {
      id: 3,
      moment: 'Colocar no mundo',
      title: 'Presença &<br>Desdobramentos',
      description: 'Levar a identidade para os pontos de contato em que a marca realmente acontece.',
      anchor: 'colocar-no-mundo'
    },
    {
      id: 4,
      moment: 'Fazer evoluir',
      title: 'Consultoria<br>de Branding',
      description: 'Acompanhar decisões e aplicações para manter a estratégia viva.',
      anchor: 'fazer-evoluir'
    }
  ];

}