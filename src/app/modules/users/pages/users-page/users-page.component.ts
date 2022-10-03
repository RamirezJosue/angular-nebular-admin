import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styles: [
  ]
})
export class UsersPageComponent implements OnInit {

  disabled: boolean = true;

  users = [
    { id: 1, username: 'merling.ramirez', name: 'Merling Josue', selected: false },
    { id: 2, username: 'carmen.lv', name: 'Carmen Limachi', selected: false },
    { id: 3, username: 'pepe.ra', name: 'Pepe Ramirez', selected: false },
  ];

  form: FormGroup = this.fb.group({
    users: this.fb.array([]),
    selectAll: [false]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.users.forEach(({ username, name, selected }) => {
      this.userArray.push(
        this.fb.group({ username, name, selected })
      )
    });
    this.onChange();
  }

  onChange() {
    this.form.get('selectAll')?.valueChanges.subscribe(selected => {
      this.disabled = selected ? false: true;
      this.userArray.controls.map((value: any) => value.get('selected')?.patchValue(selected, { emitEvent: false }));
    });

    this.userArray.valueChanges.subscribe(value => {
      const allSelected = value.every(({ selected }: any) => selected);
      this.disabled = value.filter(({selected}: any) => selected).length > 0 ? false: true;
      if (this.form.get('selectAll')?.value !== allSelected) {
        this.form.get('selectAll')?.patchValue(allSelected, { emitEvent: false });
      }
    });
  }

  get userArray() {
    return this.form.get('users') as FormArray;
  }

  onSubmit() {
    const form = this.userArray.value.filter(({selected}: any) => selected);
    console.log(form);
  }

}
