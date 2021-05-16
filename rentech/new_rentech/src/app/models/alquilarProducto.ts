import { NgbPaginationNumber } from "@ng-bootstrap/ng-bootstrap";

export class alquilarProducto {
  constructor(
    public idcliente: string,
    public idproducto: string,
    public cantidad: number,
    public precio: number,
    public fecha: string,
    public fecha2: string,

  ){}

}
