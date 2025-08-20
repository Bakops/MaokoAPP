import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeaderFemmeComponent } from './hero-header-femme.component';

describe('HeroHeaderFemmeComponent', () => {
  let component: HeroHeaderFemmeComponent;
  let fixture: ComponentFixture<HeroHeaderFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroHeaderFemmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroHeaderFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
