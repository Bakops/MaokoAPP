import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HeroHeaderComponent } from './components/layout/hero-header/hero-header.component';
import { TestApiComponent } from './services/test-api.component';

@NgModule({
  declarations: [TestApiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AppComponent,
    HeaderComponent,
    HeroHeaderComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [],
})
export class AppModule {}
