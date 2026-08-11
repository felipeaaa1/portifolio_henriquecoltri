import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent { }
