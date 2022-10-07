import { Injectable } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  loadedFeature: string = 'recipe';
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  onAddIngredient(ingredient: Ingredient) {
    let flag = true;
    for (const ingredientEl of this.ingredients) {
      if (ingredientEl.name === ingredient.name) {
        ingredientEl.amount += ingredient.amount;
        flag = false;
      }
    }
    if (flag)
      this.ingredients.push(ingredient);
  }

}
