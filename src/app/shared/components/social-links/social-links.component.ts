import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { SocialLink } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [NgFor],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent implements OnInit {
  @Input() links: SocialLink[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void {
    if (!this.links.length) { this.portfolioService.getSocialLinks().subscribe(links => this.links = links); }
  }
}
