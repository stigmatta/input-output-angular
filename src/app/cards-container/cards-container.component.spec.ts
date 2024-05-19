import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-card-block',
  standalone:true,
  imports:[Component],
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit, AfterViewInit {
  @Input() product!: Product;
  @Input() discount: number = 0;
  @Output() showDetails = new EventEmitter<Product>();

  @ContentChild('colorText') colorText!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const color = this.colorText.nativeElement.textContent;
    this.setColor(color);
  }

  private setColor(color: string): void {
    this.colorText.nativeElement.style.backgroundColor = color;
  }

  ngOnInit(): void {
    this.updateDisplayedPrice();
  }

  applyDiscount(discount: number): void {
    this.discount = discount;
    this.updateDisplayedPrice();
  }

  private updateDisplayedPrice(): void {
    const priceWithDiscount = Math.max(0, this.product.price - this.discount); // Новая цена не может быть отрицательной
    this.product = { ...this.product, price: priceWithDiscount }; // Создаем новый объект с обновленной ценой
  }

  onShowDetails() {
    this.showDetails.emit(this.product);
  }
}
