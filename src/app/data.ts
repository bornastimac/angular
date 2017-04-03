export interface ILogin {
    Login:  string,
}

export interface ILogout
{
  LogoutStatus: string;
}

export interface IUser {
    username : string;
    password : string;
}

export class User{
    public static loggedUser:IUser = {username:"", password:""};

}