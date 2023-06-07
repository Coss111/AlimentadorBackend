import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactnachoComponent } from './contactnacho.component';

describe('ContactnachoComponent', () => {
  let component: ContactnachoComponent;
  let fixture: ComponentFixture<ContactnachoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactnachoComponent]
    });
    fixture = TestBed.createComponent(ContactnachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
