import { Component, Input, OnInit } from '@angular/core';
import { SocialLink } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({ selector: 'app-social-links', templateUrl: './social-links.component.html', styleUrls: ['./social-links.component.scss'] })
export class SocialLinksComponent implements OnInit {
  @Input() links: SocialLink[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void {
    if (!this.links.length) { this.portfolioService.getSocialLinks().subscribe(links => this.links = links); }
  }
}
