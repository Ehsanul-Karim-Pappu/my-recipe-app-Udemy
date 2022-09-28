import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  nameInput!: string;
  amountInput!: number;

  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

}
