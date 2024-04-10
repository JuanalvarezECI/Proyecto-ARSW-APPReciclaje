export class UserModel {
    id!: number;
    firstname!: string;
    secondName!: string;
    email!: string;
    type!: number;
    points!: number;
    password!: string;
    offers!: any[]; // Puedes reemplazar 'any' con el tipo de tus ofertas si tienes un modelo para ellas
  }