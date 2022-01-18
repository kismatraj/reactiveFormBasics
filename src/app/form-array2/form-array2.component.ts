import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array2',
  templateUrl: './form-array2.component.html',
  styleUrls: ['./form-array2.component.scss'],
})
export class FormArray2Component implements OnInit {
  rootGroup!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
