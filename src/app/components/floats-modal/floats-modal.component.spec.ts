import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatsModalComponent } from './floats-modal.component';

describe('FloatsModalComponent', () => {
  let component: FloatsModalComponent;
  let fixture: ComponentFixture<FloatsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
