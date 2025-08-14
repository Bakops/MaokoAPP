import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'],
})
export class CarrousselComponent implements OnInit {
  products: any[] = [];
  productsChunks: any[][] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://fakestoreapi.com/products')
      .subscribe((data: any) => {
        this.products = data;
        this.chunkProducts();
      });
  }

  chunkProducts(): void {
    for (let i = 0; i < this.products.length; i += 3) {
      this.productsChunks.push(this.products.slice(i, i + 3));
    }
  }
}
