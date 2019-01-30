import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GascarComponent } from './gascar.component';

describe('GascarComponent', () => {
  let component: GascarComponent;
  let fixture: ComponentFixture<GascarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GascarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GascarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
