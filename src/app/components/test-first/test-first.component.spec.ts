import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFirstComponent } from './test-first.component';

// describe, beforeEach, afterEach, it, expect, toBe
// are Jasmine methods for angular testing

// describe is used to group together a set of related tests
describe('TestFirstComponent', () => {
  let component: TestFirstComponent;
  let fixture: ComponentFixture<TestFirstComponent>;

  // to specify a task that is performed before each unit test
  beforeEach(async(() => {

    // !! TestBed class must be used within the beforeEach function
    TestBed.configureTestingModule({
      declarations: [ TestFirstComponent ]
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    // create a new instance of the component os that it can be used in tests.
    // tell test bed which component type it should instantiate
    // the result object provides features for testing a component
    fixture = TestBed.createComponent(TestFirstComponent);

    // componentFixture methods and properties:
    // componentInstance -the component object
    // debugElement - the test host element for the component
    // nativeElement - the DOM object representing the host element for the component
    // detectChanges - causes the test bed to detect state changes and reflect them in the component's template
    // whenStable - return a Promise that is resolved when the effect of an operation has been fully applied.
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // to perform the test action
  it('should create', () => {

    // to identify the result of the test
    expect(component).toBeTruthy();

    // Jasmine evaluation methods:
    // toBe - same specified value, but not need to be same object
    // toEqual - same objectas the specified value
    // toMatch - match regularexpress pattern
    // toBeTruthy - result is falsy
    // toDefined - the result is defined
  });

  // test-01
  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
