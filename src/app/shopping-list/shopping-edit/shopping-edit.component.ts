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
  amountInput!: number;
  constructor() { }

  ngOnInit(): void {
  }


  onAddIngredient() {
    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput;
    let ingredient = new Ingredient(name, amount);
    this.onAdded.emit(ingredient);
    console.log('event emitted');
  }
}
