import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirTecnicoComponent } from './anadir-tecnico.component';

describe('AnadirTecnicoComponent', () => {
  let component: AnadirTecnicoComponent;
  let fixture: ComponentFixture<AnadirTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
