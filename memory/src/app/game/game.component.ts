import { Component } from '@angular/core';


@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  gameTitle = 'Hi Lo';
  cardNumber = 0;
  cardTypes = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  cardSrc ='';

  ngOnInit() {
    this.generateCard();
  }

  generateCard() {
    this.cardNumber = Math.floor(Math.random() * 13 + 2); 
    let cardTypesNo = Math.floor(Math.random() * 4);
    console.log(this.cardTypes[cardTypesNo]);
    //this.cardSrc = '2_of_diamonds.svg';
    this.cardSrc = `${this.cardNumber}_of_${this.cardTypes[cardTypesNo].toLowerCase()}.svg`;

   




  }


}
