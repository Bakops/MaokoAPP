import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-back-top',
  templateUrl: './button-back-top.component.html',
  styleUrl: './button-back-top.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class ButtonBackTopComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300;
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
