import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oferta } from './oferta';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private baseURL = "http://localhost:37000/offers";

  constructor(private httpClient : HttpClient) { }


  // este metodo obtiene las ofertas
  

  obtenerListaOfertas(): Observable<Oferta[]> {
    return this.httpClient.get<Oferta[]>(`${this.baseURL}`).pipe(
      tap(data => {
        console.log('Datos de ofertas recibidos:', data);
      })
    );
  }
  //este metodo guarda las ofertas 
  registrarOferta(oferta:Oferta) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,oferta)
  }


}
