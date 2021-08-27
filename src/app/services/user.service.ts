import { Injectable } from '@angular/core';

export class User{
  id!: number;
  name!:string;
  surname!:string;
  age!:number;
  imageUrl?:string;
  job?:string;
}

let user: User = 
  {id:1,name:"Kristie",surname:"Cole",age:25,imageUrl:"https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",job:'engineer'};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUser():User{
    return user;
  }
}
