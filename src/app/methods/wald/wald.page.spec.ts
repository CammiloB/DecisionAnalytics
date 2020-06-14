import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaldPage } from './wald.page';

describe('WaldPage', () => {
  let component: WaldPage;
  let fixture: ComponentFixture<WaldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
