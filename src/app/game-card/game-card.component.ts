import { Component } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {


  onCardClicked(){
    console.log('Card clicked')
  }


}


export interface CardData {
  imageId: string;
  state: "default" | "flipped" | "matched";
}

