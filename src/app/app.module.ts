import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { NgProgressModule } from 'ngx-progressbar';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    NgProgressModule,
    NbAuthModule.forRoot(),
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
