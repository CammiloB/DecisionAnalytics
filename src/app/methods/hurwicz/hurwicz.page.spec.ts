import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HurwiczPage } from './hurwicz.page';

describe('HurwiczPage', () => {
  let component: HurwiczPage;
  let fixture: ComponentFixture<HurwiczPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HurwiczPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HurwiczPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
