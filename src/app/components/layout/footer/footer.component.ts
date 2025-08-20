import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [RouterModule, CommonModule],
  styleUrl: './footer.component.css',
  standalone: true,
})
export class FooterComponent {}
