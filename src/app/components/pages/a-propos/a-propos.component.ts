import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroHeaderProposComponent } from '../../layout/hero-header-propos/hero-header-propos.component';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [HeaderComponent, HeroHeaderProposComponent, FooterComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css',
})
export class AProposComponent {}
