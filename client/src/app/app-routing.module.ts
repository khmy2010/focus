import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule'
  },
  { 
    path: 'time', 
    loadChildren: './time/time.module#TimeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
