import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuserDashboardComponent } from './cuser-dashboard.component';

describe('CuserDashboardComponent', () => {
  let component: CuserDashboardComponent;
  let fixture: ComponentFixture<CuserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
