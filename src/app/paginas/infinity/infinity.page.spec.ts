import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfinityPage } from './infinity.page';

describe('InfinityPage', () => {
  let component: InfinityPage;
  let fixture: ComponentFixture<InfinityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfinityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
