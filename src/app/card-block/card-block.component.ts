import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-card-block',
  standalone: true,
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {
  @Input() product!: Product;
  @Input() discount: number = 0;
  @Output() showDetails = new EventEmitter<Product>();

  ngOnInit(): void {
    this.updateDisplayedPrice();
  }

  applyDiscount(discount: number): void {
    this.discount = discount;
    this.updateDisplayedPrice();
  }

  private updateDisplayedPrice(): void {
    if(this.product.price>=15)
    this.product.price = this.product.price - this.discount;
  }

  onShowDetails() {
    this.showDetails.emit(this.product);
  }
}
