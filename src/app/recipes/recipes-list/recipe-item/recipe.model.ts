import { Ingredient } from '../../ingredient/ingredient.module';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public image: string,
    public ingredients: Ingredient[] = []
  ) {}
}
