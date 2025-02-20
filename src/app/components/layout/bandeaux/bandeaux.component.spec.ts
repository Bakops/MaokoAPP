import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauxComponent } from './bandeaux.component';

describe('BandeauxComponent', () => {
  let component: BandeauxComponent;
  let fixture: ComponentFixture<BandeauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandeauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandeauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
