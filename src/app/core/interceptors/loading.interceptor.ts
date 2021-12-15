import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  progressRef: NgProgressRef;

  constructor(
    private progress: NgProgress
  ) {
    this.progressRef = progress.ref('loading');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.progressRef.start();
    return next.handle(request).pipe(tap(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.progressRef.complete();
        }
      },(error: any) => {
        console.log(error)
      }
    ))
  }
}
