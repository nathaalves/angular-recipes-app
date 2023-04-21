import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';
import { Recipe } from '../recipes-list/recipe-item/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
})
export class AddRecipeComponent {
  @Output() recipeCancel = new EventEmitter();
  ingredients: Ingredient[] = [];

  constructor(private recipesService: RecipesService) {}

  onRecipeCancel() {
    this.recipeCancel.emit();
  }

  onIngredientAdded({ name, amount }: Ingredient) {
    this.ingredients.push(new Ingredient(name, amount));
  }

  onRecipeAdded({ name, description, image }: Recipe) {
    this.recipesService.addRecipe(
      new Recipe(name, description, image, this.ingredients)
    );
    this.recipeCancel.emit();
  }
}
