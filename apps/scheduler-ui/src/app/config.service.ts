import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { AppConfig } from './app';
import { APP_CONFIG_PATH, DEFAULT_APP_CONFIG } from './app.constant';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private router: Router, private http: HttpClient) {}
  apiEndPointUrl: BehaviorSubject<string> = new BehaviorSubject<string>('');

  getConfig(): Promise<AppConfig> {
   return this.http
      .get<AppConfig>(APP_CONFIG_PATH)
      .toPromise()
      .then((appConfig: AppConfig = DEFAULT_APP_CONFIG) =>  {
          this.apiEndPointUrl.next(appConfig.apiEndPointUrl)
          return appConfig;
      });
  }
}
