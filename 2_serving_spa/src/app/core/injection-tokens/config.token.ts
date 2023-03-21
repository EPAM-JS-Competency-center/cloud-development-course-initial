import { InjectionToken } from '@angular/core';
import { Config } from '../../../environments/config.interface';

export const CONFIG_TOKEN = new InjectionToken<Config>('CONFIG_TOKEN');
