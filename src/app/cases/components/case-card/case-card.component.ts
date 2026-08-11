import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Case } from '../../../core/models/case.model';
@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './case-card.component.html',
  styleUrl: './case-card.component.scss'
})
export class CaseCardComponent { @Input({ required: true }) caseItem!: Case; }
