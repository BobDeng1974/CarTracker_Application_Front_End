import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectriccarComponent } from './electriccar.component';

describe('ElectriccarComponent', () => {
  let component: ElectriccarComponent;
  let fixture: ComponentFixture<ElectriccarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectriccarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectriccarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
