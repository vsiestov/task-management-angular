import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../../../ngrx/actions';
import { IState } from '../../../interfaces/store.interfaces';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<IState>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(event: Event) {
    event.stopPropagation();

    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(new actions.SignUpRequest(this.form.value));
  }

  isInvalid(field: AbstractControl): boolean {
    return field.invalid && (field.dirty || field.touched);
  }

}
