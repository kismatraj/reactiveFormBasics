import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormArray2Component } from './form-array2/form-array2.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormArray2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
