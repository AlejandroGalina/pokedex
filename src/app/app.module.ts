import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { SvgBigDevicesComponent } from './components/svg-big-devices/svg-big-devices.component';
import { SvgTopSmallDevComponent } from './components/svg-top-small-dev/svg-top-small-dev.component';
import { SvgBgSmallDevComponent } from './components/svg-bg-small-dev/svg-bg-small-dev.component';
import { BotonRegresarComponent } from './components/boton-regresar/boton-regresar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritosComponent,
    SvgBigDevicesComponent,
    SvgTopSmallDevComponent,
    SvgBgSmallDevComponent,
    BotonRegresarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
