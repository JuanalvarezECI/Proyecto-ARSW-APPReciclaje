import { UserModel } from "../user/user.model";

export class LoginResponse {
    state: boolean;
    message: string;
    data: UserModel;
  
    constructor() {
      this.state = false;
      this.message = '';
      this.data = new UserModel();
    }
  }