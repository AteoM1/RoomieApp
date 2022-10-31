import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage implements OnInit {

  constructor(private router:Router, private storage:Storage) { 
   
  }

  ngOnInit() {
  }

  iniciarSesion(){
    this.storage.set('usuarioLogueado', 'prueba');
    this.router.navigateByUrl('/home');
  }

}
