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
  ingredients: Ingredient[] = [];

  onRecipeCancel() {
    this.recipeCancel.emit();
  }

  onIngredientAdded({ name, amount }: Ingredient) {
    this.ingredients.push(new Ingredient(name, amount));
  }

  onRecipeAdded({ name, description, image }: Recipe) {
    this.recipeAdded.emit(
      new Recipe(name, description, image, this.ingredients)
    );
  }
}
