import { Injectable } from '@angular/core';
import {Recipe} from "../recipes/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  loadedFeature: string = 'recipe';
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
    new Recipe(
      'Cheeseburger',
      'A cheeseburger is a hamburger topped with cheese.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
