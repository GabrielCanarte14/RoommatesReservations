import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditroomComponent } from './editroom.component';

describe('EditroomComponent', () => {
  let component: EditroomComponent;
  let fixture: ComponentFixture<EditroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditroomComponent]
    });
    fixture = TestBed.createComponent(EditroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
