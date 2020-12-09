import { User } from "./../../models/user";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  private currentUser: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((res) => {
      this.currentUser = res.filter((user: User) => {
        return user.email === this.authService.getConnectedUser().email;
      });
      console.log(this.currentUser);
    });
  }
  update() {}
}
