import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  loadedFeature: string = 'recipe';

  constructor() { }
}
