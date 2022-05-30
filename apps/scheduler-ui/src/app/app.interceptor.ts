import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private _apiEndPointUrl = '';
  constructor(private configService: ConfigService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._apiEndPointUrl = this.configService.apiEndPointUrl.value;
    let modifiedRequest = req.clone();
    if (!req.url.includes('/assets')) {
      modifiedRequest = req.clone({
        ...modifiedRequest,
        url: `${this._apiEndPointUrl}${modifiedRequest.url}`,
        headers: req.headers.append(
          'key',
          'E9658970-8A7E-4821-9335-6DCEAA3AC061'
        ),
      });
    }
    return next.handle(modifiedRequest);
  }
}
