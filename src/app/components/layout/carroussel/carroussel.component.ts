// filepath: /c:/Users/ADM/Desktop/MAOKO ANGULAR/projet-maoko-angular/src/app/components/layout/carroussel/carroussel.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'],
})
export class CarrousselComponent implements OnInit {
  title = 'Carrousel de Produits';
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
