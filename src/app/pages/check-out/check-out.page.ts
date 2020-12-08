import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.page.html",
  styleUrls: ["./check-out.page.scss"],
})
export class CheckOutPage implements OnInit {
  steps: any = [];
  cards: any = [];

  constructor() {}

  ngOnInit() {
    this.steps = [
      {
        step: "Billing",
        isSelected: true,
      },
      {
        step: "Payment",
        isSelected: false,
      },
      {
        step: "Confirm",
        isSelected: false,
      },
    ];
    this.cards = [
      "assets/images/cards/visa.png",
      "assets/images/cards/mastercard.png",
      "assets/images/cards/paypal.png",
    ];
  }
  next() {
    // If current section is billing then next payment section will be visible
    if (this.steps[0].isSelected) {
      this.steps[0].isSelected = false;
      this.steps[1].isSelected = true;
    }
    // If current section is Billing then next section confirm will be visible
    else if (this.steps[1].isSelected) {
      this.steps[0].isSelected = false;
      this.steps[1].isSelected = false;
      this.steps[2].isSelected = true;
    }
  }

  // Go to order page function
  gotoOrderPage() {}

  // Go to product page
  gotoProductsPage() {}

  // Back to previous screen
  dismiss() {}
}
