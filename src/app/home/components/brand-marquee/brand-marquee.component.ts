import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
@Component({ selector: 'app-brand-marquee', templateUrl: './brand-marquee.component.html', styleUrls: ['./brand-marquee.component.scss'] })
export class BrandMarqueeComponent implements OnInit {
  brands: Brand[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getBrands().subscribe(items => this.brands = items); }
}
