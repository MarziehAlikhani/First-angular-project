import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstweb';
  imgurl='https://picsum.photos/200';
  count=0;
  name:string;
  userName:string;
private _customerName:string;
  //increament button
  increamentCount(){
this.count +=1;
  }


//check person method
  checkperson(updatedValue){

this.userName=updatedValue;
if(updatedValue=='marzieh')
{alert('welcome back marzieh')}
  
}
}
