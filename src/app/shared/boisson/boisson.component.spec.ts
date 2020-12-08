import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoissonComponent } from './boisson.component';

describe('BoissonComponent', () => {
  let component: BoissonComponent;
  let fixture: ComponentFixture<BoissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoissonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
