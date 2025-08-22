import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  imports: [HeaderComponent, FooterComponent],
  standalone: true,
  styleUrl: './favoris.component.css',
})
export class FavorisComponent {}
