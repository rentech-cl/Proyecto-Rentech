import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialPedidoComponent } from './historial-pedido.component';

describe('HistorialPedidoComponent', () => {
  let component: HistorialPedidoComponent;
  let fixture: ComponentFixture<HistorialPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
