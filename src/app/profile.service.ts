
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // public users:string;
  users:any;
  user:User;
  

  private username:string;
  private access_token='b0e8755ebc54834518b19a7c54f9a0c4226a7e05';


  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='ambonte';
    this.access_token='b0e8755ebc54834518b19a7c54f9a0c4226a7e05';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" +
     this.access_token +"&access_token=" + this.access_token );
   }
  
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" +
    this.access_token +"/repos&access_token=" + this.access_token );
  }
  updateProfile(username:string){
    this.username=username;
    console.log(username);
  

  }

}
