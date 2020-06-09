import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PessimisticPage } from './pessimistic.page';

describe('PessimisticPage', () => {
  let component: PessimisticPage;
  let fixture: ComponentFixture<PessimisticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessimisticPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PessimisticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
