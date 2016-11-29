import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {


 mediaItems=[
 {  id:1,
    name:"Firebug Pakistan",
    medium:"Movies",
    category:"Science fiction",
    year:"2012",
    wachedOn:'12-11-2016',
    isFavorite: true
  },
   {  id:2,
    name:"firebug2",
    medium:"Series",
    category:"Science fiction",
    year:"2012",
    wachedOn:'12-11-2016',
    isFavorite: false
  },
   {  id:2,
    name:"Firebug taha",
    medium:"Movies",
    category:"Science fiction",
    year:"2012",
    wachedOn:'12-11-2016',
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
