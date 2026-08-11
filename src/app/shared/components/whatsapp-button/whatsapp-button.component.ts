import { Component } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  readonly contactUrl: string;
  readonly external: boolean;
  constructor(portfolioService: PortfolioService) {
    this.contactUrl = portfolioService.getWhatsappUrl();
    this.external = this.contactUrl.indexOf('https://') === 0;
  }
}
