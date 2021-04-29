import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { InterceptorHeadersService } from './interceptors/interceptor-headers.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorHeadersService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
