import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

import { MenuDataService } from 'src/app/shared/services/menu-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menu: NbMenuItem[] = [];

  constructor(
    private menuDataService: MenuDataService,
  ) { }

  ngOnInit(): void {
    this.menuDataService.menu().subscribe((menu: any) => this.menu = menu);
  }

}
