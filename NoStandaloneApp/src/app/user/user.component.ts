import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any = {
    id: null,
    type: null,
    points: null,
    firstname: '',
    secondName: '',
    email: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.user = data;
    });
  }
  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      response => {
        console.log(response);
        // Aquí puedes manejar la respuesta del servidor si es necesario
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  // Aquí puedes agregar más métodos para manejar la creación de usuarios, obtener un usuario por ID, etc.
}