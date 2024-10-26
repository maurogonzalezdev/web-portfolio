import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, finalize, map, Observable } from 'rxjs';

import { LoaderService } from '../services/loader.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private _spinner: NgxSpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._spinner.show();

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      finalize(() => {
        setTimeout(() => {
          this._spinner.hide();
        }, 5000);
      })
    );
  }
}
