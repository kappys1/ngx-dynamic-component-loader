import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSecondComponentComponent } from './example-second-component.component';

describe('ExampleSecondComponentComponent', () => {
  let component: ExampleSecondComponentComponent;
  let fixture: ComponentFixture<ExampleSecondComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSecondComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
