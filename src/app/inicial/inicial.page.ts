import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(private router:Router, private storage:Storage) {
    
    this.storage.get('usuarioLogueado').then((result)=>{
      console.log(result);
      if(result){
        this.router.navigateByUrl('/home');
      }
    });

  }

  ngOnInit() {
    
  }

}
