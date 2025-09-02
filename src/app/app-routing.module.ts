import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/account/login/login.component';
import { ShopComponent } from './shop/shop.component';
import { PagesComponent } from './pages/pages.component';
import { ElementsComponent } from './elements/elements.component';
import { glasses } from './home/glasses/glasses.component';
import { ProductLeftSidebarComponent } from './shop/product/sidebar/product-left-sidebar/product-left-sidebar.component';
import { Tryon } from './pages/account/try-on/try-on';
//import { RegisterComponent } from './pages/account/register/register.component'; // Import the RegisterComponent


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/home-page',
    pathMatch: 'full'
  },
  {
    path: 'home/producdetails/:id',
   component:ProductLeftSidebarComponent,
    // pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shop',
    component: ShopComponent,
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  { 
    path: 'pages',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) 
  },
  { 
    path: 'elements', 
    component: ElementsComponent,
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
  {
    path: '**', // Navigate to Home Page if not found any page
    redirectTo: 'home/home-page',
  },
  //{ path: 'register', component: RegisterComponent }, // Define the route for the RegisterComponent
  { path: 'login', component: LoginComponent }, // Login page route

   // Add the new route here
   { path: 'pages/try-on/:productId', component: Tryon }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
