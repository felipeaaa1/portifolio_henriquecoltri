import { Component, OnInit } from '@angular/core';
import { Case } from '../../../core/models/case.model';
import { CaseService } from '../../../core/services/case.service';
@Component({
  selector: 'app-featured-cases',
  templateUrl: './featured-cases.component.html',
  styleUrls: ['./featured-cases.component.scss']
})
export class FeaturedCasesComponent implements OnInit {
  cases: Case[] = [];
  constructor(private caseService: CaseService) { }
  ngOnInit(): void { this.caseService.getFeaturedCases().subscribe(items => this.cases = items); }
}
