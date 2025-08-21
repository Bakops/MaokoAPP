import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroHeaderCollectionComponent } from '../../layout/hero-header-collection/hero-header-collection.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [HeaderComponent, HeroHeaderCollectionComponent, FooterComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css',
})
export class CollectionComponent {}
