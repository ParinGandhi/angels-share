export class CardInfo {
  imageLink: string;
  placeInfo: {
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    website: string;
    description: string;
  };

  constructor() {}
}
