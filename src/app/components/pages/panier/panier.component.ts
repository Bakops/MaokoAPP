import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';

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
  imports: [HeaderComponent, CommonModule, RouterModule, FooterComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent implements OnInit {
  panier: Panier = { items: [] };
  fraisLivraison: number = 5.99;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const panierSauvegarde = localStorage.getItem('panier');
    if (panierSauvegarde) {
      this.panier = JSON.parse(panierSauvegarde);
    }
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
    alert('Redirection vers la page de paiement...');
  }

  private sauvegarderPanier(): void {
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }
}
