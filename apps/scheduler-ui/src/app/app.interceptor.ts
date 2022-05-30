import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { AppConfig } from './app';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private _appConfig!: AppConfig;
  constructor(private configService: ConfigService) {}
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._appConfig = this.configService.getAppConfig();
    let modifiedRequest = req.clone();
    if (!req.url.includes('/assets')) {
      modifiedRequest = req.clone({
        ...modifiedRequest,
        url: `${this._appConfig.apiEndPointUrl}${modifiedRequest.url}`,
        headers: req.headers.append(
          this._appConfig.auth.headerKey,
          this._appConfig.auth.headerValue
        ),
      });
    }
    return next.handle(modifiedRequest);
  }
}
