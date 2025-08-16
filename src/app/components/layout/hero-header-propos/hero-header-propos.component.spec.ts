import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeaderProposComponent } from './hero-header-propos.component';

describe('HeroHeaderProposComponent', () => {
  let component: HeroHeaderProposComponent;
  let fixture: ComponentFixture<HeroHeaderProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroHeaderProposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroHeaderProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
