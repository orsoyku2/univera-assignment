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
  {id:1,name:"Öykü",surname:"Örs",age:25,imageUrl:"https://cdn4.vectorstock.com/i/1000x1000/72/98/femaln-round-african-american-vector-18307298.jpg",job:'engineer'};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUser():User{
    return user;
  }
}
