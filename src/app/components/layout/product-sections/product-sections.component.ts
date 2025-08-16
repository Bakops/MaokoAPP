import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-sections',
  templateUrl: './product-sections.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './product-sections.component.css',
})
export class ProductSectionsComponent implements OnInit {
  projects = [
    {
      id: 1,
      title: 'Hoodie Oversized',
      price: '89€',
      originalPrice: '120€',
      image:
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      year: '2024',
      description:
        'Hoodie oversized premium avec broderie exclusive, coupe streetwear authentique.',
      technologies: ['Coton Bio', 'Broderie 3D', 'Coupe Oversized'],
      client: 'Urban Style Co.',
      liveUrl: '#',
      githubUrl: null,
    },
    {
      id: 2,
      title: 'T-shirt Vintage',
      price: '45€',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      year: '2024',
      description:
        'T-shirt vintage wash avec print rétro, tissu doux et résistant.',
      technologies: ['Vintage Wash', 'Print Rétro', '100% Coton'],
      client: 'Retro Vibes',
      liveUrl: '#',
      githubUrl: null,
    },
    {
      id: 3,
      title: 'Jean Baggy',
      price: '95€',
      image:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      year: '2024',
      description:
        'Jean baggy coupe droite, denim premium avec finitions soignées.',
      technologies: ['Denim Premium', 'Coupe Baggy', 'Finitions Pro'],
      client: 'Denim House',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Casquette Snapback',
      price: '35€',
      originalPrice: '50€',
      image:
        'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
      year: '2024',
      description: 'Casquette snapback ajustable avec broderie logo premium.',
      technologies: ['Snapback', 'Broderie Logo', 'Tissu Premium'],
      client: 'Cap Culture',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Bomber Jacket',
      price: '125€',
      image:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
      year: '2024',
      description:
        'Bomber jacket premium avec doublure satin et patches exclusifs.',
      technologies: ['Doublure Satin', 'Patches Exclusifs', 'Coupe Premium'],
      client: 'Jacket Pro',
      liveUrl: '#',
      githubUrl: null,
    },
    {
      id: 6,
      title: 'Sneakers Retro',
      price: '110€',
      originalPrice: '140€',
      image:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      year: '2024',
      description:
        'Sneakers rétro avec semelle compensée et design vintage authentique.',
      technologies: ['Semelle Compensée', 'Design Vintage', 'Cuir Premium'],
      client: 'Sneaker Lab',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  currentIndex = 0;
  isMobile = false;
  slidesCount = 0;
  visibleProjects: any[] = [];

  ngOnInit(): void {
    this.checkViewport();
    window.addEventListener('resize', () => this.checkViewport());
    this.updateVisibleProjects();
  }

  checkViewport(): void {
    this.isMobile = window.innerWidth < 768;
    this.slidesCount = this.isMobile
      ? this.projects.length
      : Math.ceil(this.projects.length / 3);
    this.updateVisibleProjects();
  }

  updateVisibleProjects(): void {
    if (this.isMobile) {
      this.visibleProjects = [this.projects[this.currentIndex]];
    } else {
      const start = this.currentIndex * 3;
      this.visibleProjects = this.projects.slice(start, start + 3);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slidesCount;
    this.updateVisibleProjects();
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slidesCount) % this.slidesCount;
    this.updateVisibleProjects();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.updateVisibleProjects();
  }

  openUrl(url: string | null, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  }
}
