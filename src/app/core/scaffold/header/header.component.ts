import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { map, Subject, takeUntil } from 'rxjs';
import { LayoutService } from '../services/layout.service';

export interface User {
  name: string;
  picture: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  hideMenuOnClick: boolean = false;

  user: any = {
    name: "Josue Ramirez",
    picture: "https://lh3.googleusercontent.com/fife/AAWUweUHmsi2QbdrxP05UdgWxw9oAb77PIW6mEHAfiU_WegIkNFyx72AMo7AJrkls7zkWVOQAMTnudk4s1wKzbXq4u_RXsPnz3RTKoeUSv2gkjGRhOmtN2HkmoT5k8zSLWSx4_2WP81x9-xWSjZrKEmeFxrezN4vf1MrVZ_QUM_Ou-Rgqin30OD18Jk0lxmBW-BPisETrjC_InFD2yKRm2X9EfdQCeljATH0Q7f86uEMCrtkRdvlsc-VCGaBUwhr8bCJ61cin6CQK-mC8yvSjoac1t8OJg-2m6MFEMU5rTiaA2Q-cV8vZf_uE_R-BVmiyT490S_pReEIpH-kVaKDEALI60wH9MKdjaw0-ckBAc_VkxIq4dp8GAhRpGYZ5X6ot-6gEdbA_5FsvMEMTeEggVK5aL_F96SfM-yFjH3FCjl8S2PiNgk2BlUr91to9dUnQauCZYVVdBv4MhkuhIHikvyyS5HQSLg6kLwLyBN0UM1s8aBsVAkV_zafBybJnHRf9ydrruUkPAyJ4v3qNCwL16_kPJex2ZXpy4ltHuuKxOO6FT9If4VGmZjGcM7S3JyyhNTy19Gz97-MOVoY4cY5saWBnYJgPnPLgsY1ch_8FkFC4OEkocDt-EJw17pmeLtMDmFCEwqqToA4O42ngjW-8CO2sAb9fBjMJ3GlVTjkG-WVGAJS2XGH9OQMsUfD6TjGMlhxV23UA0Q6-mg7XahVsEDDYaEcc9A-TwQw8_oqOcVC_zqKd7c=s32-c"
  };

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';
  userMenu = [{ title: 'Perfil' }, { title: 'Salir' }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.currentTheme = this.themeService.currentTheme;
    const { xl, is } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      ).subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      ).subscribe(themeName => this.currentTheme = themeName);


    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint),
        takeUntil(this.destroy$),
      )
      .subscribe(currentBreakpoint => {
        this.userPictureOnly = currentBreakpoint.width < xl;
        this.hideMenuOnClick = currentBreakpoint.width <= is;
      });

    this.menuService.onItemClick().subscribe(() => {
      if (this.hideMenuOnClick) {
        this.sidebarService.collapse('menu-sidebar');
      }
    });

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', themeName);
    }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

}
