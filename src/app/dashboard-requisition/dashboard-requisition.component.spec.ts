import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequisitionComponent } from './dashboard-requisition.component';

describe('DashboardRequisitionComponent', () => {
  let component: DashboardRequisitionComponent;
  let fixture: ComponentFixture<DashboardRequisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRequisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
