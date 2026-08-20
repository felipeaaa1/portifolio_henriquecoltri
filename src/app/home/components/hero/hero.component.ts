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

  moveGlow(event: PointerEvent): void {
    const hero = event.currentTarget as HTMLElement;
    const bounds = hero.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100));
    const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100));

    hero.style.setProperty('--pointer-x', `${x}%`);
    hero.style.setProperty('--pointer-y', `${y}%`);
  }
}
