import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroHeaderBoutiqueComponent } from '../../layout/hero-header-boutique/hero-header-boutique.component';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    HeroHeaderBoutiqueComponent,
    FooterComponent,
  ],
  providers: [ProductService],
})
export class BoutiqueComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('Produit charger:', data);
        this.products = data;
        this.filteredProducts = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des produits:', error);
        this.loading = false;
      },
    });
  }
}
