import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveriasDisponiblesComponent } from './averias-disponibles.component';

describe('AveriasDisponiblesComponent', () => {
  let component: AveriasDisponiblesComponent;
  let fixture: ComponentFixture<AveriasDisponiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveriasDisponiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveriasDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
