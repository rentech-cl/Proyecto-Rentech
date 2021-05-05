import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirProdComponent } from './anadir-prod.component';

describe('AnadirProdComponent', () => {
  let component: AnadirProdComponent;
  let fixture: ComponentFixture<AnadirProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
