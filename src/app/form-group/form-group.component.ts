import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements AfterViewInit {
  candidateRegistration!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.candidateRegistration = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      mobile: [''],
      email: ['', Validators.email],
    });
  }

  ngAfterViewInit(): void {
    console.log(this.candidateRegistration.get('email')?.invalid);

    this.candidateRegistration.get('name')?.valueChanges.subscribe((data) => {
      console.log(data);
      this.candidateRegistration
        .get('email')
        ?.statusChanges.subscribe((data) => {
          console.log(data);
        });
    });
  }

  onSubmit() {
    console.log(
      this.candidateRegistration.value,
      this.candidateRegistration.valid
    );
  }

  onReset() {
    this.candidateRegistration.reset({
      name: 'kismat',
      age: '23',
      mobile: '873497',
      email: 'abc',
    });
  }

  patch() {
    this.candidateRegistration.patchValue({ name: 'kismat' });
  }
}
