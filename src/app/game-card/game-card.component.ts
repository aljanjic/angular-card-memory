import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class GameCardComponent {

  data: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default",
  };


  onCardClicked(){
    console.log('Card clicked')
    if (this.data.state === 'default'){
      this.data.state = 'flipped';
    } else {
      this.data.state = 'default';
    }
  }


}


export interface CardData {
  imageId: string;
  state: "default" | "flipped" | "matched";
}

