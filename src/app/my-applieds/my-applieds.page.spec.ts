import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAppliedsPage } from './my-applieds.page';

describe('MyAppliedsPage', () => {
  let component: MyAppliedsPage;
  let fixture: ComponentFixture<MyAppliedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppliedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAppliedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
