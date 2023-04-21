import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.module';
import { Recipe } from '../recipes-list/recipe-item/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
})
export class AddRecipeComponent {
  @Output() recipeCancel = new EventEmitter();
  @Output() recipeAdded = new EventEmitter<Recipe>();
  recipe: Recipe = {
    name: '',
    description: '',
    image: '',
    ingredients: [],
  };
  ingredient = {
    name: '',
    amount: '',
  };
  ingredients: Ingredient[] = [];

  onRecipeCancel() {
    this.recipeCancel.emit();
  }

  onIngredientAdded() {
    this.ingredients.push({
      name: this.ingredient.name,
      amount: this.ingredient.amount,
    });
    this.ingredient.name = '';
    this.ingredient.amount = '';
  }

  onRecipeAdded() {
    this.recipe.ingredients = this.ingredients;
    this.recipeAdded.emit(this.recipe);
    this.recipe = {
      name: '',
      description: '',
      image: '',
      ingredients: [],
    };
  }
}
