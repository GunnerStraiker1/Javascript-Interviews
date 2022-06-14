import { Component, Input } from '@angular/core';
import { Beer } from '../../interfaces/Beer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() beer!: Beer;

  
  constructor() { }

  
}
