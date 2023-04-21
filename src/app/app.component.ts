import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isAddRecipeVisible = false;
  recipeName = '';
  recipeDescription = '';
  recipeImage = '';
  ingredientName = '';
  ingredientAmount = '';
  ingredients: { name: string; amount: string }[] = [];
  recipes: {
    name: string;
    description: string;
    image: string;
    ingredients: { name: string; amount: string }[];
  }[] = [];

  onAddRecipe() {
    this.isAddRecipeVisible = true;
  }

  onIngredientAdded() {
    this.ingredients.push({
      name: this.ingredientName,
      amount: this.ingredientAmount,
    });
    this.ingredientName = '';
    this.ingredientAmount = '';
  }
}
