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

//export interface IOglasi {
// Ads: Array<IOglas>;
//}

export interface IOglas {
  Title: string;
  AdText: string;
}

export interface IUserInfo{
    Login: boolean,
    IsCompany: string,
    FirstName: string,
    LastName: string,
    Email: string,
    Profession : string,
	Keywords : string,
	City : string,
	AboutMe : string,
    //fizicka
    Phone : string,
    //pravna
    CompanyName: string,
    Fax: string,
    ContactPhone: string
}
export class User{
    public static loggedUser:IUser = {username:"", password:""};
    public static userInfo :IUserInfo;

}