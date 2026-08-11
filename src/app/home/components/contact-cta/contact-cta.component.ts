import { Component } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact-cta.component.html',
  styleUrl: './contact-cta.component.scss'
})
export class ContactCtaComponent {
  readonly contactUrl: string;
  readonly external: boolean;
  constructor(portfolioService: PortfolioService) {
    this.contactUrl = portfolioService.getWhatsappUrl();
    this.external = this.contactUrl.indexOf('https://') === 0;
  }
}
