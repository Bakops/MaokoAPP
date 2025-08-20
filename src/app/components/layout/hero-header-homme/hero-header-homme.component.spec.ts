import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeaderHommeComponent } from './hero-header-homme.component';

describe('HeroHeaderHommeComponent', () => {
  let component: HeroHeaderHommeComponent;
  let fixture: ComponentFixture<HeroHeaderHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroHeaderHommeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroHeaderHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
