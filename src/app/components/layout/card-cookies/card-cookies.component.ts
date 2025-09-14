import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-cookies',
  templateUrl: './card-cookies.component.html',
  styleUrl: './card-cookies.component.css',
  imports: [CommonModule],
  standalone: true,
})
export class CardCookiesComponent {
  isVisible: boolean = true;

  closeCard() {
    this.isVisible = false;
  }

  acceptCookies() {
    console.log('Cookies acceptés !');
    this.closeCard();
  }

  refuseCookies() {
    console.log('Cookies refusés !');
    this.closeCard();
  }
}
