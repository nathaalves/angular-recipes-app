import { Component, Input } from '@angular/core';
import { Ingredient } from './ingredient.module';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent {
  @Input() ingredient: Ingredient = { name: '', amount: '' };

  constructor() {}
}
