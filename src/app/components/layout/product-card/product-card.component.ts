import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductData } from './product-data.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() product!: ProductData;
  @Output() addToCart = new EventEmitter<ProductData>();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  getStarsArray(): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }
}
