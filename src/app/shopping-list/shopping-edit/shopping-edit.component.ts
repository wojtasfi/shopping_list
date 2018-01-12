import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // to local reference value
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdded() {
    const name = this.nameInputRef.nativeElement.value;
    const amt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amt);
    this.ingredientAdded.emit(newIngredient);
  }


}
