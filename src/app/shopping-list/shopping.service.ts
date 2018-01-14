import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 15)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngrdient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngrdients(ingredients: Ingredient[]) {
    // ES6 spread array -> list
    // jakbym dodal tylko ingredients to by dododal jako
    // jeden obiekt (jedna array) a tak to spreduje to na elementy
    this.ingredients.push(...ingredients);

  }
}
