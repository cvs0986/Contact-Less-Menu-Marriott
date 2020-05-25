import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform, PopoverController, IonContent, AlertController } from '@ionic/angular';
import { CartComponent } from 'src/app/hotel/cart/cart.component';
import { HotelApiService } from 'src/app/hotel/hotel-api.service';
import { IrdMenuFilterComponent } from './ird-menu-filter/ird-menu-filter.component';
import { ItemAddOnComponent } from './item-add-on/item-add-on.component';

@Component({
  selector: 'app-ird-menu',
  templateUrl: './ird-menu.page.html',
  styleUrls: ['./ird-menu.page.scss'],
})
export class IrdMenuPage implements OnInit {
  @ViewChild(IonContent, {static: true}) content: IonContent;
  itemQty = 0;
  isIos: boolean;
  menuItemsApi: any = [];
  selectedItems: any[] = [];

  menuItems: any[] = [
    {
      headName: 'ARTFULLY BLENDED',
      // tslint:disable-next-line: max-line-length
      headDesc: 'Looking for a refreshing start to your morning? All juices and smoothies are brimming with healthy benefits and essential nutrients to invigorate body and mind. Available all day.',
      headEl: [
        {
          categoryName: 'SATISFYING SMOOTHIES',
          items: [
            {
              name: 'Recharge Remedy S',
              price: 650,
              qty: 0,
              ingredients:
                'Pineapple, apple, banana, yoghurt and coconut water',
              elements: 'CALCIUM  |  POTASSIUM  |  VITAMIN C',
            },
            {
              name: 'Glow Potion S',
              price: 650,
              ingredients:
                'Banana, peanut butter, coco powder, chia seeds, almond milk and honey',
              qty: 0,
              elements: 'OMEGA 3 | POTASSIUM | ANTIOXIDANTS',
            },
          ],
        },

        {
          categoryName: 'REVITALIZING JUICES',
          items: [
            {
              name: 'Anti-aging Solution S C',
              price: 600,
              ingredients: 'Carrot, apple and spinach',
              qty: 0,
              elements: 'FIBER | IRON | VITAMIN C',
            },
            {
              name: 'Balancing Beets S C',
              price: 600,
              ingredients: 'Beetroot, pineapple, carrot, ginger and basil',
              qty: 0,
              elements: 'VITAMIN C | CALCIUM | MAGNESIUM',
            },
            {
              name: 'Immunity S C',
              price: 600,
              ingredients: 'Apple, ginger and lemon',
              qty: 0,
              elements: 'VITAMIN C | FIBER | MAGNESIUM',
            },
          ],
        },

        {
          categoryName: 'FRESHLY SQUEEZED JUICES',
          items: [
            {
              name: 'Fruits',
              price: 525,
              ingredients: 'Orange/watermelon/pineapple',
              qty: 0,
              elements: '',
            },
            {
              name: 'Vegetables',
              price: 525,
              ingredients: 'Tomato/spinach/beetroot/carrot/celery/cucumber',
              qty: 0,
              elements: '',
            },
          ],
        },
      ],
    },
    {
      headName: 'BREAKFAST',
      headDesc: '6.00am - 11.00am',
      headEl: [
        {
          categoryName: 'A BALANCED START',
          items: [
            {
              name: 'Seasonal Sliced Fruit Platter H C',
              price: 600,
              qty: 0,
              ingredients: 'Locally sourced seasonal fruit',
              elements: '',
            },
            {
              name: 'Yoghurt H C',
              price: 385,
              ingredients: 'Low fat, Plain, Blueberry, Banana',
              qty: 0,
              elements: 'MAGNESIUM | CALCIUM | PHOSPHORUS | VITAMIN A',
            },
            {
              name: 'Oatmeal H C',
              price: 550,
              ingredients: 'Served with brown sugar and raisins',
              qty: 0,
              elements: 'POTASSIUM | CARBOHYDRATE | PROTEIN',
            },
            {
              name: 'Bircher Muesli H C S',
              price: 550,
              ingredients:
                'Yoghurt, oats, toasted almond, grapes, orange segments and honey',
              qty: 0,
              elements: 'CALCIUM | PHOSPHORUS',
            },
            {
              name: 'Bircher Muesli H C S',
              price: 550,
              ingredients:
                'Yoghurt, oats, toasted almond, grapes, orange segments and honey',
              qty: 0,
              elements: 'CALCIUM | PHOSPHORUS',
            },
            {
              name: 'Cereal Selection H C',
              price: 500,
              ingredients: 'Corn Flakes',
              qty: 0,
              elements: 'SODIUM | POTASSIUM',
            },
            {
              name: 'Lassi C',
              price: 475,
              ingredients: 'Plain/ Sweet/ Salted',
              qty: 0,
              elements: '',
            },
            {
              name: 'Buttermilk C',
              price: 475,
              ingredients: 'Salted / masala',
              qty: 0,
              elements: '',
            },
          ],
        },

        {
          categoryName: 'REVITALIZING JUICES',
          items: [
            {
              name: 'Anti-aging Solution S C',
              price: 600,
              ingredients: 'Carrot, apple and spinach',
              qty: 0,
              elements: 'FIBER | IRON | VITAMIN C',
            },
            {
              name: 'Balancing Beets S C',
              price: 600,
              ingredients: 'Beetroot, pineapple, carrot, ginger and basil',
              qty: 0,
              elements: 'VITAMIN C | CALCIUM | MAGNESIUM',
            },
            {
              name: 'Immunity S C',
              price: 600,
              ingredients: 'Apple, ginger and lemon',
              qty: 0,
              elements: 'VITAMIN C | FIBER | MAGNESIUM',
            },
          ],
        },

        {
          categoryName: 'FRESHLY SQUEEZED JUICES',
          items: [
            {
              name: 'Fruits',
              price: 525,
              ingredients: 'Orange/watermelon/pineapple',
              qty: 0,
              elements: '',
            },
            {
              name: 'Vegetables',
              price: 525,
              ingredients: 'Tomato/spinach/beetroot/carrot/celery/cucumber',
              qty: 0,
              elements: '',
            },
          ],
        },
      ],
    },
  ];

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
    private hotelApi: HotelApiService,
    private popOverCtrl: PopoverController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.isIos = this.platform.is('ios');
    console.log(this.isIos);
    this.hotelApi.getMenus('NnhkTElyTEc1c1d1ZUtpZmJPQ1JJVklzMW8xTTU3bzdJUFJ4NzBUdVdqVT0=').subscribe(
      (resp) => {
        this.menuItemsApi = resp.body.data;
        this.menuItemsApi.categories.filter(category => {
          category.sub_categories.filter(subCategory => {
            let add_ons: any;
            add_ons = subCategory.items.map((item) => {
              let o = Object.assign({}, item);
              o.addons = [];
              return o;
            });
            subCategory.items = add_ons;
          });
          if (category.without_sub_category_items.length !== 0) {
            let add_ons: any;
            add_ons = category.without_sub_category_items.map(item => {
              let o = Object.assign({}, item);
              o.addons = [];
              return o;
            });
            category.without_sub_category_items = add_ons;
          }
        });
        console.log(this.menuItemsApi);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  parsedJSON(item) {
    return JSON.parse(item);
  }

  showMenusCategory(ev) {
    this.popOverCtrl
      .create({
        component: IrdMenuFilterComponent,
        componentProps: {
          menuCategories: this.menuItemsApi.categories,
        },
        event: ev,
        translucent: true,
        showBackdrop: true,
        cssClass: 'ird-menu-filter',
      })
      .then((popoverEl) => {
        popoverEl.present();
        popoverEl.onDidDismiss().then((dismissEl) => {
          const data = dismissEl.data;
          console.log(data);
          if (dismissEl.data.role === 'closed') {
            const titleELe = document.getElementById(data.data);
            this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
            console.log(data, titleELe);
          }
          console.log(dismissEl.data);
        });
      });
  }

  addItemInitial(menuItem) {
    if (menuItem.sub_addons.length !== 0) {
      menuItem.count += 1;
      menuItem.sub_addons.filter(item => {
        if (item.type === 'single_select') {
          let add_ons: any;
          add_ons = item.addons.map((el) => {
            let o = Object.assign({}, el);
            o.selected = null;
            return o;
          });
          item.addons = add_ons;
        } else if (item.type === 'multi_select') {
          let add_ons: any;
          add_ons = item.addons.map((el) => {
            let o = Object.assign({}, el);
            o.isSelected = false;
            return o;
          });
          item.addons = add_ons;
        }
      });
      this.modalCtrl.create({
        component: ItemAddOnComponent,
        componentProps: {
          itemAddon: menuItem
        },
        backdropDismiss: false,
        cssClass: 'my-custom-modal-css'
      }).then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(dismissEl => {
          if (dismissEl.data === undefined) {
            menuItem.count = 0;
            return false;
          }
          if (dismissEl.data.dismissed === 'close-btn') {
            this.itemQty += dismissEl.data.totalQty;
            this.selectedItems.push(dismissEl.data.duplicateItem);
          }
          console.log(menuItem, this.selectedItems);
        });
      });
      console.log(this.selectedItems);
      return false;
    }
    menuItem.count += 1;
    this.selectedItems.push(menuItem);
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty, this.selectedItems);
  }

  incrementQty(menuItem) {
    if (menuItem.addons.length !== 0) {
      menuItem.count += 1;
      menuItem.addons = [];
      menuItem.sub_addons.filter((item) => {
              if (item.type === 'single_select') {
                let add_ons: any;
                add_ons = item.addons.map((el) => {
                  let o = Object.assign({}, el);
                  o.selected = null;
                  return o;
                });
                item.addons = add_ons;
              } else if (item.type === 'multi_select') {
                let add_ons: any;
                add_ons = item.addons.map((el) => {
                  let o = Object.assign({}, el);
                  o.isSelected = false;
                  return o;
                });
                item.addons = add_ons;
              }
            });
      this.modalCtrl
              .create({
                component: ItemAddOnComponent,
                componentProps: {
                  itemAddon: menuItem,
                  isRepeat: true
                },
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
              })
              .then((modalEl) => {
                modalEl.present();
                modalEl.onDidDismiss().then((dismissEl) => {
                  if (dismissEl.data === undefined) {
                    menuItem.count -= 1;
                    return false;
                  }
                  if (dismissEl.data.dismissed === 'close-btn') {
                    this.itemQty += dismissEl.data.totalQty;
                    dismissEl.data.duplicateItem.count = 1;
                    this.selectedItems.push(dismissEl.data.duplicateItem);
                    console.log(this.selectedItems);
                  }
                  console.log(menuItem);
                });
              });
      return false;
    }
    const selectedIndex = this.selectedItems.indexOf(menuItem);
    this.selectedItems[selectedIndex].count += 1;
    this.selectedItems[selectedIndex].count -= 1;
    menuItem.count += 1;
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty, this.selectedItems);
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      item.addons = [];
      this.itemQty -= 1;
      if (this.itemQty < 1) {
        this.selectedItems = [];
      }
      console.log(item.count, item, this.itemQty, this.selectedItems);
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      console.log(item.count, item, this.itemQty, this.selectedItems);
    }
  }

  reviewOrder() {
    localStorage.removeItem('cart-items');
    const cartItems = [];
    this.menuItemsApi.categories.filter(item => {
      item.sub_categories.filter(item => {
        item.items.filter(item => {
          if (item.count !== 0) {
            cartItems.push(item);
          }
        });
      });
      item.without_sub_category_items.filter(item => {
        if (item.count !== 0) {
          cartItems.push(item);
        }
      });
    });
    console.log(cartItems);
    localStorage.setItem('cart-items', JSON.stringify(cartItems));

    this.modalCtrl.create({
      component: CartComponent,
      componentProps: {
        cartItems: this.selectedItems,
        itemQty: this.itemQty
      }
    }).then(modalEl => {
      modalEl.present();
      modalEl.onDidDismiss().then(dismissEl => {
        if (dismissEl.data.dismissed === 'closed') {
            this.itemQty = dismissEl.data.totalQty;
          }
      });
    });
  }
}
