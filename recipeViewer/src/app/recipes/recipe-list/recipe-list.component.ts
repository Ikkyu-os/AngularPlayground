import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rv-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  dummyRecipe = new Recipe('Dummy', 'Dummy', 'https://www.w3schools.com/css/trolltunga.jpg');

  constructor() { }

  ngOnInit() {
  }

}
