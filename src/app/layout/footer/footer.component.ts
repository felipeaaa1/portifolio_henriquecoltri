import { Component } from '@angular/core';
import { ContactConfig } from '../../core/models/portfolio.model';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({ selector: 'app-footer', templateUrl: './footer.component.html', styleUrls: ['./footer.component.scss'] })
export class FooterComponent {
  readonly contact: ContactConfig;
  readonly contactUrl: string;
  constructor(portfolioService: PortfolioService) {
    this.contact = portfolioService.getContact();
    this.contactUrl = portfolioService.getWhatsappUrl();
  }
}
