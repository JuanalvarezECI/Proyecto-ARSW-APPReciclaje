import { Component } from '@angular/core';
import { SocketService } from '../conexion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-offers',
  templateUrl: './new-offers.component.html',
  styleUrls: ['./new-offers.component.css']
})
export class NewOffersComponent {
  id : any = ''
  nombre : any = ''
  direccion : any = ''

  constructor(private socket : SocketService, private router: Router) {
    
  }
  insertPetition(){
    this.socket.newRequest(this.nombre, this.direccion, "En curso")
    alert("oferta enviada")
    this.router.navigate(['/inicio']);

  }

}
