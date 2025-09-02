import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBackTopComponent } from './button-back-top.component';

describe('ButtonBackTopComponent', () => {
  let component: ButtonBackTopComponent;
  let fixture: ComponentFixture<ButtonBackTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonBackTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBackTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
