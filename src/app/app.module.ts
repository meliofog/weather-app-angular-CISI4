import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoService } from './services/weather.service';

@NgModule({
declarations: [
MeteoComponent
],
imports: [
ReactiveFormsModule,
CommonModule,
BrowserModule,
FormsModule,
HttpClientModule,

],
providers: [MeteoService],
})
export class AppModule {}