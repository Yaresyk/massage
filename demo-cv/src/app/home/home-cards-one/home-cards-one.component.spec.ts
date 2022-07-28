import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardsOneComponent } from './home-cards-one.component';

describe('HomeCardsOneComponent', () => {
  let component: HomeCardsOneComponent;
  let fixture: ComponentFixture<HomeCardsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardsOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCardsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
