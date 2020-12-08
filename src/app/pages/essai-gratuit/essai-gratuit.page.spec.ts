import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EssaiGratuitPage } from './essai-gratuit.page';

describe('EssaiGratuitPage', () => {
  let component: EssaiGratuitPage;
  let fixture: ComponentFixture<EssaiGratuitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssaiGratuitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EssaiGratuitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
