import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../../../ngrx/actions';
import { IState } from '../../../interfaces/store.interfaces';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<IState>
  ) { }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(event: Event) {
    event.stopPropagation();

    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(new actions.SignInRequest(this.form.value));
  }

  isInvalid(field: AbstractControl): boolean {
    return field.invalid && (field.dirty || field.touched);
  }
}
