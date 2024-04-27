import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { OfferModel } from '../reciclaje/reciclaje.model';

@Component({
  selector: 'app-reciclaje',
  templateUrl: './reciclaje.component.html',
  styleUrls: ['./reciclaje.component.css']
})


export class ReciclajeComponent {
ofertas: OfferModel[] = [];
constructor(private userService: UserService) { }
  onSubmit(form: NgForm) {
    const material = form.value.material;
    const cantidad = form.value.cantidad;
     // Enviar la oferta al backend
    this.userService.enviarOferta(material, cantidad).subscribe(
          response => {
            console.log('Oferta enviada con éxito:', response);
            // Aquí puedes realizar alguna acción adicional si es necesario
          },
          (error: any) => {
            console.error('Error al enviar la oferta:', error);
            // Manejar el error aquí si es necesario
          }
    );

    // Aquí puedes enviar la oferta al servidor y procesarla
    console.log('Oferta recibida:', material, cantidad);
  }

  ngOnInit(): void {
      this.cargarOfertas();
    }

    cargarOfertas(): void {
      this.userService.getOfertas().subscribe(
        (ofertas: OfferModel[]) => {
          this.ofertas = ofertas;
        },
        (error: any) => {
          console.error('Error al cargar las ofertas:', error);
        }
      );
    }
}

