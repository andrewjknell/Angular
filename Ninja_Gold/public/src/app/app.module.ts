import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttmService } from './httm.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
