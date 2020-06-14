import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegretsPage } from './regrets.page';

describe('RegretsPage', () => {
  let component: RegretsPage;
  let fixture: ComponentFixture<RegretsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegretsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegretsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
