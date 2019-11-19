import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmagineComponent } from './emagine.component';

describe('EmagineComponent', () => {
  let component: EmagineComponent;
  let fixture: ComponentFixture<EmagineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmagineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmagineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
