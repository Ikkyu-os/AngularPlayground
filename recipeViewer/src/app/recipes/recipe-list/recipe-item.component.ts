import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rv-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  recipe;
  recipeId;

  constructor() { }

  ngOnInit() {
  }

}
