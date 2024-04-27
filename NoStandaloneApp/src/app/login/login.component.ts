import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user/user.model';
import { LoginResponse } from './login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: UserModel = new UserModel();
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    console.log(this.user.email); // Imprime el usuario en la consola
    console.log(this.user.password); // Imprime el usuario en la consola
    console.log('Sending request with data:', this.user); // Imprime la petición completa

    this.userService.login(this.user).subscribe(
      response => {
        console.log('Response:', response); // Imprime la respuesta completa // Imprime la respuesta en la consola
        if (response.state) {
          console.log('Login successful, redirecting to reciclaje page...');
          // Si el inicio de sesión fue exitoso, redirige al usuario a su perfil.
          this.router.navigate(['/reciclaje']);
        } else {
        console.log('Login failed:', response.message);
          // Si el inicio de sesión no fue exitoso, muestra un mensaje de error.
          this.errorMessage = response.message;
        }
      },
      error => {
        console.log(error);
        // Si hubo un error en la petición, muestra un mensaje de error.
        this.errorMessage = 'An error occurred';
      }
    );
  }
}
