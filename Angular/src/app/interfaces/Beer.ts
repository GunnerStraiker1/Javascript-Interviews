export interface Beer {
  id: Number;
  name: string;
  image_url: string;
  abv: Number;
  tagline: string;
  food_pairing: Food[];
}

interface Food {
  name: string;
}
