import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from '../header/component1/component1.component';
import { Component2Component } from '../header/component2/component2.component';
import { Component3Component } from '../header/component3/component3.component';
import { Component4Component } from '../header/component4/component4.component';
import { Component5Component } from '../header/component5/component5.component';

export const routes: Routes = [  { path: 'home', component: Component1Component },
    { path: 'about', component: Component2Component },
    { path: 'projects', component: Component3Component },
    { path: 'portfolio', component: Component4Component },
    { path: 'contact', component: Component5Component },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }