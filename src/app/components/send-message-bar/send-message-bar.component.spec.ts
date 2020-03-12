import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageBarComponent } from './send-message-bar.component';

describe('SendMessageBarComponent', () => {
  let component: SendMessageBarComponent;
  let fixture: ComponentFixture<SendMessageBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
