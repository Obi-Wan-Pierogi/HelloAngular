import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() data: any = {
    title: 'Placeholder Title',
    description: 'Card Item Description',
    buttonText: 'Click Me',
    image: 'https://via.placeholder.com/150',
  };
}
