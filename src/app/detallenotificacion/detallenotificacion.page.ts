import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../services/notificaciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallenotificacion',
  templateUrl: './detallenotificacion.page.html',
  styleUrls: ['./detallenotificacion.page.scss'],
  providers: [NotificacionesService]
})
export class DetallenotificacionPage implements OnInit {

  idNotificacionSolicitada;
  detalleNotificacion;

  constructor(private backend : NotificacionesService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
     this.idNotificacionSolicitada = params.get("id")
    });
  }

  ionViewDidEnter(){
    this.backend.obtenerDetalleNotificacion(this.idNotificacionSolicitada).subscribe(
      response => {
        this.detalleNotificacion = response;
      }
    );
  }

}
