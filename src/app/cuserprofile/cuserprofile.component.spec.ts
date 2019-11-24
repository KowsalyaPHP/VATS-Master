import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuserprofileComponent } from './cuserprofile.component';

describe('CuserprofileComponent', () => {
  let component: CuserprofileComponent;
  let fixture: ComponentFixture<CuserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
