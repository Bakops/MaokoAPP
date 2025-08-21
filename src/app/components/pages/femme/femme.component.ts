import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroHeaderFemmeComponent } from '../../layout/hero-header-femme/hero-header-femme.component';

@Component({
  selector: 'app-femme',
  templateUrl: './femme.component.html',
  imports: [
    HeroHeaderFemmeComponent,
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ],
  standalone: true,
  styleUrl: './femme.component.css',
})
export class FemmeComponent {}
