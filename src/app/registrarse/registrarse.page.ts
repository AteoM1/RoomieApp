import { Component, OnInit } from '@angular/core';
import {Plugins, CameraResultType, CameraSource, Geolocation } from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  latitud = "0.0";
  longitud = "0.0";
  imagenUsuario = "assets/perfil1.png"
  foto:SafeResourceUrl;
 
  constructor(private sanitize: DomSanitizer) { }

  ngOnInit() {
    this.calcularPosicion();
  }

  async tomarFoto(){
    const imagen = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.foto = this.sanitize.bypassSecurityTrustResourceUrl(imagen && imagen.dataUrl);
  }

  async calcularPosicion(){
    const coordenadas = await Geolocation.getCurrentPosition();
    this.latitud = coordenadas.coords.latitude.toString();
    this.longitud = coordenadas.coords.longitude.toString();
  }

}
