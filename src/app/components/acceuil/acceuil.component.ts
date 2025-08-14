import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { HeroHeaderComponent } from '../layout/hero-header/hero-header.component';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule, HeroHeaderComponent, HeaderComponent],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent {}
