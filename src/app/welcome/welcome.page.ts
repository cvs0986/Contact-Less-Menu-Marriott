import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersItemService } from '../orders-item.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  showWelcomeImage = false;
  propertyType: number;
  hotelDetails;
  hotelName;
  welcomeMsg;
  logo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderItemService: OrdersItemService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('hi')) {
        return;
      }
      const hotelId = paramMap.get('hi');
      localStorage.setItem('hi', paramMap.get('hi'));
      localStorage.setItem('table', paramMap.get('table'));
      localStorage.setItem('propertyType', paramMap.get('type'));
      this.propertyType = +paramMap.get('type');
      console.log(this.propertyType);
      this.orderItemService.hotelId = hotelId;
      console.log(hotelId, this.orderItemService.hotelId);

      // 'dXEwMm5qSVVGaWFkNzhCRHlQN2g5RjhvMWIvNnlDWHEvbFR1S29VRjJYaz0'
      this.api.getRestaurentProperties(hotelId).subscribe(
        (resp) => {
          console.log(resp);
          this.hotelDetails = resp.body.details;
          this.logo = resp.body.data.logo;
          this.hotelDetails = resp.body.assets;
          // this.propertyType = resp.body.is_restaurant;
          // this.hotelName = resp.body.hotel_name;
          localStorage.setItem('hotelInfo', JSON.stringify(resp.body.data));
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  ionViewDidEnter() {
    console.log(this.propertyType);
    setTimeout(() => {
      if (this.propertyType === 0) {
        this.redirectToHome();
        return false;
      }
    }, 1000);

    setTimeout(() => {
      if (this.propertyType === 1) {
        this.router.navigateByUrl('/home');
        return false;
      }
    }, 1500);
  }

  takeAway() {
    localStorage.removeItem('orderType');
    localStorage.setItem('orderType', 'take-away');
    this.router.navigateByUrl('/home');
  }

  dineIn() {
    localStorage.removeItem('orderType');
    localStorage.setItem('orderType', 'dine-in');
    this.router.navigateByUrl('/home');
  }

  redirectToHome() {
    this.router.navigateByUrl('/hotel/tabs/hotel-home');
  }
}
