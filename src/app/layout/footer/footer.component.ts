import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactConfig } from '../../core/models/portfolio.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly contact: ContactConfig;
  readonly contactUrl: string;
  constructor(portfolioService: PortfolioService) {
    this.contact = portfolioService.getContact();
    this.contactUrl = portfolioService.getWhatsappUrl();
  }
}
