export class glass {
    id: string;
    productName: string;
    description: string;
    pictureUrl: Picture[];
    colorsNames: string[];
    price: number;
    genders: string[];
    category: string;
    brand: string;
    shape: string;
    frameType: string;
    frameSize: string;
    availableQuantity: number;
    mostPopular: number;
    isFavorite: boolean;
  }
  
  export class Picture {
    id: string;
    isDefault: boolean;
    colorId: string;
    pictureUrl: string;
  }