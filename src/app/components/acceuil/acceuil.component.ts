import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { HeroHeaderComponent } from '../layout/hero-header/hero-header.component';
import { ProductSectionsComponent } from '../layout/product-sections/product-sections.component';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [
    CommonModule,
    HeroHeaderComponent,
    HeaderComponent,
    ProductSectionsComponent,
  ],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent {}
