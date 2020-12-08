import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoelComponent } from './noel.component';

describe('NoelComponent', () => {
  let component: NoelComponent;
  let fixture: ComponentFixture<NoelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
