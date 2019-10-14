import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttmService } from './httm.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NinjaComponent } from './ninja/ninja.component';

@NgModule({
  declarations: [
    AppComponent,
    NinjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
