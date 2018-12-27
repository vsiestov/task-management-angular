import { ModuleWithProviders, NgModule } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        GlobalService
      ]
    };
  }
}
