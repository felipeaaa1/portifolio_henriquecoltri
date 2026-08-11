import { Component, OnInit } from '@angular/core';
import { ServiceItem } from '../../../core/models/service-item.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
@Component({ selector: 'app-services-grid', templateUrl: './services-grid.component.html', styleUrls: ['./services-grid.component.scss'] })
export class ServicesGridComponent implements OnInit {
  services: ServiceItem[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getServices().subscribe(items => this.services = items); }
}
