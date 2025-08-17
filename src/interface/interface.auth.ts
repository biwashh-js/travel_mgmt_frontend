export interface ILoginData {
    email:string;
    password:string;
}

export interface IRegisterData{
     email:string;
    password:string;
    firstName:string;
    lastName:string;
    gender?:string;
    phone?:string;
    confirm_password:string;
}