import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroHeaderFaqComponent } from '../../layout/hero-header-faq/hero-header-faq.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [HeaderComponent, HeroHeaderFaqComponent, FooterComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {}
