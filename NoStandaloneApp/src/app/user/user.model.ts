export class UserModel {
    id!: number;
    Firstname!: string;
    SecondName!: string;
    Email!: string;
    Type!: number;
    Points!: number;
    offers!: any[]; // Puedes reemplazar 'any' con el tipo de tus ofertas si tienes un modelo para ellas
  }