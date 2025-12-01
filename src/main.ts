import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import localeFrBe from '@angular/common/locales/fr-BE';
import { registerLocaleData } from '@angular/common';
import { appConfig } from './app/app.config';

// Ajouts nécessaires pour ton API
import { provideHttpClient } from '@angular/common/http';
import { Configuration } from './app/api/configuration';
import { ApiModule } from './app/api/api.module';

registerLocaleData(localeFrBe);

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideHttpClient(),
    { provide: Configuration, useFactory: () => new Configuration({ basePath: 'http://localhost:8080'}) },
    ApiModule
  ]
})
  .catch((err) => console.error(err));
