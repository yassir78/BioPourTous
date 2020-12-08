import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BebeComponent } from './bebe.component';

describe('BebeComponent', () => {
  let component: BebeComponent;
  let fixture: ComponentFixture<BebeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
