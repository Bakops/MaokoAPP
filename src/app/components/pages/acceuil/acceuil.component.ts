import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonBackTopComponent } from '../../layout/button-back-top/button-back-top.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroHeaderComponent } from '../../layout/hero-header/hero-header.component';
import { ProductSectionsComponent } from '../../layout/product-sections/product-sections.component';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [
    CommonModule,
    HeroHeaderComponent,
    HeaderComponent,
    ProductSectionsComponent,
    FooterComponent,
    ButtonBackTopComponent,
  ],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent {}
