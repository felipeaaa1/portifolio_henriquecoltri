import { Component } from '@angular/core';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-positioning',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './positioning.component.html',
  styleUrl: './positioning.component.scss'
})
export class PositioningComponent { }
