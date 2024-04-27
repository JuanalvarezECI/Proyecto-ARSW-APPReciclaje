import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../oferta';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrl: './list-offer.component.css'
})
export class ListOfferComponent implements OnInit{

ofertas:Oferta[];

constructor(private ofertaServicio:OfertaService ){}

ngOnInit(): void {
  this.obtenerOfertas();
}

private obtenerOfertass(){
  this.ofertaServicio.obtenerListaOfertas().subscribe(dato => {
    this.ofertas = dato;
  });

}

private obtenerOfertas() {
  this.ofertaServicio.obtenerListaOfertas().subscribe((response: any) => {
    this.ofertas = response.data;
  });
}

}
