import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

// Pages Components
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
import { Tryon } from './account/try-on/try-on';
import { Tryonphoto } from './account/try-on-photo/try-on-photo.component';
import { Tryonvideo } from './account/try-on-video/try-on-video.component';
import { Visionneed } from './account/vision-need/vision-need.component';
import { VisionTestStartComponent } from './account/vision-test-start/vision-test-start.component';
import { VisionTestComponent } from './account/vision-test/vision-test.component';
import { VisionTestResultComponent } from './account/vision-test-result/vision-test-result.component';
import { AdvancedPrescription } from './account/Advanced-Prescription/Advanced-Prescription.component';
import { AdvancedPrescriptionTwo } from './account/Advanced-Prescription-two/Advanced-Prescription-two.component';
import { Prescriptionone } from './account/Prescription-one/Prescription-one.component';
import { Prescriptiontwo } from './account/Prescription-two/Prescription-two.component';
import { lenscolor } from './account/lens-color/lens-color.component';
import { test } from './account/test/test.component';
// Blog Components
import { BlogLeftSidebarComponent } from './blog/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './blog/blog-right-sidebar/blog-right-sidebar.component';
import { BlogNoSidebarComponent } from './blog/blog-no-sidebar/blog-no-sidebar.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
// Portfolio Components
import { GridTwoComponent } from './portfolio/grid-two/grid-two.component';
import { GridThreeComponent } from './portfolio/grid-three/grid-three.component';
import { GridFourComponent } from './portfolio/grid-four/grid-four.component';
import { MasonryGridTwoComponent } from './portfolio/masonry-grid-two/masonry-grid-two.component';
import { MasonryGridThreeComponent } from './portfolio/masonry-grid-three/masonry-grid-three.component';
import { MasonryGridFourComponent } from './portfolio/masonry-grid-four/masonry-grid-four.component';
import { MasonryFullWidthComponent } from './portfolio/masonry-full-width/masonry-full-width.component';
import { VisionTestStartTwoComponent } from './account/vision-test-start-two/vision-test-start-two.component';
import { VisionTestStartThreeComponent } from './account/vision-test-start-three/vision-test-start-three.component';
import { NewPasswordSuccessfulComponent } from './account/new-password-successful/new-password-successful.component';
import { Prescriptionthree } from './account/Prescription-three/Prescription-three.component';

@NgModule({
  declarations: [
    WishlistComponent,
    CartComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    RegisterManagerComponent,
    RegisterConfirmEmailManagerComponent,
    RegisterConfirmEmailUserComponent,
    EmailVerificationSuccess,
    RegisterManagerAfterVerifiedComponent,
    ForgetPasswordComponent,
    ForgetPasswordconfirmemailComponent,
    CreateNewPasswordComponent,
    NewPasswordSuccessfulComponent,
    ProfileComponent,
    ContactComponent,
    CheckoutComponent,
    AboutUsComponent,
    SearchComponent,
    Tryon,
    Tryonphoto,
    Tryonvideo,
    Visionneed,
    VisionTestStartComponent,
    VisionTestStartTwoComponent,
    VisionTestStartThreeComponent,
    VisionTestComponent,
    VisionTestResultComponent,
    AdvancedPrescription,
    AdvancedPrescriptionTwo,
    Prescriptionone,
    Prescriptiontwo,
    Prescriptionthree,
    lenscolor,
    test,
    TypographyComponent,
    ReviewComponent,
    OrderSuccessComponent,
    CompareOneComponent,
    CompareTwoComponent,
    CollectionComponent,
    LookbookComponent,
    ErrorComponent,
    ComingSoonComponent,
    help,
    BlogLeftSidebarComponent,
    BlogRightSidebarComponent,
    BlogNoSidebarComponent,
    BlogDetailsComponent,
    GridTwoComponent,
    GridThreeComponent,
    GridFourComponent,
    MasonryGridTwoComponent,
    MasonryGridThreeComponent,
    MasonryGridFourComponent,
    MasonryFullWidthComponent
  ],
  imports: [
    CommonModule,
    GalleryModule,
    LightboxModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
