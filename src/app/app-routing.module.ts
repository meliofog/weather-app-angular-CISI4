import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeteoComponent } from './meteo/meteo.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MeteoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
