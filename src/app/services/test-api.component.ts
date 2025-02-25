import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-api',
  template: `<div>
    <h2>Test API</h2>
    <div *ngIf="loading">Chargement...</div>
    <pre>{{ dataString }}</pre>
  </div>`,
})
export class TestApiComponent implements OnInit {
  data: any;
  dataString: string = '';
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products?limit=1').subscribe({
      next: (response) => {
        this.data = response;
        this.dataString = JSON.stringify(response, null, 2); // Formatage JSON manuel
        this.loading = false;
      },
      error: (error) => {
        console.error('API Error:', error);
        this.loading = false;
      },
    });
  }
}
