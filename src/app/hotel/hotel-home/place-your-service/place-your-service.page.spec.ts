import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceYourServicePage } from './place-your-service.page';

describe('PlaceYourServicePage', () => {
  let component: PlaceYourServicePage;
  let fixture: ComponentFixture<PlaceYourServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceYourServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceYourServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
