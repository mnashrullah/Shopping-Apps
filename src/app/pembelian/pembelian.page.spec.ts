import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PembelianPage } from './pembelian.page';

describe('PembelianPage', () => {
  let component: PembelianPage;
  let fixture: ComponentFixture<PembelianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembelianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PembelianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
