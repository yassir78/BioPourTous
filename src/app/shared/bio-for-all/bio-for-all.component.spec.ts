import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BioForAllComponent } from './bio-for-all.component';

describe('BioForAllComponent', () => {
  let component: BioForAllComponent;
  let fixture: ComponentFixture<BioForAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioForAllComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BioForAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
