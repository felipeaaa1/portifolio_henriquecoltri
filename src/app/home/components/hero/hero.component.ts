import { Component } from '@angular/core';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly contactUrl: string;

  constructor(portfolioService: PortfolioService) {
    this.contactUrl = portfolioService.getWhatsappUrl();
  }
}
