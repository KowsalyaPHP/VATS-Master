import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuserprofileComponent } from './vuserprofile.component';

describe('VuserprofileComponent', () => {
  let component: VuserprofileComponent;
  let fixture: ComponentFixture<VuserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
