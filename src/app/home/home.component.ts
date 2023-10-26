import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardList: any [] = [
    {
      title: 'Card 1',
      description: 'Card 1 Description',
      buttonText: 'Click Me',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 2',
      description: 'Card 2 Description',
      buttonText: 'Click Me',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 3',
      description: 'Card 3 Description',
      buttonText: 'Click Me',
      image: 'https://via.placeholder.com/150',
    },
  ];
}
