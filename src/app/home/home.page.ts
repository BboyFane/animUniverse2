import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  theData: string;
  username: string;
  constructor(private auth: AuthService){}

  goLoginFb(){
    this.auth.facebookConnect().then((user)=>{
      this.theData = JSON.stringify(user);
      console.log(user.user.displayName);
      

      // this.user = JSON.stringify(user);
      this.username = user.user.displayName;

    })
  }

}
