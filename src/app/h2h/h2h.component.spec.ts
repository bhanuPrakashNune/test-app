import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H2hComponent } from './h2h.component';

describe('H2hComponent', () => {
  let component: H2hComponent;
  let fixture: ComponentFixture<H2hComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H2hComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H2hComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
