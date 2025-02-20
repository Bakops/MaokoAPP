import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { HeroHeaderComponent } from '../layout/hero-header/hero-header.component';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [HeroHeaderComponent, HeaderComponent],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css',
})
export class AcceuilComponent {}
