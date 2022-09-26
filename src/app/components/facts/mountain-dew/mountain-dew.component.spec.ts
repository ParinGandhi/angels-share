import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainDewComponent } from './mountain-dew.component';

describe('MountainDewComponent', () => {
  let component: MountainDewComponent;
  let fixture: ComponentFixture<MountainDewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainDewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainDewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
