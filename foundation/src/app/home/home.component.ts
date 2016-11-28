import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 @Input() public homtitle:string ;
 @Output() delete = new EventEmitter();

 onDelete(){
   this.delete.emit(this.homtitle);
 }
  constructor() { }

  ngOnInit() {
  }

}
