import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({
  selector: 'app-manifesto',
  standalone: true,
  imports: [NgIf, RevealDirective],
  templateUrl: './manifesto.component.html',
  styleUrl: './manifesto.component.scss'
})
export class ManifestoComponent {
  expanded = false;
  toggle(): void { this.expanded = !this.expanded; }
}
