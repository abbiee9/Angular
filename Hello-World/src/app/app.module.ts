import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbbuJaanComponent } from './abbu-jaan/abbu-jaan.component';
import { OotyComponent } from './ooty/ooty.component';

@NgModule({
  declarations: [
    AppComponent,
    AbbuJaanComponent,
    OotyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
