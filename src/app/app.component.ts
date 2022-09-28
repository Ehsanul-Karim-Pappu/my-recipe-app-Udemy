import { Component } from '@angular/core';
import {ShoppingListService} from "./services/shopping-list.service";
import {RecipeService} from "./services/recipe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-recipe-app-Udemy';

  constructor(public shoppingListService: ShoppingListService,
              public recipeService: RecipeService) { }

}
