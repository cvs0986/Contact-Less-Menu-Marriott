import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurentGuidelinesComponent } from './restaurent-guidelines.component';

describe('RestaurentGuidelinesComponent', () => {
  let component: RestaurentGuidelinesComponent;
  let fixture: ComponentFixture<RestaurentGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentGuidelinesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurentGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
