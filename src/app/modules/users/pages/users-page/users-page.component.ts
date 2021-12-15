import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styles: [
  ]
})
export class UsersPageComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(resp => {
      console.log('gaaaaaaaaaaaaaaaaaaaa',resp)
    })
  }

}
