import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFunctionComponent } from './card-function.component';

describe('CardFunctionComponent', () => {
  let component: CardFunctionComponent;
  let fixture: ComponentFixture<CardFunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFunctionComponent]
    });
    fixture = TestBed.createComponent(CardFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
