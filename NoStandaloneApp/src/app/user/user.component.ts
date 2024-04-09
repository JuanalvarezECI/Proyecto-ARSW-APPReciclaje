import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserModel } from './user.model';


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

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.user = data;
    });
  }
  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      (response: UserModel) => {
        console.log(response);
        this.router.navigate(['/user', response.id]);

      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  // Aquí puedes agregar más métodos para manejar la creación de usuarios, obtener un usuario por ID, etc.
}