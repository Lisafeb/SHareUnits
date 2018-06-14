import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import * as io from "socket.io-client";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];
  socket = io('http://localhost:4000');
  constructor(private adunitservice: AdunitService) { }

  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
  }
  hasToken(){
    return localStorage.getItem("jwtToken");
  }
}
