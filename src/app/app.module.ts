import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';

import { OrderByPipe } from './filters/orderby.pipe';
import { SearchByPipe } from './filters/searchby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    OrderByPipe,
    SearchByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
