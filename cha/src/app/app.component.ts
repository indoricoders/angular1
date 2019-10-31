import { Component } from '@angular/core';
import { Message } from '@app/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Hi Akshay! how can i help you?', 'assets/images/bot.png', new Date())
    ];
  }

  showchatbot= false;
  hidedialogbox=true;

chatbot(){
  this.showchatbot = true;
  this.hidedialogbox=false;
}


}
