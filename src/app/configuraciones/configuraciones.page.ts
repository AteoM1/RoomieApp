import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage implements OnInit {

  toggleActivo= false;

  constructor(private storage:Storage) {

    this.storage.get('mostrarTemaOscuro').then((result)=>{
      if(result === true){
        document.getElementsByTagName("app-root")[0].setAttribute('data-color-theme', 'dark');
        this.toggleActivo = true;
      }
      else{
        document.getElementsByTagName("app-root")[0].setAttribute('data-color-theme', 'light');
        this.toggleActivo = false;
      }
    });

  }

  ngOnInit() {
  }

  cambiarTema(event){
    if(event.detail.checked){
      document.getElementsByTagName("app-root")[0].setAttribute('data-color-theme', 'dark');
      this.storage.set('mostrarTemaOscuro', true);
    }
    else{
      document.getElementsByTagName("app-root")[0].setAttribute('data-color-theme', 'light');
      this.storage.set('mostrarTemaOscuro', false);
    }
  }



}
