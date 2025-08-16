import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeaderCollectionComponent } from './hero-header-collection.component';

describe('HeroHeaderCollectionComponent', () => {
  let component: HeroHeaderCollectionComponent;
  let fixture: ComponentFixture<HeroHeaderCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroHeaderCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroHeaderCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
