import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaplacePage } from './laplace.page';

describe('LaplacePage', () => {
  let component: LaplacePage;
  let fixture: ComponentFixture<LaplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaplacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
