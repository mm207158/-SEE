import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageOneComponent } from './home-page-one/home-page-one.component';
import { glasses } from './glasses/glasses.component';
import { sunglasses } from './sunglasses/sunglasses.component';
import { lenses } from './lenses/lenses.component';
import { ToolsComponent } from './tools/tools.component';
import { accessories } from './accessories/accessories.component';

const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageOneComponent 
  },
 
  {
    path: 'glasses',
    component: glasses
  },
  {
    path: 'sunglasses',
    component: sunglasses
  },
  {
    path: 'lenses',
    component: lenses
  },

 
  
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: 'accessories',
    component: accessories
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
