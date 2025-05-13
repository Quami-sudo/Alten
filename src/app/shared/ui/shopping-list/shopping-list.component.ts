import { Component, computed, inject, OnInit } from '@angular/core';
import { ProductStore } from 'app/products/store/shopping-state';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, CommonModule, FormsModule, ButtonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  public shoppingStore = inject(ProductStore);
  public total = computed(() => this.shoppingStore.shoppingItems().reduce((sum, item) => sum + item.price * item.numberOfItem, 0))
}
