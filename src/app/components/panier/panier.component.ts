import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';

interface Produit {
  id: number;
  nom: string;
  description: string;
  prix: number;
  image: string;
}

interface PanierItem {
  produit: Produit;
  quantite: number;
}

interface Panier {
  items: PanierItem[];
}

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent implements OnInit {
  // Initialiser le panier avec un tableau vide pour éviter les valeurs undefined
  panier: Panier = { items: [] };
  fraisLivraison: number = 5.99;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Charger le panier depuis le localStorage ou un service
    const panierSauvegarde = localStorage.getItem('panier');
    if (panierSauvegarde) {
      this.panier = JSON.parse(panierSauvegarde);
    }
    // Pas besoin d'initialiser à nouveau car déjà fait plus haut
  }

  diminuerQuantite(item: PanierItem): void {
    if (item.quantite > 1) {
      item.quantite--;
      this.sauvegarderPanier();
    } else {
      this.supprimerDuPanier(item);
    }
  }

  augmenterQuantite(item: PanierItem): void {
    item.quantite++;
    this.sauvegarderPanier();
  }

  supprimerDuPanier(item: PanierItem): void {
    const index = this.panier.items.findIndex(
      (i) => i.produit.id === item.produit.id
    );
    if (index !== -1) {
      this.panier.items.splice(index, 1);
      this.sauvegarderPanier();
    }
  }

  calculerSousTotal(): number {
    return this.panier.items.reduce(
      (total, item) => total + item.produit.prix * item.quantite,
      0
    );
  }

  calculerTotal(): number {
    return this.calculerSousTotal() + this.fraisLivraison;
  }

  procederCommande(): void {
    // Rediriger vers la page de paiement ou de checkout
    // this.router.navigate(['/checkout']);
    alert('Redirection vers la page de paiement...');
  }

  private sauvegarderPanier(): void {
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }
}
