import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { PanierComponent } from './components/panier/panier.component';

export const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'a_propos', component: AProposComponent },
  { path: 'panier', component: PanierComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
