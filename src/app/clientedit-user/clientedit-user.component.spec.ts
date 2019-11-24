import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteditUserComponent } from './clientedit-user.component';

describe('ClienteditUserComponent', () => {
  let component: ClienteditUserComponent;
  let fixture: ComponentFixture<ClienteditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteditUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
