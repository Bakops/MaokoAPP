import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeaderFaqComponent } from './hero-header-faq.component';

describe('HeroHeaderFaqComponent', () => {
  let component: HeroHeaderFaqComponent;
  let fixture: ComponentFixture<HeroHeaderFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroHeaderFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroHeaderFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
