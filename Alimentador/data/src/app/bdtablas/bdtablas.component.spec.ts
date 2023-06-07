import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDtablasComponent } from './bdtablas.component';

describe('BDtablasComponent', () => {
  let component: BDtablasComponent;
  let fixture: ComponentFixture<BDtablasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BDtablasComponent]
    });
    fixture = TestBed.createComponent(BDtablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
