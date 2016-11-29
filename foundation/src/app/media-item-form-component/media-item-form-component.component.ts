import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-form-component',
  templateUrl: './media-item-form-component.component.html',
  styleUrls: ['./media-item-form-component.component.css']
})
export class MediaItemFormComponentComponent implements OnInit {

  onSubmit(mediaItem){
  console.log(mediaItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
