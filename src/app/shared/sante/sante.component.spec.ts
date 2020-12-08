import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SanteComponent } from './sante.component';

describe('SanteComponent', () => {
  let component: SanteComponent;
  let fixture: ComponentFixture<SanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
