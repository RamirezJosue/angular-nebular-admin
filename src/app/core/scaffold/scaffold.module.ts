import { Inject, ModuleWithProviders, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import {
  COSMIC_THEME,
  NbActionsModule,
  NbButtonModule, NbCardModule, NbContextMenuModule,
  NbDialogModule,
  NbIconModule, NbLayoutModule,
  NbMenuModule, NbSearchModule,
  NbSelectModule, NbSidebarModule,
  NbSpinnerModule,
  NbThemeModule, NbUserModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { OneColumnComponent } from './layouts/one-column/one-column.component';
import { DARK_THEME } from './util/theme.dark';
import { DEFAULT_THEME } from './util/theme.default';
import { CORPORATE_THEME } from './util/theme.corporate';
import { NbThemeService, NbToastrModule, NbGlobalLogicalPosition } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';


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
  NbSpinnerModule,
  NbDialogModule.forChild(),
  NbCardModule
];

const COMPONENTS = [
  OneColumnComponent,
  FooterComponent,
  HeaderComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...NB_MODULES
  ],
  exports: [CommonModule, ...COMPONENTS]
})
export class ScaffoldModule {
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
  static forRoot(): ModuleWithProviders<ScaffoldModule> {
    return {
      ngModule: ScaffoldModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ],
        ).providers!,
        ...NbToastrModule.forRoot({ duration: 5000, position: NbGlobalLogicalPosition.TOP_END}).providers!,
      ],
    }
  }
}
