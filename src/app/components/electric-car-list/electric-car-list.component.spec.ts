import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarListComponent } from './electric-car-list.component';

describe('ElectricCarListComponent', () => {
  let component: ElectricCarListComponent;
  let fixture: ComponentFixture<ElectricCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
