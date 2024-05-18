import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isAuthenticated = false;
  private currentUser: any = null;

  constructor() { }
  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  updateUserProfile(user: any): void {
    // Aquí puedes implementar la lógica para actualizar el perfil del usuario
    // Por ejemplo, guardar los cambios en una base de datos o almacenamiento persistente
    console.log('Usuario actualizado:', user);
    // Ejemplo de implementación: this.http.put('/api/user', user);
  }



}

