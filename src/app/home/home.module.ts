import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

//pages 
import { HomePageOneComponent } from './home-page-one/home-page-one.component';
import { glasses } from './glasses/glasses.component';
import { sunglasses } from './sunglasses/sunglasses.component';
import { lenses } from './lenses/lenses.component';
import { ToolsComponent } from './tools/tools.component';
import { accessories } from './accessories/accessories.component';

// Widgest Components
import { SliderComponent } from './widgets/slider/slider.component';
import { LogoComponent } from './widgets/logo/logo.component';
import { ServicesComponent } from './widgets/services/services.component';
import { CollectionComponent } from './widgets/collection/collection.component';
import { BlogComponent } from './widgets/blog/blog.component';
@NgModule({
  declarations: [
    HomePageOneComponent,
    glasses,
    sunglasses,
    lenses,
    ToolsComponent,
    accessories,

    // Widgest Components
    SliderComponent,
    LogoComponent,
    ServicesComponent,
    CollectionComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
