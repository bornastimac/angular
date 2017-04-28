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
export interface IpredajaOglasa {
    Username: string;
    Title:    string;
    Profession: string;
    Text:     string;
    AdType:   string;
}

export interface predajaJsonResponse {
  AdPostStatus: string;
}


export interface IUserInfo{
    Login: string,
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
export interface IpretragaOglasa {
    UserType : string,
	Profession : string,
	AdType : string,
	SearchTerm : string
}
export interface Ioglasi {
  Ads: Array<Ioglas>;
}

export interface Ioglas {
  Title: string;
  AdText: string;
  User: string;
  DateCreated: string;
  Viewed: string;
}
export class User{
    public static loggedUser:IUser = {username:"", password:""};
    public static userInfo :IUserInfo;

}