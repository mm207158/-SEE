import { Component, OnInit } from "@angular/core";
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Product } from "../../shared/classes/product";
import { ProductService } from "../../shared/services/product.service";
import { OrderService } from "../../shared/services/order.service";
import { CheckoutService } from "src/app/services/checkout.service";
import { CardService } from "src/app/services/card.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: UntypedFormGroup;
  public products: Product[] = [];
  public payment: string = "Stripe";
  public amount: any;

  // City selection variables
  cities: string[] = [];
  isCreatingNewCity: boolean = false;
  newCity: string = "";
  newStreet: string = "";

  constructor(
    private fb: UntypedFormBuilder,
    public productService: ProductService,
    private orderService: OrderService,
    private checkoutService: CheckoutService,
    private cardService:CardService
  ) {
    this.checkoutForm = this.fb.group({
      firstname: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$"),
        ],
      ],
      lastname: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$"),
        ],
      ],
      newPhoneNumber: ["", [Validators.required, Validators.pattern("[0-9]+")]],
      addressId: [],
      street: [],
      cityId: [],
      basketId: [localStorage.getItem("id")],
    });
  }

  ngOnInit(): void {
    this.productService.cartItems.subscribe(
      (response) => (this.products = response)
    );
    this.getTotal.subscribe((amount) => (this.amount = amount));
    this.getCities();
    this.getAddresses();
    this.getCard();
  }

  public get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  // Stripe Payment Gateway
  // stripeCheckout() {
  //   var handler = (<any>window).StripeCheckout.configure({
  //     key: environment.stripe_token,
  //     locale: "auto",
  //     token: (token: any) => {
  //       this.orderService.createOrder(
  //         this.products,
  //         this.checkoutForm.value,
  //         token.id,
  //         this.amount
  //       );
  //     },
  //   });
  //   handler.open({
  //     name: "SEE",
  //     description: "Online Glasses Store",
  //     amount: this.amount * 100,
  //   });
  // }

  // City selection methods
  onCityChange(event: any): void {
    if (event.target.value === "new") {
      this.isCreatingNewCity = true;
    } else {
      this.isCreatingNewCity = false;
    }
  }

  addNewCity(): void {
    if (this.newCity.trim()) {
      this.cities.push(this.newCity.trim());
      this.checkoutForm.controls["cityId"].setValue(this.newCity.trim());
      this.newCity = "";
      this.isCreatingNewCity = false;
    }
  }
  getCities() {
    this.checkoutService.getCities().subscribe({
      next: (res: any) => {
        this.cities = res;
        console.log(res);
      },
    });
  }
  addresses: any[] = [];
  getAddresses() {
    this.checkoutService.getAddresses().subscribe({
      next: (res: any) => {
        this.addresses = res;
        console.log(res);
      },
    });
  }
  totalPrice: number = 0;
  getCard() {
    const id = localStorage.getItem("id");
    this.cardService.getCard(id).subscribe({
      next: (res: any) => {
        this.products = res.items;
        this.products.forEach((item) => {
          this.totalPrice += item.price * item.quantity;
        });
      },
    });
  }
  onSubmit(value) {
    if (value.addressId == "new") {
      value.addressId = null;
    }
    this.checkoutService.chechOut(value).subscribe({
      next: (res: any) => {
        this.checkoutService.payment({ orderId: res.orderId }).subscribe({
          next: (res: any) => {
            window.open(res.message, '_blank');
          },
        });
      },
    });
  }
}
// // Paypal Payment Gateway
// private initConfig(): void {
//   // this.payPalConfig = {
//   //     currency: this.productService.Currency.currency,
//   //     clientId: environment.paypal_token,
//   //     createOrderOnClient: (data) => < ICreateOrderRequest > {
//   //       intent: 'CAPTURE',
//   //       purchase_units: [{
//   //           amount: {
//   //             currency_code: this.productService.Currency.currency,
//   //             value: this.amount,
//   //             breakdown: {
//   //                 item_total: {
//   //                     currency_code: this.productService.Currency.currency,
//   //                     value: this.amount
//   //                 }
//   //             }
//   //           }
//   //       }]
//   //   },
//   //     advanced: {
//   //         commit: 'true'
//   //     },
//   //     style: {
//   //         label: 'paypal',
//   //         size:  'small', // small | medium | large | responsive
//   //         shape: 'rect', // pill | rect
//   //     },
//       // onApprove: (data, actions) => {
//       //     this.orderService.createOrder(this.products, this.checkoutForm.value, data.orderID, this.getTotal);
//       //     console.log('onApprove - transaction was approved, but not authorized', data, actions);
//       //     actions.order.get().then(details => {
//       //         console.log('onApprove - you can get full order details inside onApprove: ', details);
//       //     });
//       // },
//   //     onClientAuthorization: (data) => {
//   //         console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
//   //     },
//   //     onCancel: (data, actions) => {
//   //         console.log('OnCancel', data, actions);
//   //     },
//   //     onError: err => {
//   //         console.log('OnError', err);
//   //     },
//   //     onClick: (data, actions) => {
//   //         console.log('onClick', data, actions);
//   //     }
//   // };
// }
