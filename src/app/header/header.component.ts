import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() recipesHeaderClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() shoppingHeaderClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  collapsed = true;

  onRecipesClicked() {
    this.recipesHeaderClicked.emit(true);
  }

  onShoppingClicked() {
    this.shoppingHeaderClicked.emit(true);
  }
}
