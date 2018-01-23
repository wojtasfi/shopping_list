import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'This is test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe(
      'Test Recipe Two',
      'This is test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg',
      [
        new Ingredient('Buns', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice(); // returns copy
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngrdients(ingredients);
  }
}
