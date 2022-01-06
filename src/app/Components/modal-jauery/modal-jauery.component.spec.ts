import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJaueryComponent } from './modal-jauery.component';

describe('ModalJaueryComponent', () => {
  let component: ModalJaueryComponent;
  let fixture: ComponentFixture<ModalJaueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJaueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJaueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
