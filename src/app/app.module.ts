import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent, Assignment3Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [Assignment3Component]
})
export class AppModule { }
