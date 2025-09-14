import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCookiesComponent } from './card-cookies.component';

describe('CardCookiesComponent', () => {
  let component: CardCookiesComponent;
  let fixture: ComponentFixture<CardCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCookiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
