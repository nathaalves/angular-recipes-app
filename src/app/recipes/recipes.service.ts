import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes-list/recipe-item/recipe.model';

export class RecipesService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    {
      name: 'Tasty Schnitzel',
      description: 'A super-tasty Schnitzel - just awesome!',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      ingredients: [
        { name: 'Meat', amount: '1' },
        { name: 'French Fries', amount: '20' },
      ],
    },
    {
      name: 'Big Fat Burger',
      description: 'What else you need to say?',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
      ingredients: [
        { name: 'Buns', amount: '2' },
        { name: 'Meat', amount: '1' },
      ],
    },
  ];

  getRecipes() {
    return [...this.recipes];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.emit([...this.recipes]);
  }
}
