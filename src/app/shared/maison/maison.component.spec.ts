import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaisonComponent } from './maison.component';

describe('MaisonComponent', () => {
  let component: MaisonComponent;
  let fixture: ComponentFixture<MaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
