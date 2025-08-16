import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeaderContactComponent } from './hero-header-contact.component';

describe('HeroHeaderContactComponent', () => {
  let component: HeroHeaderContactComponent;
  let fixture: ComponentFixture<HeroHeaderContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroHeaderContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroHeaderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
