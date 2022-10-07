import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../../services/shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  nameInput!: string;
  amountInput!: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(name: string, amount: number) {
    let ingredient = new Ingredient(name, amount);
    this.shoppingListService.onAddIngredient(ingredient);
  }

}
