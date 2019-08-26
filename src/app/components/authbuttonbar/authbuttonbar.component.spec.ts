import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthbuttonbarComponent } from './authbuttonbar.component';

describe('AuthbuttonbarComponent', () => {
  let component: AuthbuttonbarComponent;
  let fixture: ComponentFixture<AuthbuttonbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthbuttonbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthbuttonbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
