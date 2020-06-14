import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavagePage } from './savage.page';

describe('SavagePage', () => {
  let component: SavagePage;
  let fixture: ComponentFixture<SavagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
