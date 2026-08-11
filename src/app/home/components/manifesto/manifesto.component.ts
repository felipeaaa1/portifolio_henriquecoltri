import { Component } from '@angular/core';
@Component({ selector: 'app-manifesto', templateUrl: './manifesto.component.html', styleUrls: ['./manifesto.component.scss'] })
export class ManifestoComponent {
  expanded = false;
  toggle(): void { this.expanded = !this.expanded; }
}
