import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAdded = new EventEmitter<Ingredient>;
  @ViewChild(
    'nameInput',
    {read: ElementRef, static: false})
  nameInput!: {
    nativeElement: {value: string}
  };
  ingredient = new Ingredient('', 0);
  amountInput!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.ingredient.name = this.nameInput.nativeElement.value;
    this.ingredient.amount = this.amountInput;
    this.onAdded.emit(this.ingredient);
    console.log('event emitted')
  }
}
