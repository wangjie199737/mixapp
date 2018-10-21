import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipinComponent } from './shipin.component';

describe('ShipinComponent', () => {
  let component: ShipinComponent;
  let fixture: ComponentFixture<ShipinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
