import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CakeService } from './cake.service';
import { FormsModule } from '@angular/forms';
import { CakesComponent } from './cakes/cakes.component';


@NgModule({
  declarations: [
    AppComponent,
    CakesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
