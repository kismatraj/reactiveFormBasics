import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArray2Component } from './form-array2.component';

describe('FormArray2Component', () => {
  let component: FormArray2Component;
  let fixture: ComponentFixture<FormArray2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArray2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArray2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
