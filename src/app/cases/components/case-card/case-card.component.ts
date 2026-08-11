import { Component, Input } from '@angular/core';
import { Case } from '../../../core/models/case.model';
@Component({ selector: 'app-case-card', templateUrl: './case-card.component.html', styleUrls: ['./case-card.component.scss'] })
export class CaseCardComponent { @Input() caseItem: Case; }
