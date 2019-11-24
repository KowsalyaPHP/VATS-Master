import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoreditUserComponent } from './vendoredit-user.component';

describe('VendoreditUserComponent', () => {
  let component: VendoreditUserComponent;
  let fixture: ComponentFixture<VendoreditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoreditUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoreditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
