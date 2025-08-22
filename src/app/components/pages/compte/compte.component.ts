import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  imports: [HeaderComponent, FooterComponent],
  standalone: true,
  styleUrl: './compte.component.css',
})
export class CompteComponent {}
