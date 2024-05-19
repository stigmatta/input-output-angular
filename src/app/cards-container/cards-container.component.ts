import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBlockComponent } from '../card-block/card-block.component';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CommonModule, CardBlockComponent],
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'product 1', price: 110, description: 'product 1 description' },
    { id: 2, name: 'product 2', price: 120, description: 'product 2 description' },
    { id: 3, name: 'product 3', price: 130, description: 'product 3 description' }
  ];

  discount: number = 0;
  selectedProduct?: Product;

  @ViewChildren(CardBlockComponent) cardBlocks!: QueryList<CardBlockComponent>;

  constructor() {}

  ngOnInit(): void {}

  applyDiscount(): void {
    this.discount = 15;
    this.updatePrices();
  }

  showDetails(product: Product): void {
    this.selectedProduct = product;
  }

  private updatePrices(): void {
    this.cardBlocks.forEach(block => block.applyDiscount(this.discount));
  }
}

