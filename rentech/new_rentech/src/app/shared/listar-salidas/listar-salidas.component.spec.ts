import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSalidasComponent } from './listar-salidas.component';

describe('ListarSalidasComponent', () => {
  let component: ListarSalidasComponent;
  let fixture: ComponentFixture<ListarSalidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSalidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
