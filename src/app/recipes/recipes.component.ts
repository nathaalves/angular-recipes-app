import { Component } from '@angular/core';
import { Recipe } from './recipes-list/recipe-item/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent {
  isAddRecipeVisible = false;
  recipes: Recipe[] = [];

  onAddRecipe() {
    this.isAddRecipeVisible = true;
  }

  onRecipeCancel() {
    this.isAddRecipeVisible = false;
  }

  onRecipeAdded(recipe: Recipe) {
    this.recipes.push(recipe);
    this.isAddRecipeVisible = false;
  }
}
