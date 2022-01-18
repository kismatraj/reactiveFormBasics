import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormArray2Component } from './form-array2/form-array2.component';
import { FormGroupComponent } from './form-group/form-group.component';

const routes: Routes = [
  {
    path: 'formGroup',
    component: FormGroupComponent,
  },
  {
    path: 'formArray',
    component: FormArrayComponent,
  },
  {
    path: 'formArray2',
    component: FormArray2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
