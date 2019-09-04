import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaddatabaseComponent } from './readdatabase.component';

describe('ReaddatabaseComponent', () => {
  let component: ReaddatabaseComponent;
  let fixture: ComponentFixture<ReaddatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaddatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaddatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
