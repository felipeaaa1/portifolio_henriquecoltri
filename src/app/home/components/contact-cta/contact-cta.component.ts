import { Component } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
@Component({ selector: 'app-contact-cta', templateUrl: './contact-cta.component.html', styleUrls: ['./contact-cta.component.scss'] })
export class ContactCtaComponent {
  readonly contactUrl: string;
  readonly external: boolean;
  constructor(portfolioService: PortfolioService) {
    this.contactUrl = portfolioService.getWhatsappUrl();
    this.external = this.contactUrl.indexOf('https://') === 0;
  }
}
