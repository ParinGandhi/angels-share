import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdditiesComponent } from './oddities.component';

describe('OdditiesComponent', () => {
  let component: OdditiesComponent;
  let fixture: ComponentFixture<OdditiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdditiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdditiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
