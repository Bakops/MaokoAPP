import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './components/pages/a-propos/a-propos.component';
import { AcceuilComponent } from './components/pages/acceuil/acceuil.component';
import { BoutiqueComponent } from './components/pages/boutique/boutique.component';
import { CollectionComponent } from './components/pages/collection/collection.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { FemmeComponent } from './components/pages/femme/femme.component';
import { HommeComponent } from './components/pages/homme/homme.component';
import { PanierComponent } from './components/pages/panier/panier.component';

export const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'a_propos', component: AProposComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'homme', component: HommeComponent },
  { path: 'femme', component: FemmeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
