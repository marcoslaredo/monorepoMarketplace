import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BooksModule } from '@bmc/books';
import { HeaderComponent } from "../header/header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BooksModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
