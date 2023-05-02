import { Component, OnInit } from '@angular/core';
import {faUser,faHeart,faLock} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  icon=faUser;
  icon1=faHeart;
  icon2=faLock;

  constructor() { }

  ngOnInit(): void {
  }

}
