import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroHeaderHommeComponent } from '../../layout/hero-header-homme/hero-header-homme.component';

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrl: './homme.component.css',
  standalone: true,
  imports: [
    CommonModule,
    HeroHeaderHommeComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class HommeComponent {}
