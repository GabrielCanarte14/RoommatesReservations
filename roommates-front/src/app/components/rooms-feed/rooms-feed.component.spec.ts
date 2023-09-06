import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsFeedComponent } from './rooms-feed.component';

describe('RoomsFeedComponent', () => {
  let component: RoomsFeedComponent;
  let fixture: ComponentFixture<RoomsFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsFeedComponent]
    });
    fixture = TestBed.createComponent(RoomsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
