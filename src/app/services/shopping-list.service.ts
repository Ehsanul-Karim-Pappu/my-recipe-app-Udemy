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

  onAddIngredient(name: string, amount: number) {
    let ingred = new Ingredient(name, amount);
    this.ingredients.push(ingred);
  }

}
