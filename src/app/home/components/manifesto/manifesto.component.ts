import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-manifesto',
  standalone: true,
  imports: [NgIf],
  templateUrl: './manifesto.component.html',
  styleUrl: './manifesto.component.scss'
})
export class ManifestoComponent {
  expanded = false;
  toggle(): void { this.expanded = !this.expanded; }
}
