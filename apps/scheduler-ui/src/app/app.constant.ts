import { AppConfig } from './app';

export const API_URL = {
  APPOINTMENTS: '/Appointments',
};

export const APP_CONFIG_PATH = '/assets/config.json';

export const DEFAULT_APP_CONFIG: AppConfig = {
  apiEndPointUrl: '/api',
  auth: {
    headerKey: 'key',
    headerValue: 'E9658970-8A7E-4821-9335-6DCEAA3AC061',
  },
};
