import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit, OnChanges {
  orderForm!: FormGroup;

  ngOnInit(): void {}

  constructor(private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      email: ['', Validators.email],
      mobile: ['', Validators.required],
      items: this.formBuilder.array([this.createItem()]),
    });
    console.log(this.orderForm);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.orderForm);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  get items() {
    return this.orderForm.get('items') as FormArray;
  }

  onAdd() {
    this.items.push(this.createItem());
  }

  onRemove(index: number) {
    if (this.items.length > 1) this.items.removeAt(index);
  }

  onSubmit() {
    console.log(this.orderForm.valid, this.orderForm.value);
    console.log(this.orderForm);
  }

  onReset() {
    this.orderForm.reset({
      customerName: 'Test',
    });
  }

  onPatch() {
    this.orderForm.patchValue({
      customerName: 'Test',
    });
  }
}
