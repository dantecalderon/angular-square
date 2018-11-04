import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive'

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDENiBMXz4q5SBEkfXE2wVocT7RZNCQPkI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
