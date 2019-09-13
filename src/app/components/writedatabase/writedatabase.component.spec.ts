import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritedatabaseComponent } from './writedatabase.component';

describe('WritedatabaseComponent', () => {
  let component: WritedatabaseComponent;
  let fixture: ComponentFixture<WritedatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritedatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritedatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
