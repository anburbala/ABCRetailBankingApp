import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundtransferComponent } from './fundtransfer.component';

describe('FundtransferComponent', () => {
  let component: FundtransferComponent;
  let fixture: ComponentFixture<FundtransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundtransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
