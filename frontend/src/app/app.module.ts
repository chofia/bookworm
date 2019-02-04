import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookwormService } from './services/bookworm.services';

import { BookwormComponent } from './bookworm/bookworm.component';
import { CreateComponent } from './create/create.component';
import { NavComponent } from './nav/nav.component';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    BookwormComponent,
    CreateComponent,
    NavComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookwormService],
  bootstrap: [AppComponent]
})
export class AppModule { }