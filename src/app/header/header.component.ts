import {Component} from "@angular/core";
import {ShoppingListService} from "../services/shopping-list.service";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  collapsed = true;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService) { }

  onSelect(feature: string) {
    this.shoppingListService.loadedFeature = feature;
    this.recipeService.loadedFeature = feature;
  }
}
