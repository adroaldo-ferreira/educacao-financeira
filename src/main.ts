/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';

const config = {
  ...appConfig,
  imports: [FormsModule]
};

bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));
