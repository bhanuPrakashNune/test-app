import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastGamesComponent } from './past-games.component';

describe('PastGamesComponent', () => {
  let component: PastGamesComponent;
  let fixture: ComponentFixture<PastGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
