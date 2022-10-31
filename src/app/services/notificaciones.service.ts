import { Injectable, ɵCREATE_ATTRIBUTE_DECORATOR__POST_R3__ } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(private http:HttpClient) { }

  obtenerNotificaciones(){
    return fetch("https://demo0341113.mockable.io/notificaciones").then (response => response.json());
  }

  obtenerDetalleNotificacion (id){
    let cabeceras = new HttpHeaders();
    cabeceras.append('Content-Type', 'application/json');

    let options = {headers : cabeceras};

    let datosPeticion = {id_notificacion : id};

    console.log(datosPeticion);

    return this.http.post("https://demo0341113.mockable.io/detallenotificacion", datosPeticion, options).pipe();
  }

}
