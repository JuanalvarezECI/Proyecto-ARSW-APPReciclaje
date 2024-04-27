import { UserModel } from './user/user.model';
export class Oferta {
        owner: UserModel;
        user: UserModel;
        address: string;
        description: string;
        weight: number;
        points: number;
        status: boolean;
        date: Date;
        lat: number;
        lon: number;
        id : number;
}
