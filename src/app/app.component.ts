import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {faUser,faHeart,faLock} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ImagePath:string="/assets/img/fashion.jpg";
  title = 'fristy';
  
  constructor() { 
    
  }
  
}
