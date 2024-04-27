import { Component, OnInit } from '@angular/core';
import { Oferta } from '../oferta';
import { OfertaService } from '../oferta.service';
import { Route } from '@angular/router';


@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrl: './create-offer.component.css'
})
export class CreateOfferComponent implements OnInit{

  Oferta : Oferta = new Oferta();
  constructor (private ofertaServicio:OfertaService){}

  ngOnInit(): void {
    console.log(this.Oferta);
      
  }

  guardarOferta(){
    this.ofertaServicio.registrarOferta(this.Oferta).subscribe((response: any) => {
    });
  }

 

  onSubmit(){
    this.guardarOferta()
  }

}


