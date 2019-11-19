import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuserDashboardComponent } from './vuser-dashboard.component';

describe('VuserDashboardComponent', () => {
  let component: VuserDashboardComponent;
  let fixture: ComponentFixture<VuserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
