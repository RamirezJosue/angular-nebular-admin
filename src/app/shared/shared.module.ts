import { Inject, ModuleWithProviders, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { OneColumnComponent } from './layouts/one-column/one-column.component';

import {
  COSMIC_THEME,
  NbActionsModule,
  NbButtonModule, NbContextMenuModule,
  NbIconModule, NbLayoutModule,
  NbMenuModule, NbSearchModule,
  NbSelectModule, NbSidebarModule,
  NbThemeModule, NbThemeService, NbUserModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DEFAULT_THEME } from './util/theme.default';
import { CORPORATE_THEME } from './util/theme.corporate';
import { DARK_THEME } from './util/theme.dark';


const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule.forRoot(),
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule.forRoot(),
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbThemeModule.forRoot({name: 'default'},[DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]),
];

const COMPONENTS = [
  OneColumnComponent,
  FooterComponent,
  HeaderComponent
]


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [CommonModule, ...COMPONENTS,]
})
export class SharedModule {
  theme: any = 'default';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private nbThemeService: NbThemeService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.getItem('theme') ? this.theme = localStorage.getItem('theme'): this.theme;
      this.nbThemeService.changeTheme(this.theme)
    }
  }
}
