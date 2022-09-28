import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  loadedFeature: string = 'recipe';

  constructor() { }
}
