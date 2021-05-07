import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirAveriaComponent } from './anadir-averia.component';

describe('AnadirAveriaComponent', () => {
  let component: AnadirAveriaComponent;
  let fixture: ComponentFixture<AnadirAveriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirAveriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirAveriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
