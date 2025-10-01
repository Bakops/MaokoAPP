import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonBackTopComponent } from '../../layout/button-back-top/button-back-top.component';
import { CardCookiesComponent } from '../../layout/card-cookies/card-cookies.component';
import { FeatureCategoriesComponent } from '../../layout/feature-categories/feature-categories.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroHeaderComponent } from '../../layout/hero-header/hero-header.component';
import { ProductSectionsComponent } from '../../layout/product-sections/product-sections.component';
import { SliderComponent } from '../../layout/slider/slider.component';

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
    CardCookiesComponent,
    SliderComponent,
    FeatureCategoriesComponent,
  ],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent {}
