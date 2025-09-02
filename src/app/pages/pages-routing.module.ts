import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistComponent } from './account/wishlist/wishlist.component';
import { CartComponent } from './account/cart/cart.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { RegisterManagerComponent } from './account/register manager/register-manager.component';
import { RegisterConfirmEmailManagerComponent } from './account/register confirm email manager/RegisterConfirmEmailManagerComponent';
import { RegisterManagerAfterVerifiedComponent } from './account/register manager after verified/register-manager-after-verified.component';
import { EmailVerificationSuccess } from './account/email-verification-success/email-verification-success.Component';
import { RegisterConfirmEmailUserComponent } from './account/register confirm email user/RegisterConfirmEmailuserComponent';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { ForgetPasswordconfirmemailComponent } from './account/forget-password-confirm-email/forget-password-confirm-email.component';
import { CreateNewPasswordComponent } from './account/create new password/create-new-password.component';
import { ProfileComponent } from './account/profile/profile.component';
import { ContactComponent } from './account/contact/contact.component';
import { CheckoutComponent } from './account/checkout/checkout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchComponent } from './search/search.component';
import { Tryon } from './account/try-on/try-on';
import { Tryonphoto } from './account/try-on-photo/try-on-photo.component';
import { Tryonvideo } from './account/try-on-video/try-on-video.component';
import { Visionneed } from './account/vision-need/vision-need.component';
import { AdvancedPrescription } from './account/Advanced-Prescription/Advanced-Prescription.component';
import { AdvancedPrescriptionTwo } from './account/Advanced-Prescription-two/Advanced-Prescription-two.component';
import { Prescriptionone } from './account/Prescription-one/Prescription-one.component';
import { Prescriptiontwo } from './account/Prescription-two/Prescription-two.component';
import { lenscolor } from './account/lens-color/lens-color.component';
import { VisionTestComponent } from './account/vision-test/vision-test.component';
import { VisionTestResultComponent } from './account/vision-test-result/vision-test-result.component';
import { TypographyComponent } from './typography/typography.component';
import { ReviewComponent } from './review/review.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CompareOneComponent } from './compare/compare-one/compare-one.component';
import { CompareTwoComponent } from './compare/compare-two/compare-two.component';
import { CollectionComponent } from './collection/collection.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { ErrorComponent } from './error/error.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { help } from './help/help.component';
import { BlogLeftSidebarComponent } from './blog/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './blog/blog-right-sidebar/blog-right-sidebar.component';
import { BlogNoSidebarComponent } from './blog/blog-no-sidebar/blog-no-sidebar.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { GridTwoComponent } from './portfolio/grid-two/grid-two.component';
import { GridThreeComponent } from './portfolio/grid-three/grid-three.component';
import { GridFourComponent } from './portfolio/grid-four/grid-four.component';
import { MasonryGridTwoComponent } from './portfolio/masonry-grid-two/masonry-grid-two.component';
import { MasonryGridThreeComponent } from './portfolio/masonry-grid-three/masonry-grid-three.component';
import { MasonryGridFourComponent } from './portfolio/masonry-grid-four/masonry-grid-four.component';
import { MasonryFullWidthComponent } from './portfolio/masonry-full-width/masonry-full-width.component';
import { test } from './account/test/test.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { VisionTestStartComponent } from './account/vision-test-start/vision-test-start.component';
import { VisionTestStartTwoComponent } from './account/vision-test-start-two/vision-test-start-two.component';
import { VisionTestStartThreeComponent } from './account/vision-test-start-three/vision-test-start-three.component';
import { NewPasswordSuccessfulComponent } from './account/new-password-successful/new-password-successful.component';
import { Prescriptionthree } from './account/Prescription-three/Prescription-three.component';

const routes: Routes = [
  { 
    path: 'wishlist', 
    component: WishlistComponent 
  },
  { 
    path: 'cart', 
    component: CartComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'test', 
    component: test 
  },
  { 
    path: 'register-manager', 
    component: RegisterManagerComponent 
  },
  {
    path: 'register-confirm-email-manager', 
    component: RegisterConfirmEmailManagerComponent 
  },
  {
    path: 'register-confirm-email-user', 
    component: RegisterConfirmEmailUserComponent 
  },
  {
    path: 'email-verification-success', 
    component: EmailVerificationSuccess 
  },
  {
    path: 'register-manager-verified',
    component: RegisterManagerAfterVerifiedComponent
  },
  { 
    path: 'create-new-password', 
    component: CreateNewPasswordComponent 
  },

  { 
    path: 'forget/password', 
    component: ForgetPasswordComponent 
  },
  { 
    path: 'new-password-successful', 
    component: NewPasswordSuccessfulComponent
  },
  { 
    path: 'forget-password-confirm-email', 
    component: ForgetPasswordconfirmemailComponent 
  },
  {
    path:'try-on',
    component: Tryon
  },
  {
    path:'vision-test-start',
    component: VisionTestStartComponent
  },
  {
    path:'vision-test-start-two',
    component: VisionTestStartTwoComponent
  },
  {
    path:'vision-test-start-three',
    component: VisionTestStartThreeComponent
  },
  {
    path:'vision-test',
    component: VisionTestComponent
  },
  {
    path:'vision-test-result',
    component: VisionTestResultComponent
  },
  {
    path:'try-on-photo',
    component: Tryonphoto
  },
  {
    path:'try-on-video',
    component: Tryonvideo 
  },
  {
    path:'vision-need',
    component: Visionneed 
  },
  {
    path:'Advanced-Prescription',
    component:AdvancedPrescription
 
  },
  {
    path:'Advanced-Prescription-two',
    component:AdvancedPrescriptionTwo
  },
  {
    path:'Prescription-one',
    component: Prescriptionone
  },

  {
    path:'Prescription-two',
    component: Prescriptiontwo
  },
  {
    path:'Prescription-three',
    component: Prescriptionthree
  },

  {
    path:'lens-color',
    component: lenscolor
  },
  { 
    path: 'profile', 
    component: ProfileComponent ,
    canActivate: [AuthGuardService],
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  { 
    path: 'checkout', 
    component: CheckoutComponent,
    canActivate: [AuthGuardService],
  },
  { 
    path: 'aboutus', 
    component: AboutUsComponent 
  },
  { 
    path: 'search', 
    component: SearchComponent 
  },
  { 
    path: 'typography', 
    component: TypographyComponent 
  },
  { 
    path: 'review', 
    component: ReviewComponent,
    canActivate: [AuthGuardService],
  },
  { 
    path: 'order/success', 
    component: OrderSuccessComponent 
  },
  { 
    path: 'compare/one', 
    component: CompareOneComponent 
  },
  { 
    path: 'compare/two', 
    component: CompareTwoComponent 
  },
  { 
    path: 'collection', 
    component: CollectionComponent 
  },
  { 
    path: 'lookbook', 
    component: LookbookComponent 
  },
  { 
    path: '404', 
    component: ErrorComponent 
  },
  { 
    path: 'comingsoon', 
    component: ComingSoonComponent 
  },
  { 
    path: 'help', 
    component: help 
  },
  { 
    path: 'blog/left/sidebar', 
    component: BlogLeftSidebarComponent 
  },
  { 
    path: 'blog/right/sidebar', 
    component: BlogRightSidebarComponent 
  },
  { 
    path: 'blog/no/sidebar', 
    component: BlogNoSidebarComponent 
  },
  { 
    path: 'blog/details', 
    component: BlogDetailsComponent 
  },
  { 
    path: 'portfolio/grid/two', 
    component: GridTwoComponent 
  },
  { 
    path: 'portfolio/grid/three', 
    component: GridThreeComponent 
  },
  { 
    path: 'portfolio/grid/four', 
    component: GridFourComponent 
  },
  { 
    path: 'portfolio/masonry/grid/two', 
    component: MasonryGridTwoComponent 
  },
  { 
    path: 'portfolio/masonry/grid/three', 
    component: MasonryGridThreeComponent 
  },
  { 
    path: 'portfolio/masonry/grid/four', 
    component: MasonryGridFourComponent 
  },
  { 
    path: 'portfolio/masonry/full-width', 
    component: MasonryFullWidthComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
