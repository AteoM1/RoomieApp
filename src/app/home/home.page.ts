import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NotificacionesService } from '../services/notificaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NotificacionesService]
})
export class HomePage {

  notificacionesAMostrar = [];

  constructor(private storage:Storage, private backend: NotificacionesService) {

    this.storage.get('mostrarTemaOscuro').then((result)=>{
      if(result === true){
        document.getElementsByTagName("app-root")[0].setAttribute('data-color-theme', 'dark');
      }
      else{
        document.getElementsByTagName("app-root")[0].setAttribute('data-color-theme', 'light');
      }
    });

  }

  ionViewDidEnter(){
    this.backend.obtenerNotificaciones().then(
      ultimasNotificaciones => {
        this.notificacionesAMostrar = ultimasNotificaciones;
      }
    )
  }

}
