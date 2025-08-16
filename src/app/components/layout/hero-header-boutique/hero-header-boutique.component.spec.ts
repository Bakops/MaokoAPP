import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeaderBoutiqueComponent } from './hero-header-boutique.component';

describe('HeroHeaderBoutiqueComponent', () => {
  let component: HeroHeaderBoutiqueComponent;
  let fixture: ComponentFixture<HeroHeaderBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroHeaderBoutiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroHeaderBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
