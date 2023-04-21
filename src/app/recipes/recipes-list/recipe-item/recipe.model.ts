import { Ingredient } from '../../ingredient/ingredient.module';

export class Recipe {
  public name: string;
  public description: string;
  public image: string;
  public ingredients: Ingredient[] = [];

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.image = imagePath;
  }
}
