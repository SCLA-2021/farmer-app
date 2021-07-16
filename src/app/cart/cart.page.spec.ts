import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CartPage } from './cart.page';

describe('CartPage', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<CartPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CartPage],
        imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
      }).compileComponents();

      fixture = TestBed.createComponent(CartPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
