import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {


 mediaItems=[
 {  id:1,
    name:"Firebug",
    medium:"Movies",
    category:"Science fiction",
    year:"2012",
    wachedOn:876868,
    isFavorite: true
  },
   {  id:2,
    name:"Firebug2",
    medium:"Series",
    category:"Science fiction",
    year:"2012",
    wachedOn:null,
    isFavorite: false
  },
   {  id:2,
    name:"Firebug3",
    medium:"Movies",
    category:"Science fiction",
    year:"2012",
    wachedOn:56765765,
    isFavorite: false
  }
  ]

   onMediaItemDelete(mediaitem){
    console.log("hello onMediaItemDelete")
  }

  constructor() { }

  ngOnInit() {
  }

}
