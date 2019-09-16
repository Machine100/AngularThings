import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatdashboardComponent } from './catdashboard.component';

describe('CatdashboardComponent', () => {
  let component: CatdashboardComponent;
  let fixture: ComponentFixture<CatdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
