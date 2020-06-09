import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptimistPage } from './optimist.page';

describe('OptimistPage', () => {
  let component: OptimistPage;
  let fixture: ComponentFixture<OptimistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptimistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
