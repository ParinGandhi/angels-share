import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo.model';

@Component({
  selector: 'app-oddities',
  templateUrl: './oddities.component.html',
  styleUrls: ['./oddities.component.scss'],
})
export class OdditiesComponent implements OnInit {
  cardInfo = new CardInfo();

  constructor() {}

  ngOnInit(): void {
    this.setCardInfo();
  }

  setCardInfo() {
    this.cardInfo = {
      imageLink: '../../../assets/oddities/ice-cream.jpg',
      placeInfo: {
        name: 'Aubi & Ramsa',
        address: {
          street: '172 NE 41st St #3516',
          city: 'Miami',
          state: 'FL',
          zip: '33137',
        },
        website: 'https://aubiramsa.com/',
        description: 'Liquor infused ice cream & sorbet',
      },
    };
  }
}
