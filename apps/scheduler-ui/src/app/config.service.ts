import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { firstValueFrom } from 'rxjs';

import { AppConfig } from './app';
import { APP_CONFIG_PATH } from './app.constant';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private router: Router, private http: HttpClient) {}
  private _appConfig!: AppConfig;

  fetchAndSetAppConfig(): Promise<AppConfig> {
    return firstValueFrom(this.http.get<AppConfig>(APP_CONFIG_PATH)).then(
      (appConfig: AppConfig) => {
        this._appConfig = { ...appConfig};
        return appConfig;
      }
    );
  }

  getAppConfig(): AppConfig {
    return this._appConfig;
  }
}
