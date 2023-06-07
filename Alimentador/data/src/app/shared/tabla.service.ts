import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CleaningModel } from './tabla.model';
import { ScheduleModel } from './tabla.model';
import { DispensingModel } from './tabla.model';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerTablaDispensador() {
    return this.http.get<DispensingModel[]>(this.BASE_URL+'/dispensinglog');
  }

  obtenerTablaHorario() {
    return this.http.get<ScheduleModel[]>(this.BASE_URL+'/schedule');
  }

  obtenerTablaAlertas() {
    return this.http.get<CleaningModel[]>(this.BASE_URL+'/cleaningalerts');
  }

  // obtenerProductos() {
  //   return this.http.get<ProductoModel[]>(this.BASE_URL+'/productos');
  // }

  // obtenerProducto(id: string) {
  //   return this.http.get<ProductoModel[]>(`${this.BASE_URL}/productos/${id}`);
  // }

  // comprarProducto(producto: ProductoModel) {
  //     return this.http.post<string>(`${this.BASE_URL}/productos/comprar/${producto.id_producto}`, producto)
  // }

  // // comprarProducto(id: number, producto: ProductoModel) {
  // //   return this.http.put<string>(`${this.BASE_URL}/productos/comprar/${id}`, producto)
  // // }

  // agregarProducto(producto: ProductoModel) {
  //   return this.http.post<string>(`${this.BASE_URL}/productos/agregar`, producto);
  // }

  // actualizarProducto(producto: ProductoModel) {
  //   return this.http.put<string>(`${this.BASE_URL}/productos/actualizar/${producto.id_producto}`, producto)
  // }

  // borrarProducto(id: string) {
  //   return this.http.delete<string>(`${this.BASE_URL}/productos/borrar/${id}`)
  // }


}
