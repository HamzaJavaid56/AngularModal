import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNGBComponent } from './modal-ngb.component';

describe('ModalNGBComponent', () => {
  let component: ModalNGBComponent;
  let fixture: ComponentFixture<ModalNGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNGBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
