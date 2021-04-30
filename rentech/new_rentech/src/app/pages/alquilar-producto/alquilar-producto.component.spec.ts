import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilarProductoComponent } from './alquilar-producto.component';

describe('AlquilarProductoComponent', () => {
  let component: AlquilarProductoComponent;
  let fixture: ComponentFixture<AlquilarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
