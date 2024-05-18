import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from '../conexion';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css']
})
export class PremiosComponent implements OnInit {
  private offersSub!: Subscription;
  premios:any = ""


  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.offersSub = this.socketService.getpricesUpdateListener()
      .subscribe((prices) => {
        console.log("premiosooooos:", prices)
        this.premios = prices
      });
  }

  tomarPremio(premio:any){
    this.socketService.takePrice(premio)
    alert("premio tomado con exito")
  }

}
