import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styles: [
  ]
})
export class DateFormComponent implements OnInit {

  date: UntypedFormControl = this.fb.control('');

  constructor(
    private fb: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.date.value);
  }

}
