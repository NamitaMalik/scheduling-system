import { ConfigService } from './config.service';
import { AppConfig } from './app';

export function init(configSvc: ConfigService): () => Promise<AppConfig> {
  return () => configSvc.fetchAndSetAppConfig();
}
