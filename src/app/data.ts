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

export interface IOdgovor {
  ContactUsStatus: string;
}
export interface IKontakt {

    Name: string,
    //checkirati email format prije slanja
    Email: string,
    Text: string
}


export class User{
    public static loggedUser:IUser = {username:"", password:""};

}