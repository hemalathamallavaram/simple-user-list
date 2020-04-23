import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ALL_ROUTES } from './routes/all-routes';


// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(ALL_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
